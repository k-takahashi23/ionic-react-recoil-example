import { atom } from 'recoil';
import { Task } from '../../interfaces/task';

const initState: Task[] = [];

export const tasksState = atom({
    key: "tasks",
    default: initState
});