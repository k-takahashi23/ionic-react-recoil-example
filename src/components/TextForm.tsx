import { IonButton, IonInput, IonItem } from "@ionic/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { tasksState } from '../recoil/atoms/tasksState';

export const TextForm: React.FC = () => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [currentId, setCurrentId] = useState<number>(0);
  const setTasks = useSetRecoilState(tasksState);

  const onAdd = () => {
    if (inputTitle !== "") {
      // Auto Increment ID
      setCurrentId(currentId + 1);
      // Add new Task
      const newTask = {
        id: currentId,
        title: inputTitle,
        completed: false
      };
      setTasks(t => [...t, newTask]);
      // Reset Title
      setInputTitle("");
    }
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
          disabled={inputTitle === ""}
          onClick={onAdd}
        >
          ADD
        </IonButton>
      </IonItem>
    </div>
  )
}