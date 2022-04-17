import { Component, OnInit } from '@angular/core';
import { AdminRecipeCrudService } from './admin-recipe-crud.service';
import { Recipe } from 'src/app/Models/recipies';

@Component({
  selector: 'app-admin-recipe-crud',
  templateUrl: './admin-recipe-crud.component.html',
  styleUrls: ['./admin-recipe-crud.component.css']
})
export class AdminRecipeCrudComponent implements OnInit {

   recipeList : any;

  constructor(
    private adminRecipeCrudService : AdminRecipeCrudService
  ) { }

  ngOnInit(): void {
    this.adminRecipeCrudService.getRecipeList().subscribe(
      response => {
        this.recipeList = response;
        console.log(response);
      }
    )
  }

}
