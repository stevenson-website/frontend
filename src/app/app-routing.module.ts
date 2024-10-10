import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { UnderConstructionComponent } from 'src/app/pages/under-construction/under-construction.component';
import { MainPageComponent } from 'src/features/feature-main-page/main-page/main-page.component';
import { SkillsPageComponent } from 'src/features/feature-skills-page/skills-page/skills-page.component';
import { ProjectsPageComponent } from 'src/features/feature-projects-page/projects-page/projects-page.component';
import { ContactPageComponent } from 'src/features/feature-contact/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: 'under-construction',
    component: UnderConstructionComponent,
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'skills',
    component: SkillsPageComponent,
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
