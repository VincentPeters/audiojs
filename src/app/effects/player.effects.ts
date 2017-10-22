import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/do';
import {Action, Store} from '@ngrx/store';


import * as fromRoot from '../reducers';
import {PlayerService} from '../providers/player.service';
import * as playerActions from '../actions/player.actions';

@Injectable()
export class PlayerEffects {
  @Effect({dispatch: false})
  load$: Observable<Action> = this.actions$
    .ofType(playerActions.LOAD)
    .map((data: any) => {
      return data.payload;
    }).do(track => this.playerService.load(track));

  @Effect({dispatch: false})
  play$: Observable<Action> = this.actions$
    .ofType(playerActions.PLAY)
    .do(track => this.playerService.play());

  @Effect({dispatch: false})
  seek$: Observable<Action> = this.actions$
    .ofType(playerActions.SEEK)
    .map((data: any) => {
      return data.payload;
    })
    .do(({seek, duration}) => this.playerService.seek({seek, duration}));

  @Effect({dispatch: false})
  pause$: Observable<Action> = this.actions$
    .ofType(playerActions.PAUSE)
    .do(track => this.playerService.pause());

  @Effect({dispatch: false})
  stop$: Observable<Action> = this.actions$
    .ofType(playerActions.STOP)
    .do(track => this.playerService.stop());


  constructor(private store$: Store<fromRoot.State>,
              private actions$: Actions,
              private playerService: PlayerService) {
  }
}
