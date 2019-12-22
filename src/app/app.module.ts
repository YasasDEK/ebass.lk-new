import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './options/services/auth.service';
import { NgModule, RootRenderer } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { ItemService } from './services/item.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { WorkerModule } from './options/worker.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SignUpComponent } from './options/sign-up/sign-up.component';
import { SignInComponent } from './options/sign-in/sign-in.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ForgotPasswordComponent } from './options/forgot-password/forgot-password.component';
import { SearchComponent } from './search/search.component';
import { ScheduleComponent } from './schedule/schedule/schedule.component';
import { BookingComponent } from './components/booking/booking.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminSignUpComponent } from './admin/admin-sign-up/admin-sign-up.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';
import { UpdateAdminComponent } from './admin/updateadmin/updateadmin.component';


// import { SignUpuComponent } from './user/sign-upu/sign-upu.component';
// import { SignInuComponent } from './user/sign-inu/sign-inu.component';
// import { ForgotPassworduComponent } from './user/forgot-passwordu/forgot-passwordu.component';
// import { UserModule } from './user/user.module';
// import { AuthuService } from './user/servicesu/authu.service';
// import { VerifyEmailuComponent } from './user/verify-emailu/verify-emailu.component';

import { VerifyEmailComponent } from './options/verify-email/verify-email.component';

import { ShopsComponent } from './components/shops/shops.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CategoriesComponent } from './components/categories/categories.component';
// import { SignUpuComponent } from './examplesu/sign-upu/sign-upu.component';
// import { SignInuComponent } from './examplesu/sign-inu/sign-inu.component';
// import { ForgotPassworduComponent } from './examplesu/forgot-passwordu/forgot-passwordu.component';
// import { ExamplesuModule } from './examplesu/examplesu.module';
// import { AuthuService } from './examplesu/servicesu/authu.service';
import { UpdateworkerComponent} from './options/updateworker/updateworker.component';

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
    ViewProfileComponent,
    ShopsComponent,
    BookingComponent,
    CompaniesComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    SearchComponent,
    ScheduleComponent,
    VerifyEmailComponent,
    // AdminProfileComponent,
    AdminSignUpComponent,
    AdminSignInComponent,
    UpdateAdminComponent,
    // CategoriesComponent
    // SignUpuComponent,
    // SignInuComponent,
    // ForgotPassworduComponent,
    //VerifyEmailuComponent
    // SignUpuComponent,
    // SignInuComponent,
    // ForgotPassworduComponent,
    UpdateworkerComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    WorkerModule,
    AdminModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'ebass'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
    // UserModule,
  ],
  providers: [/*ItemService,*/ AuthService  /*, AuthuService*/],
  bootstrap: [AppComponent],
//   providers: [ItemService, AuthService, AuthuService],
//   bootstrap: [AppComponent]
// >>>>>>> origin/newtest
})
export class AppModule { }
