import { TestBed, inject, async } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { LobbyService } from "./lobby.service";
import * as DATA from '../../assets/data.json';
describe('MovieService', () => {
    let MOVIES;

 
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [LobbyService],
            imports: [
                HttpClientTestingModule
            ]
        })     
      .compileComponents();
    }));
  
    beforeEach(() => {
      MOVIES = DATA['default'];
    });

    it('should be initialized', 
        inject([LobbyService], (service: LobbyService) => {
        expect(service).toBeTruthy();
    }));

    it('getAll should call get with correct URL',
        inject([LobbyService, HttpTestingController], 
               (service: LobbyService, controller: HttpTestingController) => {

        service.getGames().subscribe();
        const req = controller.expectOne('api/games');
        req.flush(MOVIES); 
        controller.verify();
    }));

 });  