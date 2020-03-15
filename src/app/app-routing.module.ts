import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PantryListComponent, PantryElementComponent } from './components/pantry';


const routes: Routes = [
  { path: 'pantry', component: PantryListComponent },
  {
    path: 'pantry',
    children: [
      {
        path: ':id',
        component: PantryElementComponent,
      },
    ]
  },
  {
    path: '',
    redirectTo: '/pantry',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
