import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'applications',
    loadChildren: () =>
      import('./applications/application.module').then(m => m.ApplicationModule)
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./accounts/account.module').then(m => m.AccountModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
