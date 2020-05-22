import { Component, OnInit } from '@angular/core';
import { repos } from '../repos';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  repos = repos;

  constructor() { }

  ngOnInit() {
    
  }

  
}
