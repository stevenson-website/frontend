import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { UnderConstructionComponent } from 'src/app/pages/under-construction/under-construction.component';
import { MainPageComponent } from 'src/features/feature-main-page/main-page/main-page.component';
import { SkillsPageComponent } from 'src/features/feature-skills-page/skills-page/skills-page.component';
import { GamesPageComponent } from 'src/features/feature-games-page/games-page/games-page.component';

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
    path: 'games',
    component: GamesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
