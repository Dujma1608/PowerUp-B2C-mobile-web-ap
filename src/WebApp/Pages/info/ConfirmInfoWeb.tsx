import { IonContent, IonPage } from "@ionic/react";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import WebConfirmInfo from "../../../pages/Web/components/WebConfirmInfo";

const ConfirmInfoWeb: React.FC = observer(() => {
  const { chargerStore, connectorStore } = useStore();
  const { loadChargers, chargerRegistry } = chargerStore;

  const [locationAlert, setLocationAlert] = useState(false);
  return (
    <IonPage>
      <IonContent>
        <WebConfirmInfo connector={connectorStore.webScannedConnector} />
      </IonContent>
    </IonPage>
  );
});

export default ConfirmInfoWeb;
