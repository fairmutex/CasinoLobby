import * as lobbyActions from './lobby.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { Game, Cat } from 'src/app/lobby/models/game.model';

export interface LobbyState {
  games: Game[];
  categories: Cat[];
  error: string | null;
  isLoading: boolean;
}

export const initialState: LobbyState = {
  games: [],
  categories: [],
  error: '',
  isLoading: false,
}

const lobbyReducer = createReducer(
  initialState,

  on(lobbyActions.loadGames, state => ({
    ...state,
    isLoading: true,
    error: null
  })
  ),
  on(lobbyActions.loadGamesSuccess, (state, { payload }) => ({
    ...state,
    isLoading: false,
    games: payload.games,
    categories: payload.categories,
    error: ''
  })
  ),
  on(lobbyActions.loadGamesFail, (state, { errorMessage }) => ({
    ...state,
    isLoading: false,
    games: [],
    categories: [],
    error: errorMessage
  })
  ),
);

export function reducer(state: LobbyState | undefined, action: Action) {
  return lobbyReducer(state, action);
}