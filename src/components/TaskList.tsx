import React from 'react';
import { useRecoilState } from "recoil";
import { tasksState } from '../recoil/atoms/tasksState';
import { Task } from '../interfaces/task';
import { IonButton, IonCheckbox, IonItem, IonLabel } from '@ionic/react';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  const onToggleCheck = (task: Task) => {
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
            <IonItem key={task.id}>
              <IonLabel
                style={{ textDecoration: task.completed ? "line-through" : "" }}
              >
                {task.title}
              </IonLabel>
              <IonCheckbox
                slot="start"
                onIonChange={() => onToggleCheck(task)}
              />
              <IonButton
                color="danger"
                onClick={() => onRemove(task.id)}
              >
                DELETE
              </IonButton>
            </IonItem>
          ))}
      </ul>
    </div>
  )
}

export default TaskList;