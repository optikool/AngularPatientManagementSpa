import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './views/patient-list/patient-list.component';
import { PatientListResolver } from './views/patient-list/patient-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: PatientListComponent,
    resolve: {
      patients: PatientListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
