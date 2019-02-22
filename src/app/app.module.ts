import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//NGXS
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { UserState } from './state/user.state';
import { UserService } from './services/user.service';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([
      UserState
    ]),

    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [HttpClient, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
