import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationListComponent } from './application-list.component';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ApplicationListComponent
      },
      {
        path: ':applicationId',
        component: ApplicationDetailComponent
      }
    ])
  ],
  declarations: [ApplicationListComponent, ApplicationDetailComponent]
})
export class ApplicationModule {}
