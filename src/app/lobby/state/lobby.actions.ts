import { props, createAction } from '@ngrx/store';
import { Game, Cat } from '../models/game.model';

export const loadGames =
  createAction('[Lobby] Load Games');

export const loadGamesSuccess =
  createAction('[Lobby] Load Games Success', props<{ payload: {games:Game[],categories:Cat[]} }>());

export const loadGamesFail =
  createAction('[Lobby] Load Games Fail', props<{ errorMessage: string }>());
