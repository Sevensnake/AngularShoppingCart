import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HardwaretoolsComponent } from './hardwaretools/hardwaretools.component';
import {ProcessHttpmsgService} from './services/process-httpmsg.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { baseURL} from './shared/baseURL';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {HardwaretoolsService} from './services/hardwaretools.service';
import { RecipesComponent } from './recipes/recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    HardwaretoolsComponent,
    RecipesComponent,
    RecipeStartComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSliderModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [HardwaretoolsService, {provide: 'baseURL', useValue: baseURL}, ProcessHttpmsgService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
