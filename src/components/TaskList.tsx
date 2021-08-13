import React from 'react';
import { useRecoilState } from "recoil";
import { tasksState } from '../recoil/atoms/tasksState';
import { Task } from '../interfaces/task';
import { IonCheckbox, IonItem, IonLabel } from '@ionic/react';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  const isCompleted = (task: Task) => {
    const copytasks = [...tasks];
    const copytask = { ...task };
    copytask.completed = !copytask.completed;
    const index=copytasks.indexOf(task);
    copytasks.splice(index, 1, copytask);
    setTasks(copytasks);
  }

  const onRemove = (id: number) => {
    const copytasks = [...tasks];
    const index=copytasks.findIndex(int=>int.id===id);
    copytasks.splice(index, 1);
    setTasks(copytasks);
  }

  return (
    <div>
      <ul>
          {tasks.map(task => (
            // <li key={task.id}>
            <>
              <IonItem>
                <IonLabel
                  style={{ textDecoration: task.completed ? "line-through" : "" }}
                >
                  {task.title}
                </IonLabel>
                <IonCheckbox
                  slot="start"
                  onIonChange={e => isCompleted(task)}
                />
              </IonItem>
              <button onClick={() => onRemove(task.id)}>削除</button>
              </>
            // </li>
          ))}
      </ul>
    </div>
  )
}

export default TaskList;