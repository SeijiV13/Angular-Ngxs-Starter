import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'select/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
