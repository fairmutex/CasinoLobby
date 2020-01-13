import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromRoot from '../../state';
import * as fromLobby from './lobby.reducer';
import { Game } from '../models/game.model';

export interface State extends fromRoot.State {
    lobby: fromLobby.LobbyState;
}

// Selectors
const getLobbyFeatureState = createFeatureSelector<State, fromLobby.LobbyState>('lobby');


export const getGames = createSelector(
    getLobbyFeatureState,
    state => state.games
);

export const getIsLoadingFlag = createSelector(
    getLobbyFeatureState,
    state => state.isLoading
);


export const getGamesByCategory = createSelector(
    getGames,
    (games: Game[], props) => games.filter(x => x.categories.indexOf(props.categoryId) > -1)
);


export const searchGamesByName = createSelector(
    getGames,
    (games: Game[], props) => games.filter(x => x.name.toLowerCase().includes(props.searchName))
);


export const getCategories = createSelector(
    getLobbyFeatureState,
    state => state.categories
);

export const getError = createSelector(
    getLobbyFeatureState,
    state => state.error
);

export const getGameByKey = createSelector(
    getGames,
    (games: Game[], props) => games.find(x => x.key === props.key)
);
