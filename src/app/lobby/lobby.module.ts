import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LobbyRoutingModule } from './lobby-routing.module';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Smart Components
import { GameListShellComponent } from './containers/game-list-shell/game-list-shell.component';
import { GameDetailsShellComponent } from './containers/game-details-shell/game-details-shell.component';

// Dumb Components
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameItemComponent } from './components/game-item/game-item.component';

// NgRx
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/lobby.reducer';
import { LobbyEffects } from './state/lobby.effects';
import * as fromLobby from './state';
import * as lobbyActions from './state/lobby.actions';

@NgModule({
  declarations: [
    GameListShellComponent,
    GameDetailsShellComponent,
    GameDetailsComponent,
    GameItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('lobby', reducer),
    EffectsModule.forFeature([LobbyEffects]),
    LobbyRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ]
})
export class LobbyModule {
  constructor(private store: Store<fromLobby.State>) {
    this.store.dispatch(lobbyActions.loadGames());
  }
}
