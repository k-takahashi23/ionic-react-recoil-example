import React from 'react';
import { useRecoilState } from "recoil";
import { tasksState } from '../recoil/atoms/tasksState';
import { Task } from '../interfaces/task';
import { TaskItem } from './TaskItem';

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  const onToggleCheck = (task: Task) => {
    const newTasks = tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } :  t);
    setTasks(newTasks);
  }

  const onDelete = (task: Task) => {
    const newTasks = tasks.filter(t => t.id !== task.id);
    setTasks(newTasks);
  }

  return (
    <>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleCheck={onToggleCheck}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}