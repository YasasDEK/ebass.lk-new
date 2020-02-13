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

import { VerifyEmailComponent } from './options/verify-email/verify-email.component';
import { AdminVerifyEmailComponent } from './admin/admin-verify-email/admin-verify-email.component';


import { ShopsComponent } from './components/shops/shops.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UpdateworkerComponent} from './options/updateworker/updateworker.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { GmapComponent } from './gmap/gmap.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { UserprofileComponent } from './users/userprofile/userprofile.component';
import { FormvalidComponent } from './temp/formvalid/formvalid.component';
import { CollapseComponent } from './temp/collapse/collapse.component';
import { ImageComponent } from './temp/image/image.component';
import { ViewforWorkerComponent } from './bookingDetails/viewfor-worker/viewfor-worker.component';
import { ViewforUserComponent } from './bookingDetails/viewfor-user/viewfor-user.component';
import { OngoingComponent } from './bookingDetails/viewfor-worker/ongoing/ongoing.component';
import {MatButtonModule} from '@angular/material/button';


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
    AdminVerifyEmailComponent,
    AdminSignUpComponent,
    AdminSignInComponent,
    UpdateAdminComponent,
    // CategoriesComponent,
    UpdateworkerComponent,
    ViewProfileComponent,
    // GmapComponent,
    GooglemapComponent,
    UserprofileComponent,
    FormvalidComponent,
    CollapseComponent,
    ImageComponent,
    ViewforWorkerComponent,
    ViewforUserComponent,
    OngoingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
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
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCX6twQwi3PezVEReDhC5IMLyiaqC8f_rA',
      libraries: ['places']
    })
    // UserModule,
  ],
  providers: [/*ItemService,*/ AuthService,  /*, AuthuService*/],
  bootstrap: [AppComponent],
//   providers: [ItemService, AuthService, AuthuService],
//   bootstrap: [AppCompone1nt]
// >>>>>>> origin/newtest
})
export class AppModule { }
