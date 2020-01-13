import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot, initTestScheduler, addMatchers } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { LobbyEffects } from './lobby.effects';
import { LobbyService } from '../lobby.service';
import * as lobbyActions from './lobby.actions';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromRoot from '../../state';
import { Actions } from '@ngrx/effects';
import * as DATA from '../../../assets/data.json';

import { Cat, Game } from '../models/game.model';


describe('LobbyEffects', () => {

    let effects: LobbyEffects;
    let actions$: Observable<any>;
    let store: MockStore<fromRoot.State>;
    let mockLobbyService;

    beforeEach(() => {
        mockLobbyService = jasmine.createSpyObj(['getGames']);
        TestBed.configureTestingModule({
            providers: [
                LobbyEffects,
                provideMockActions(() => actions$),
                provideMockStore({}),
                {
                    provide: LobbyService,
                    useValue: mockLobbyService
                }
            ]
        });

        effects = TestBed.get(LobbyEffects);
        actions$ = TestBed.get(Actions);
        store = TestBed.get(Store);
        initTestScheduler();
        addMatchers();
    });

    describe('Movies', () => {
        it('should succeed loading Games and return LoadSuccess', () => {
            store.setState({ "lobby": { "games": [], "categories": [], "error": "", "isLoading": false } } as fromRoot.State);
            const games: Game[] = DATA['default'];
            const categories: Cat[] = games
                .flatMap(x => x.cats)
                .filter((value, index, self) => {
                    return self.findIndex(v => v.id === value.id) === index;
                });
            const action = lobbyActions.loadGames();
            const outcome = lobbyActions.loadGamesSuccess({ payload: { games: games, categories: categories } });

            actions$ = hot('-a', { a: action });
            const response = cold('-a|', { a: games });
            mockLobbyService.getGames.and.returnValues(response);

            const expected = cold('--b', { b: outcome });
            expect(effects.loadGames$).toBeObservable(expected);
        });
    });
});