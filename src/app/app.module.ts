import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonmodelService } from './personmodel.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './component/create/create.component';
import { IndexComponent } from './component/index/index.component';
import { EditComponent } from './component/edit/edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent
  ],
imports: [
    BrowserModule,
    AppRoutingModule,
	SlimLoadingBarModule,
    HttpClientModule,
	ReactiveFormsModule
  ],
  providers: [ PersonmodelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
