import { Component, OnInit } from '@angular/core';
import { MealsApiService } from '../../app/services/meals-api.service';
import { Categories, CategoriesNames } from '../../shared/style/interface/categories';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  stringCategories: Categories[] = [];
  categoriesName: CategoriesNames[] = [];
  selectedCategory: string = ''; 

  constructor(private mealsApi: MealsApiService) {}

  ngOnInit(): void {
    this.getCategories();
  }

getCategories() {
  this.mealsApi.getCategories().subscribe({
    next: (res) => {
      this.stringCategories = res.categories;
      console.log('All Data: ', res.categories);
    },
    error: () => {
      console.log("Error");
    }
  });
}
  onCategoryClick(category: string) {
    this.selectedCategory = category;
    this.getMealsByCategory(category);
  }

  getMealsByCategory(category: string) { 
    this.mealsApi.getSearchName(category).subscribe({
      next: (res) => {
        this.categoriesName = res.meals;
        console.log(`Categories ${category}:`, res.meals);
      },
      error: () => {
        console.log(`Fetching error ${category}`);
      }
    });
  }

}
