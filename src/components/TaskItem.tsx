import React from 'react';
import { Task } from '../interfaces/task';
import { IonButton, IonCheckbox, IonItem, IonLabel } from '@ionic/react';

interface TaskItemProps {
  task: Task
  onToggleCheck: (task: Task) => void
  onRemove: (task: Task) => void
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleCheck,
  onRemove,
}) => {

  return (
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
        onClick={() => onRemove(task)}
      >
        DELETE
      </IonButton>
    </IonItem>
  )
}