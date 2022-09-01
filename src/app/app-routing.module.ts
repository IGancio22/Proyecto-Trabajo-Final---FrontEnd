import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsAndLanguagesComponent } from './skills-and-languages/skills-and-languages.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CVportfolioComponent } from './cvportfolio/cvportfolio.component';
import { CopyrightIgancioComponent } from './copyright-igancio/copyright-igancio.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
