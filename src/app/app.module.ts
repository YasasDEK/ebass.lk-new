import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './examples/services/auth.service';
import { NgModule, RootRenderer } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ItemService } from './services/item.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SignUpComponent } from './examples/sign-up/sign-up.component';
import { SignInComponent } from './examples/sign-in/sign-in.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ForgotPasswordComponent } from './examples/forgot-password/forgot-password.component';
import { SearchComponent } from './search/search.component';
import { ScheduleComponent } from './schedule/schedule/schedule.component';

import { SignUpuComponent } from './examplesu/sign-upu/sign-upu.component';
import { SignInuComponent } from './examplesu/sign-inu/sign-inu.component';
import { ForgotPassworduComponent } from './examplesu/forgot-passwordu/forgot-passwordu.component';
import { ExamplesuModule } from './examplesu/examplesu.module';
import { AuthuService } from './examplesu/servicesu/authu.service';

import { VerifyEmailComponent } from './examples/verify-email/verify-email.component';

var firebaseConfig = {
  apiKey: "AIzaSyBjFU2WTS5w4p_SbIpMO3h9uEQ0TmliCn8",
  authDomain: "ebass-892f9.firebaseapp.com",
  databaseURL: "https://ebass-892f9.firebaseio.com",
  projectId: "ebass-892f9",
  storageBucket: "ebass-892f9.appspot.com",
  messagingSenderId: "535789843723",
  appId: "1:535789843723:web:e85f29e256f6578e"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    SearchComponent,
    ScheduleComponent,
    SignUpuComponent,
    SignInuComponent,
    ForgotPassworduComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'ebass'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ExamplesuModule,
    AngularFireAuthModule
  ],
  providers: [ItemService, AuthService, AuthuService],
  bootstrap: [AppComponent],
})
export class AppModule { }
