import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { tasksState } from '../recoil/atoms/tasksState';

const TextForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [number, setNumber] = useState<number>(0);
  const setTasks = useSetRecoilState(tasksState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onAdd = () => {
    setNumber(number+1);
    setTasks(t => [...t, { id: number, title, completed: false }])
    setTitle("")
  }

  return (
    <div>
      <input type="text" value={title} onChange={onChange}></input>
      <button onClick={onAdd}>登録</button>
    </div>
  )
}

export default TextForm;