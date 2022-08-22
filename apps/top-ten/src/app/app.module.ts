import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { VideogamesComponent } from './videogames/videogames.component';
import { VideogamesListComponent } from './videogames/videogames-list/videogames-list.component';
import { VideogameDetailsComponent } from './videogames/videogame-details/videogame-details.component';
import { WildComponent } from './wild/wild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@top-ten/material';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { EnvironmentModule } from '@top-ten/environment';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideogamesComponent,
    VideogamesListComponent,
    VideogameDetailsComponent,
    WildComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    RoutingModule,
    ReactiveFormsModule,
    EnvironmentModule.withEnvironment(environment),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
