import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'srinivas-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle("Srinivas Kalagotla | Software Engineer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Full-Stack Developer, Software Engineer, software, developer' },
      {name: 'description', content: 'I have 2 years of experience in software engineering, specializing in crafting scalable applications and data-driven solutions. My journey began at Accenture, enhancing critical applications, followed by pioneering research projects at the University of Missouri. Skilled in Java, Spring, Python and Angular, I have contributed to the realms of healthcare, automotive, and academic research. I am passionate about deploying efficient systems, optimizing data pipelines, and delivering meaningful insights through well-structured code.'},
    ]);
    
    AOS.init();


  }
}
