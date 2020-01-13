import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { TestComponent } from './pages/test/test.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CommonModule } from '@angular/common';
// import { AppLayoutModule } from './layout/app-layout.module';
import { AppLayoutComponent } from './layout/app-layout.component';
// import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'lobby',
        loadChildren: () => import('./lobby/lobby.module').then(m => m.LobbyModule),
      },
      { path: '', redirectTo: '/lobby', pathMatch: 'full' },
    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
  ],
  providers: [],
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: PreloadAllModules,
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
