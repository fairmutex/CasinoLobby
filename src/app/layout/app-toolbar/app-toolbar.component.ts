import { Component} from '@angular/core';
import { AppLayoutService } from '../app-layout.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './app-toolbar.component.html',
    styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent  {


    constructor(
        public appLayoutService: AppLayoutService
     ) { }


}