import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe';
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
  })
/*   export class RecipeListComponent implements OnInit { */
export class RecipeItemComponent {
    @Input() recipe: Recipe;
    @Input() recipeId: number;
  }
