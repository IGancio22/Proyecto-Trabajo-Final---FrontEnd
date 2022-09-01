import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsAndLanguagesComponent } from './skills-and-languages/skills-and-languages.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CopyrightIgancioComponent } from './copyright-igancio/copyright-igancio.component';
import { CVportfolioComponent } from './cvportfolio/cvportfolio.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeSectionComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsAndLanguagesComponent,
    ContactComponent,
    NavbarComponent,
    CopyrightIgancioComponent,
    CVportfolioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeSectionComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: 'skills', component: SkillsAndLanguagesComponent},
      {path: 'education', component: EducationComponent},
      {path: 'experience', component: ExperienceComponent},
      {path: 'contact', component: ContactComponent},
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
