import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  sideBarTitles = ['id', 'title', 'work', 'cell'];
  sideBarBody = [{
    id: 54115, title: 'Mr.', work: 'Apple', cell: '011 578 5445'
  },
  {
    id: 44852, title: 'Mrs.', work: 'Microsoft', cell: '078 445 1441'
  },
  {
    id: 47744, title: 'Mr.', work: 'Google', cell: '079 335 0001'
  }];


  constructor() { }

  ngOnInit() {
  }

}
