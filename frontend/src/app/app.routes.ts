import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home/home.component';
import { ListComponent } from './components/operations/list/list.component';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { AddComponent } from './components/operations/add/add.component';

export const routes: Routes = [
    {path: 'home', component: ListComponent },
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    // {path: 'operations', component: ListComponent},
    {path: 'operations/add', component: AddComponent},

    {path: '**', component: NotFoundComponent}
];
