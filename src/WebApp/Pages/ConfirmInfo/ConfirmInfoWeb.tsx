import { IonContent, IonPage } from "@ionic/react";
import MyMap from "../../../components/Home/Map/MyMap";
import ConfirmInfo from "../../../components/Charging/ConfirmInfoModal/ConfirmInfo";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";

const ConfirmInfoWeb: React.FC = observer(() => {
  const { chargerStore, sessionStore, regularStore, profileStore } = useStore();
  const { loadChargers, chargerRegistry, charrgers } = chargerStore;

  const [locationAlert, setLocationAlert] = useState(false);
  return (
    <IonPage>
      <IonContent>
        <MyMap
          setLocationAlert={setLocationAlert}
          chargers={Array.from(chargerRegistry.values())}
        />

        <ConfirmInfo />
      </IonContent>
    </IonPage>
  );
});

export default ConfirmInfoWeb;
