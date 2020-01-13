import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

const SMALL_WIDTH_BREAKPOINT = 720;

@Injectable({
    providedIn: 'root',
})
export class AppLayoutService {

    public toggleSidenav$ = new Subject<void>();
    private mediaMatcher: MediaQueryList;
    public isBrowser;

    isDarktheme: boolean = true;
    dir: string = 'ltr';

    constructor(@Inject(PLATFORM_ID) private platformId) {
        this.isBrowser = isPlatformBrowser(platformId);
        if (this.isBrowser) {
            this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
        }
    }

    toggleSidenav() {
        console.log('toggle');
        this.toggleSidenav$.next(void 0);
    }

    isScreenSmall(): boolean {
        if (this.isBrowser) {
            return this.mediaMatcher.matches;
        }
        return false;
    }

}