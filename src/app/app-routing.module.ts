import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'onboarding1',
    loadChildren: () => import('./onboarding/onboarding.module').then(m => m.Onboarding1PageModule)
  },
  {
    path: '',
    redirectTo: 'onboarding1',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
