import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RANDOM_USER_API_PROXY_TOKEN } from '@finastra/api-interfaces';
import { PROXY_URL } from '@finastra/services/proxy';
import { RANDOM_USER_SERVICE } from 'libs/services/randomuser/src/lib/randomuser.token';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FDSModule } from './fds.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FDSModule
  ],
  providers: [
    { provide: PROXY_URL, useValue: '/proxy' },
    { provide: RANDOM_USER_SERVICE, useValue: RANDOM_USER_API_PROXY_TOKEN },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
