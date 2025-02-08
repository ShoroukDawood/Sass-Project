import { Routes } from '@angular/router';
import { MealsComponent } from '../components/meals/meals.component';
import { IngredientsComponent } from '../components/ingredients/ingredients.component';
import { AreaComponent } from '../components/area/area.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
    {path: "", redirectTo: "meals", pathMatch: "full",},
    { path: "meals", component: MealsComponent, title: "Meals" },
    { path: "ingredients", component: IngredientsComponent, title: "Ingredients" },
    { path: "area", component: AreaComponent, title: "Area" }
];

