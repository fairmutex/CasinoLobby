import { Store } from '@ngrx/store';
import { getGames, getGamesByCategory, searchGamesByName, getCategories, getGameByKey, getError } from '.';
import { LobbyState, initialState } from './lobby.reducer';
import * as DATA from '../../../assets/data.json';
describe('Lobby Selectors', () => {
    let GAMES;

    beforeEach(() => {
        GAMES = DATA['default'];
    });


    describe('getMovies', () => {
        it('should return the movies', () => {
            let lobbyState: LobbyState = initialState;
            lobbyState.games = GAMES
            expect(getGames.projector(lobbyState)).toEqual(GAMES);
        });

        it('should return call the getGames', () => {
            const store = jasmine.createSpyObj<Store<LobbyState>>('store', ['select']);
            store.select(getGames);
            expect(store.select).toHaveBeenCalledWith(getGames);
        });


        it('should call the getGamesByCategory', () => {
            const store = jasmine.createSpyObj<Store<LobbyState>>('store', ['select']);
            store.select(getGamesByCategory);
            expect(store.select).toHaveBeenCalledWith(getGamesByCategory);
        });


        it('should call the searchGamesByName', () => {
            const store = jasmine.createSpyObj<Store<LobbyState>>('store', ['select']);
            store.select(searchGamesByName);
            expect(store.select).toHaveBeenCalledWith(searchGamesByName);
        });


        it('should call the getCategories', () => {
            const store = jasmine.createSpyObj<Store<LobbyState>>('store', ['select']);
            store.select(getCategories);
            expect(store.select).toHaveBeenCalledWith(getCategories);
        });

        it('should call the getGameByKey', () => {
            const store = jasmine.createSpyObj<Store<LobbyState>>('store', ['select']);
            store.select(getGameByKey);
            expect(store.select).toHaveBeenCalledWith(getGameByKey);
        });

        it('should call the getError', () => {
            const store = jasmine.createSpyObj<Store<LobbyState>>('store', ['select']);
            store.select(getError);
            expect(store.select).toHaveBeenCalledWith(getError);
        });

    });
});