import { IonButton, IonInput, IonItem } from "@ionic/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { tasksState } from '../recoil/atoms/tasksState';

export const TextForm: React.FC = () => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [currentId, setCurrentId] = useState<number>(0);
  const setTasks = useSetRecoilState(tasksState);

  const onAdd = () => {
    setCurrentId(currentId+1);
    setTasks(t => [...t, { id: currentId, title: inputTitle, completed: false }]);
    setInputTitle("");
  }

  return (
    <div>
      <IonItem>
        <IonInput
          value={inputTitle}
          placeholder="Enter Task Title"
          onIonChange={e => setInputTitle(e.detail.value!)}
        />
        <IonButton
          onClick={onAdd}
        >
          ADD
        </IonButton>
      </IonItem>
    </div>
  )
}