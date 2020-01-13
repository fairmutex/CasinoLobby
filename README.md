# Casino Lobby

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Technology

Angular Universal SSR, PWA with Service Worker, Smart/Dumb Components, OnPush change detection strategy, Redux (NgRx), Tests Karma, Jasmine and Jasmine Marbles

## Running the Application  

git clone https://github.com/fairmutex/CasinoLobby.git  
   
cd casino-lobby
   
npm install or yarn install

As SSR   
npm run build:ssr

npm run serve:ssr

As SPA   
ng serve --ssl

Also hosted [here](https://code.fairmutex.com/projects/web/casino-lobby/) as a SPA

## Executing Tests
npm test

or

ng test --environment=test

## Issues with Data

Images with broken links however this was mitigated by a fallback default.
   

## Problems encountered

Caching of remote images with service workers need to investigate if [this](https://stackoverflow.com/questions/56043880/angular-pwa-caching-remote-images) is the issue.

## Could Have

Virtual Paginator since there are a lot of images and because of the above can't leverage caching and Chrome Audits is indicating images could be in a better suited format.
