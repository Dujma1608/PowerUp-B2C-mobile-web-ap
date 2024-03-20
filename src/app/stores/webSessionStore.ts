import { makeAutoObservable, runInAction } from "mobx";
import {
  FinishedSessionInfo,
  InitialSessionInfo,
  SessionResponse,
  SessionUpdate,
} from "../models/session";
import * as signalR from "@microsoft/signalr";
import webAgent from "../../WebApp/api/webAgent";

export default class WebSessionStore {
  session: SessionResponse | null = null;
  finishedSession: FinishedSessionInfo | null = null;
  loading = false;
  connection: signalR.HubConnection | null = null;
  url: string = "https://api-test.power-up.green/hubs/sessions";
  sessionUpdates: SessionUpdate | null = null;
  initialSessionInfo: InitialSessionInfo | null = null;
  startTime: Date | null = null;
  finishTime: Date | null = null;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  sessionDuration: number[] = [this.hours, this.minutes, this.seconds];
  timer: NodeJS.Timeout | null = null;
  stopFlag: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get formattedElapsedTime() {
    const formattedHours = this.hours.toString().padStart(2, "0");
    const formattedMinutes = this.minutes.toString().padStart(2, "0");
    const formattedSeconds = this.seconds.toString().padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  createSession = async (connectorId: number) => {
    try {
      const session = await webAgent.Session.create(connectorId);
      runInAction(() => {
        const jwt = session.jwt;
        const [header, payload, signature] = jwt.split(".");

        const decodedPayload = JSON.parse(atob(payload));
        this.session = decodedPayload;
        console.log("Session: ", decodedPayload);
      });
    } catch (error) {
      console.log("Error creating session", error);
    }
  };

  stopSession = async (sessionId: number) => {
    this.finishTime = new Date();
    this.stopTimer();
    try {
      const session = await webAgent.Session.stop(sessionId);
      console.log("Session", session);
    } catch (error) {
      console.log("Error stopping session", error);
    }
  };
  setLoading = (state: boolean) => {
    this.loading = state;
  };

  createWebHubConnection() {
    this.startTime = new Date();
    this.startTimer();
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(this.url, {
        withCredentials: false,
      })
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.receiveSessionInfo();
    this.updateSession();
    this.stopSessionSignal();

    if (this.connection) {
      this.connection
        .start()
        .then(() => {
          console.log("Web SignalR Connected", this.connection?.state);
          this.subscribe(this.session?.id!);
        })
        .catch((error) => {
          console.log("SignalR Connection Error: ", error);
        });
    }
  }

  private subscribe = async (sessionId: number) => {
    await this.connection
      ?.invoke("Subscribe", sessionId)
      .catch((error) => console.log(error));
  };
  private receiveSessionInfo = () => {
    this.connection?.on("receiveSessionInfo", (sessionInfo) => {
      runInAction(() => {
        this.initialSessionInfo = sessionInfo; // Populate sessionInfo with the received data
      });
      console.log("Received session info update:", sessionInfo);
    });
  };
  private updateSession = () => {
    this.connection?.on("updateSession", (updateSessionSignalRDto) => {
      runInAction(() => {
        this.sessionUpdates = updateSessionSignalRDto;
      });
      console.log("Session update received:", updateSessionSignalRDto);
    });
  };
  private stopSessionSignal = () => {
    this.connection?.on("stopSession", (stopSessionSignalRDto) => {
      runInAction(() => {
        this.finishedSession = stopSessionSignalRDto;
        this.stopFlag = true;
      });
      console.log("Session stopped:", stopSessionSignalRDto);
    });
  };

  closeConnection = () => {
    this.connection
      ?.stop()
      .then(() => console.log("Connection successfully closed."))
      .catch((error) =>
        console.error("Error while closing the connection", error)
      );
  };

  private startTimer() {
    this.timer = setInterval(() => {
      runInAction(() => {
        this.seconds++;
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;
        }
        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours++;
        }
      });
    }, 1000);
  }
  private stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  toDefault = () => {
    this.startTime = null;
    this.finishTime = null;
    this.session = null;
    this.sessionUpdates = null;
    this.initialSessionInfo = null;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.connection = null;
    this.finishedSession = null;
    this.stopFlag = false;
  };
}
