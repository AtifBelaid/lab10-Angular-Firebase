import { TravauxService } from './services/travaux.service';
import { FormsModule }   from '@angular/forms';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { EtudiantService } from './services/etudiant.service';
import { environment } from './../environments/environment';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';




import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { DetailsEtudiantComponent } from './details-etudiant/details-etudiant.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { TravauxComponent } from './travaux/travaux.component';
import { ProfileComponent } from './profile/profile.component';
import { AddTravauxComponent } from './add-travaux/add-travaux.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    ListEtudiantComponent,
    EditEtudiantComponent,
    DetailsEtudiantComponent,
    AddEtudiantComponent,
    DiscussionComponent,
    TravauxComponent,
    ProfileComponent,
    AddTravauxComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    SafeUrlPipe,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [AuthService, EtudiantService, TravauxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
