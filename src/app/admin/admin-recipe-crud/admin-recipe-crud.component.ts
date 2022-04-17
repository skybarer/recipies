import { Component, OnInit } from '@angular/core';
import { AdminRecipeCrudService } from './admin-recipe-crud.service';
import { Recipe } from 'src/app/Models/recipies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-recipe-crud',
  templateUrl: './admin-recipe-crud.component.html',
  styleUrls: ['./admin-recipe-crud.component.css']
})
export class AdminRecipeCrudComponent implements OnInit {

  recipeList: any;

  constructor(
    private adminRecipeCrudService: AdminRecipeCrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminRecipeCrudService.getRecipeList().subscribe(
      response => {
        this.recipeList = response;
        console.log(response);
      }
    )
  }

  deleteByid(recipe: Recipe) {
    this.adminRecipeCrudService.deleteById(recipe).subscribe(
      response => {
        //  this.router.navigateByUrl("admincrud");
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['admincrud']);
        });
      }
    )
  }

}
