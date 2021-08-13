import React from 'react';
import { Task } from '../interfaces/task';
import { IonButton, IonCheckbox, IonItem, IonLabel } from '@ionic/react';

interface TaskItemProps {
  task: Task
  onToggleCheck: (task: Task) => void
  onDelete: (task: Task) => void
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggleCheck,
  onDelete,
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
        onClick={() => onDelete(task)}
      >
        DELETE
      </IonButton>
    </IonItem>
  )
}