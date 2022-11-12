import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.scss']
})
export class CatFactComponent implements OnInit {
  data: any;

  constructor() { }

  ngOnInit(): void {

  }/*
  getCatFact() {
    this.data = this.catFactService.getCatFact();
    console.log(this.data);
  }*/
}
