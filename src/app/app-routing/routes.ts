import { Routes } from '@angular/router';
import { AccountComponent } from '../account/account.component';
import { HardwaretoolsComponent } from '../hardwaretools/hardwaretools.component';
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item';

import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { HardwaremainComponent } from '../hardwaremain/hardwaremain.component';

export const routes: Routes = [
    { path: '', redirectTo: '/AccountComponent', pathMatch: 'full' },
    { path: 'home', component: AccountComponent },
    {path: 'maintools', component: HardwaremainComponent},
    { path: 'tools/:id', component: HardwaretoolsComponent },
    { path: 'recipeItem', component: RecipeItemComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent },
    { path: 'start', component: RecipeStartComponent }
]

