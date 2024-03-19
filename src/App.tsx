import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Routes from "./app/router/Routes";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Routes />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
