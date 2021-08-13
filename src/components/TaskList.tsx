import React from 'react';
import { useRecoilState } from "recoil";
import { tasksState } from '../recoil/atoms/tasksState';
import { Task } from '../interfaces/task';
import { TaskItem } from './TaskItem';

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  const onToggleCheck = (task: Task) => {
    const copytasks = [...tasks];
    const copytask = { ...task };
    copytask.completed = !copytask.completed;
    const index=copytasks.indexOf(task);
    copytasks.splice(index, 1, copytask);
    setTasks(copytasks);
  }

  const onRemove = (task: Task) => {
    const copytasks = [...tasks];
    const index = copytasks.findIndex(int => int.id === task.id);
    copytasks.splice(index, 1);
    setTasks(copytasks);
  }

  return (
    <>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleCheck={onToggleCheck}
          onRemove={onRemove}
        />
      ))}
    </>
  )
}