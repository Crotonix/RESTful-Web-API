import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from "./component/create/create.component"
import { EditComponent } from "./component/edit/edit.component"
import { IndexComponent } from "./component/index/index.component"
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
    

const routes: Routes = [
  { path: 'create',component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'index', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
			SlimLoadingBarModule
	],
  exports: [RouterModule]
})
export class AppRoutingModule { }
