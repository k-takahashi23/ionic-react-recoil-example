import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import TaskList from '../components/TaskList';
import TextForm from '../components/TextForm';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>TODO App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">TODO App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TextForm />
        <TaskList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
