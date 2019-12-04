import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Recipe } from './recipe';
import { Ingredient } from '../shared';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Mentaiko Spaghetti', 'Mentaiko spaghetti has become a classic of the Japanese-Italian kitchen, and is popular on late-night menus as an accompaniment to heavy drinking', 'http://www.seriouseats.com/recipes/assets_c/2017/03/20170210-mentaiko-spaghetti-vicky-wasik-9-thumb-1500xauto-436708.jpg', [
      new Ingredient('soy sauce', 2),
      new Ingredient('melted butter', 1)
    ]),
    new Recipe('Spinach and Ricotta Manicotti', 'Spinach and ricotta manicotti is one of those dishes that are edible—dare I say, enjoyable—even under the most inauspicious of circumstances (think: cafeteria steam tables).', 'http://www.seriouseats.com/recipes/assets_c/2016/09/20160929-manicotti-pasta-style-recipe-32-thumb-1500xauto-434384.jpg', [
      new Ingredient('ricotta cheese', 2),
      new Ingredient('store-bought lasagna ',3)
    ])
  ];

  constructor(private http: Http) {}

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://amar-todo.firebaseio.com/atodo.json', body, {headers: headers});
  }

  fetchData() {
    return this.http.get('https://amar-todo.firebaseio.com/atodo.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChanged.emit(this.recipes);
        }
      );
  }

}

