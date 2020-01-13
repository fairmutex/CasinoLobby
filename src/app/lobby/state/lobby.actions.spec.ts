import { Store } from '@ngrx/store';

import { LobbyState } from './lobby.reducer';
import * as lobbyActions from './lobby.actions';

describe('Lobby actions', () => {
  describe('Load Games', () => {
    it('should dispatch a Load action', () => {
      const expectedAction = lobbyActions.loadGames();
      const store = jasmine.createSpyObj<Store<LobbyState>>('store', ['dispatch']);
      store.dispatch(lobbyActions.loadGames());
      expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

});