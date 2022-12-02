import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, FreeGuard } from '@guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('@modules/qna/qna.module').then((m) => m.QNAModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('@modules/others/notfound/notfound.module').then((m) => m.NotfoundModule),
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
