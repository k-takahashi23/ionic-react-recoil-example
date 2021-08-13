import { IonInput, IonItem } from "@ionic/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { tasksState } from '../recoil/atoms/tasksState';

const TextForm: React.FC = () => {
  const [inputTitle, setInputTitle] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const setTasks = useSetRecoilState(tasksState);

  const onAdd = () => {
    setNumber(number+1);
    setTasks(t => [...t, { id: number, title: inputTitle, completed: false }]);
    setInputTitle("");
  }

  return (
    <div>
      <IonItem>
        <IonInput
          value={inputTitle}
          placeholder="Enter Input"
          onIonChange={e => setInputTitle(e.detail.value!)}
        />
      </IonItem>
      <button onClick={onAdd}>登録</button>
    </div>
  )
}

export default TextForm;