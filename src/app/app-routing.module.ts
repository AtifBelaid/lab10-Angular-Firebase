import { AuthGuardGuard } from './guards/auth-guard.guard';
import { DetailsEtudiantComponent } from './details-etudiant/details-etudiant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';

 
const routes: Routes = [
   {path:'', component: DashboardComponent, canActivate: [AuthGuardGuard]},
   {path:'login', component: LoginComponent}, //declancher la route pour executer le compenent
   {path:'register', component: RegisterComponent},
   {path:'etudiant/add', component: AddEtudiantComponent, canActivate: [AuthGuardGuard]},
   {path:'etudiant/:id', component: DetailsEtudiantComponent, canActivate: [AuthGuardGuard] },
   {path:'etudiant/edit/:id', component: EditEtudiantComponent, canActivate: [AuthGuardGuard] }
 ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],  
    providers: [AuthGuardGuard]
})
export class AppRoutingModule { }
