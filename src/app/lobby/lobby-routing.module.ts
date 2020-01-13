import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameDetailsShellComponent } from './containers/game-details-shell/game-details-shell.component';
import { GameListShellComponent } from './containers/game-list-shell/game-list-shell.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: GameListShellComponent },
    { path: 'game/:key', component: GameDetailsShellComponent },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class LobbyRoutingModule { }
