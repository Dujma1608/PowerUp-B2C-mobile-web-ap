import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Session, SessionHistory, SessionResponse } from "../models/session";
import * as signalR from "@microsoft/signalr";

export default class SessionStore {
  session: SessionResponse | null = null;
  sessions: SessionHistory[] = [];
  loading = false;
  connection: signalR.HubConnection | null = null;
  url: string = "https://api-test.power-up.green/hubs/sessions";

  constructor() {
    makeAutoObservable(this);
  }

  loadSessionHistory = async () => {
    this.setLoading(true);
    try {
      const sessionHistory: SessionHistory[] = await agent.Session.getHistory();
      runInAction(() => {
        sessionHistory.forEach((session) => {
          this.sessions.push(session);
        });
        this.setLoading(false);
      });
    } catch (error) {
      console.log(error);
      this.setLoading(false);
    }
  };

  createSession = async (connectorId: number) => {
    try {
      const session = await agent.Session.create(connectorId);
      runInAction(() => (this.session = session));
    } catch (error) {
      console.log("Error creating session", error);
    }
  };

  stopSession = async (sessionId: number) => {
    try {
      const session = await agent.Session.stop(sessionId);
      console.log("Session", session);
    } catch (error) {
      console.log("Error stopping session", error);
    }
  };
  setLoading = (state: boolean) => {
    this.loading = state;
  };

  createHubConnection() {
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
          console.log("SignalR Connected", this.connection?.state);
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
      console.log("Received session info update:", sessionInfo);
    });
  };
  private updateSession = () => {
    this.connection?.on("updateSession", (updateSessionSignalRDto) => {
      console.log("Session update received:", updateSessionSignalRDto);
    });
  };
  private stopSessionSignal = () => {
    this.connection?.on("stopSession", (stopSessionSignalRDto) => {
      console.log("Session stopped:", stopSessionSignalRDto);
    });
  };

  // stopConnection = () => {
  //   this.connection
  //     ?.stop()
  //     .then(() => console.log("Connection successfully closed."))
  //     .catch((error) =>
  //       console.error("Error while closing the connection", error)
  //     );
  // };
}
