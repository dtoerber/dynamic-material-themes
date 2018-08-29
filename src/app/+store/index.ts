import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromReducer from './app.reducer';
export * from './app.actions';

export interface State {
  theme: fromReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  theme: fromReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const selectHeaderState = (state: State) => state.theme;

export const selectTheme = createSelector(
  selectHeaderState,
  fromReducer.getTheme
);
