import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  photoMe:string = "assets/IMG_20201027_1832432.jpg"
  greetingSpa:string = "Hola!";
  // greetingEng:string = "Hello!";
  aboutMeSpa:string = "Soy Juan! Fullstack Developer Jr., buscando nuevos desafios y formandome en las tecnologias que más me interesan.";
  // aboutMeEng:string = "I'm Juan! Jr. Fullstack Developer looking for new challenges and educating myself on the technologies that most interest me.";

  constructor() { }

  ngOnInit(): void {
  }

}
