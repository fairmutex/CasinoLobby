import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './components/star/star.component';

@NgModule({

  imports: [
    CommonModule
  ],

  exports: [
    StarComponent
  ],
  declarations: [
    StarComponent
  ],
  entryComponents:[]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: SharedModule,
          providers: []
      };
  }
}
