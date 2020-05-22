import { Component, OnInit } from '@angular/core';
import { repos } from '../repos'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  index;
  repo;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.index = params.get('index');
        this.repo = repos[this.index];
      }
    )

  }


}
