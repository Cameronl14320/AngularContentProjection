import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleProjectionComponent } from './single-projection/single-projection.component';
import { MultiProjectionComponent } from './multi-projection/multi-projection.component';
import { ConditionalProjectionComponent } from './conditional-projection/conditional-projection.component';
import { ProjectionContentComponent } from './projection-content/projection-content.component';
import { ConditionalDirective } from './conditional.directive';

@NgModule({
  declarations: [
    AppComponent,
    SingleProjectionComponent,
    MultiProjectionComponent,
    ConditionalProjectionComponent,
    ProjectionContentComponent,
    ConditionalDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
