import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css']
})
export class WelcomeSectionComponent implements OnInit {

  name1:string = "Juan";
  name2:string = "Ignacio";
  name3:string = "Rodriguez";

  constructor() { }

  ngOnInit(): void {
  }

}
