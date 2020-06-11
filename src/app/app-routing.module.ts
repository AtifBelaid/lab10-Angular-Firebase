import { HomeComponent } from './home/home.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { DetailsEtudiantComponent } from './details-etudiant/details-etudiant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { TravauxComponent } from './travaux/travaux.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { ProfileComponent } from './profile/profile.component';
import { AddTravauxComponent } from './add-travaux/add-travaux.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

 
const routes: Routes = [
   {path:'', component: HomeComponent},
   {path:'contact', component: ContactComponent},
   {path:'about', component: AboutComponent},
   {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuardGuard]},
   {path:'login', component: LoginComponent}, //declancher la route pour executer le compenent
   {path:'register', component: RegisterComponent},
   {path:'profile', component: ProfileComponent, canActivate: [AuthGuardGuard]},
   {path:'etudiant/add', component: AddEtudiantComponent, canActivate: [AuthGuardGuard]},
   {path:'etudiant/:id', component: DetailsEtudiantComponent, canActivate: [AuthGuardGuard] },
   {path:'etudiant/edit/:id', component: EditEtudiantComponent, canActivate: [AuthGuardGuard] },
   {path:'travaux', component: TravauxComponent, canActivate: [AuthGuardGuard]},
   {path:'discussion', component: DiscussionComponent, canActivate: [AuthGuardGuard]},
   {path:'travaux/add', component: AddTravauxComponent, canActivate: [AuthGuardGuard] },

 ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],  
    providers: [AuthGuardGuard]
})
export class AppRoutingModule { }
