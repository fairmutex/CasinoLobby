import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromLobby from '../../state';
import { Game } from '../../models/game.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './game-details-shell.component.html',
  styleUrls: ['./game-details-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameDetailsShellComponent implements OnInit {

  public game$: Observable<Game>;
  constructor(
    private store: Store<fromLobby.State>,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.game$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(params);
        return this.store.pipe(select(fromLobby.getGameByKey,{ key: params.get('key') }))
      }
     ));
    //  this.game$ = this.store.pipe(select(fromLobby.getGameByKey,{ key: 'WolfsBet' }));
  }


  navigateToLobby(){
    this.router.navigate(['/']);
  }

}
