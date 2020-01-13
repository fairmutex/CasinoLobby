import { Injectable } from "@angular/core";
import * as lobbyActions from './lobby.actions';
import { of } from 'rxjs';

import { mergeMap, map, catchError, tap, delay } from "rxjs/operators";
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { Game, Cat } from '../models/game.model';
import { LobbyService } from '../lobby.service';

@Injectable()
export class LobbyEffects {
    constructor(
        private actions$: Actions,
        private lobbyService: LobbyService
    ) { }

    loadGames$ = createEffect(() => this.actions$.pipe(
        ofType(lobbyActions.loadGames),
        mergeMap((action) => {
           return this.lobbyService.getGames()
                .pipe(
                    map((games: Game[]) => {
                        // create keys for url
                        games.forEach(function (part, index, a) {
                            a[index].key = a[index].name.trim().replace(' ', '-');;
                        });
                        // extract unique categories
                        const categories: Cat[] = games
                            .flatMap(x => x.cats)
                            .filter((value, index, self) => {
                                return self.findIndex(v => v.id === value.id) === index;
                            });
                        return lobbyActions.loadGamesSuccess({ payload: { games: games, categories: categories } })
                    }
                    ),
                    catchError(err => of(lobbyActions.loadGamesFail(err)))
                )
        })
    )
    );

}