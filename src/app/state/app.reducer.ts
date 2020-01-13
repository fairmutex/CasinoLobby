import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { State } from '.';
import { Action, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
  }),
});


