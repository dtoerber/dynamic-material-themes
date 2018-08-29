import * as actions from './app.actions';

export interface State {
  theme: string;
}

export const initialState: State = {
  theme: 'default'
};

export function reducer(
  state: State = initialState,
  action: actions.ActionsUnion
) {
  switch (action.type) {
    case actions.ActionTypes.SetTheme: {
      return { ...state, theme: action.payload };
    }
    default: {
      return state;
    }
  }
}

export const getTheme = (state: State) => state.theme;
