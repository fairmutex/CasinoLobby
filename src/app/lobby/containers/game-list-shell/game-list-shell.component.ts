import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import * as fromLobby from '../../state';
import { Observable } from 'rxjs';
import { Game, Cat } from '../../models/game.model';

@Component({
  templateUrl: './game-list-shell.component.html',
  styleUrls: ['./game-list-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameListShellComponent implements OnInit {

  public games$: Observable<Game[]>;
  public isLoading$: Observable<boolean>;
  public categories$: Observable<Cat[]>;
  public errorMessages$: Observable<string>;
  public sortOrder$: Observable<string>;

  constructor(
    private store: Store<fromLobby.State>,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.games$ = this.store.pipe(select(fromLobby.getGames));
    this.isLoading$ = this.store.pipe(select(fromLobby.getIsLoadingFlag));
    this.categories$ = this.store.pipe(select(fromLobby.getCategories));
    this.errorMessages$ = this.store.pipe(select(fromLobby.getError));
  }

 
  getGamesByCategory(event) {
    if (event.value !== undefined)
      this.games$ = this.store.pipe(select(fromLobby.getGamesByCategory, { categoryId: event.value }));
    else {
      this.games$ = this.store.pipe(select(fromLobby.getGames));
    }
  }

  searchGamesByName(value: String) {
    this.games$ = this.store.pipe(select(fromLobby.searchGamesByName, { searchName: value.toLowerCase() }));
  }


  //   sortGamesByName(value:String){
  // this.games$ = this.store.pipe(select(fromLobby.searchGamesByName,{searchName:value.toLowerCase()}));
  // }


  playClicked(gameKey:string) {
    this.router.navigate(['game/', gameKey ], {queryParams: { type: 'real' }, relativeTo: this.route});
  }


  practiceClicked(gameKey:string){
    this.router.navigate(['game/', gameKey], {queryParams: { type: 'demo' }, relativeTo: this.route});
  }

}
