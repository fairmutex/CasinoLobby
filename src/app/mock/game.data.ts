import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Game } from '../lobby/models/game.model';
import * as Games from '../../assets/data.json';

export class GamesData implements InMemoryDbService {
    createDb() {
        let games: Game[] =  Games['default'];;
        return { games };
    }
}