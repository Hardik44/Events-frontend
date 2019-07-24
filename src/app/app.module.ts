import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EventListComponent } from './event-list/event-list.component';
import { FetchEventComponent } from './fetch-event/fetch-event.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    EventListComponent,
    FetchEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'events', component: EventListComponent },
      { path: '', component: FetchEventComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
