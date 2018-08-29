import { Action } from '@ngrx/store';

export enum ActionTypes {
  SetTheme = '[App] Set Theme'
}

export class SetThemeAction implements Action {
  readonly type = ActionTypes.SetTheme;
  constructor(public payload: string) {}
}

export type ActionsUnion = SetThemeAction;
