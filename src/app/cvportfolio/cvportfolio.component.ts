import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cvportfolio',
  templateUrl: './cvportfolio.component.html',
  styleUrls: ['./cvportfolio.component.css']
})
export class CVportfolioComponent implements OnInit {

  photoCV:string = "assets/IMG_20201027_1832432.jpg"


  constructor() { }

  ngOnInit(): void {
  }

}
