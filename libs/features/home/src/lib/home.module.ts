import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import '@finastra/card';
import '@finastra/divider';
import '@finastra/icon';
import '@finastra/icon-button';
import '@finastra/list';
import { ServicesRandomUserModule } from '@finastra/services/randomuser';
import '@finastra/skeleton';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: HomeComponent }]),
    ServicesRandomUserModule,
  ],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
