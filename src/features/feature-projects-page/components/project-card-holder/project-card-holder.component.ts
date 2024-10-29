import { Component, Input, ViewChild } from '@angular/core';
import { Project } from '../../model/project';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { BehaviorSubject } from 'rxjs';
import { DarkModeService } from 'src/app/services/darkmode.service';

@Component({
  selector: 'project-card-holder',
  templateUrl: './project-card-holder.component.html',
  styleUrls: ['./project-card-holder.component.css'],
})
export class ProjectCardHolderComponent {
  @Input() projects: Project[] = [];
  darkMode$: BehaviorSubject<boolean>;

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.getBehaviorSubject();
  }

  // When removing this carousel remove also the packages "jquery", "ngx-slick-carousel" and "slick-carousel"
  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;

  slideIndex = 0;
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };
}
