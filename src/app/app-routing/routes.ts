import { Routes } from '@angular/router';
import {AccountComponent} from '../account/account.component';
import {HardwaretoolsComponent} from '../hardwaretools/hardwaretools.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: AccountComponent },
    { path: 'tools/:id', component: HardwaretoolsComponent }
]