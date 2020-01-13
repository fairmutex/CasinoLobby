import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MatSidenav, MatAccordion } from '@angular/material';
import { AppLayoutService } from '../app-layout.service';
import { BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
// import { TranslateService } from '@ngx-translate/core';
// import * as fromQuestion from '../../../core/state';
import { Store } from '@ngrx/store';
const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
    selector: 'app-sidenav',
    templateUrl: './app-sidenav.component.html',
    styleUrls: ['./app-sidenav.component.scss']
})
export class AppSidenavComponent implements OnInit {
    subscription: Subscription;
    @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;
    @ViewChild('menu', { static: true }) menu: MatAccordion;
    constructor(
        public appLayoutService: AppLayoutService,
        private router: Router,
        private route: ActivatedRoute,
        public breakpointObserver: BreakpointObserver) {
        
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
        });
        this.breakpointObserver
            .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
            .subscribe((state: BreakpointState) => {
            });

        this.subscription = this.appLayoutService.toggleSidenav$
            .subscribe(() => {
                // console.log("received");
                this.sidenav.toggle();
            }, err => {
                // console.log("error");
            }, () => {
                // console.log("complete");
            }
            );

        this.router.events.subscribe(() => {
            if (this.appLayoutService.isScreenSmall()) {
                this.sidenav.close();
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
