import type { TaskModel } from '../../models/TaskModel';

// Substituindo o Enum por um Objeto Constante
export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
} as const;

// Extraindo o tipo dos valores do objeto (para usar em tipagens)
export type TaskActionTypes =
  (typeof TaskActionTypes)[keyof typeof TaskActionTypes];

export type TaskActionWithPayload = {
  type: typeof TaskActionTypes.START_TASK; // Note o uso de typeof
  payload: TaskModel;
};

export type TaskActionsWithoutPayload =
  | {
      type: typeof TaskActionTypes.RESET_STATE;
    }
  | {
      type: typeof TaskActionTypes.INTERRUPT_TASK;
    };

export type TaskActionModel = TaskActionWithPayload | TaskActionsWithoutPayload;
