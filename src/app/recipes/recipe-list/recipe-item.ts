import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
    selector: 'rb-recipe-item',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
  })
export class RecipeItemComponent {
    @Input() recipe: Recipe;
    @Input() recipeId: number;
  }
