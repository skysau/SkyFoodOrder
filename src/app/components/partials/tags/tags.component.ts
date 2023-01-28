import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  peepsSelect:any="All (9)";
  peepSelect:any="All (9)";
  constructor(foodService:FoodService, private router:Router) {
    this.tags = foodService.getAllTags();
    
   }

  ngOnInit(): void {
  }
  onSelect(event:any){
    this.router.navigate([`tag/${(event)}`]);
  }
}
