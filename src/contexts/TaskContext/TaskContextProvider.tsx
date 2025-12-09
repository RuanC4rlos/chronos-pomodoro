import { useEffect, useReducer } from 'react';
import { TaskContext } from './TaskContext';
import { initialTaskState } from './initialTaskState';
import { taskReducer } from './taskReduce';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    console.log('Task state updated:', state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
