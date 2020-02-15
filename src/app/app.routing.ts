import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthGuard } from './options/guard/auth.guard';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './options/profile/profile.component';
import { SignUpComponent } from './options/sign-up/sign-up.component';
import { SignInComponent } from './options/sign-in/sign-in.component';
import { SignUpUserComponent } from './options/sign-up-user/sign-up-user.component';

import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminSignUpComponent } from './admin/admin-sign-up/admin-sign-up.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';
import { AllworkersComponent } from './admin/allworkers/allworkers.component';
import { AllusersComponent } from './admin/allusers/allusers.component';
import { LandingComponent } from './options/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ForgotPasswordComponent } from './options/forgot-password/forgot-password.component';
import { SearchComponent } from './search/search.component';
import { RatingComponent } from './components/rating/rating.component';
import { AboutComponent } from './components/about/about.component';
import { BookingComponent } from './components/booking/booking.component';
import { ScheduleComponent } from './schedule/schedule/schedule.component';

import { VerifyEmailComponent } from './options/verify-email/verify-email.component';
import { AdminVerifyEmailComponent } from './admin/admin-verify-email/admin-verify-email.component';

import { ReglogComponent } from './options/reglog/reglog.component';

import { ShopsComponent } from './components/shops/shops.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { UpdateworkerComponent } from './options/updateworker/updateworker.component';
import { UpdateAdminComponent } from './admin/updateadmin/updateadmin.component';
import { AddshopsComponent } from './admin/addshops/addshops.component';
import { AddcompaniesComponent } from './admin/addcompanies/addcompanies.component';

import { ViewProfileComponent } from './view-profile/view-profile.component';

import { VerifyWorkersComponent } from './admin/verify-workers/verify-workers.component';
import { EditAdminProfileComponent } from './admin/edit-admin-profile/edit-admin-profile.component';
import { ViewMessagesComponent } from './admin/view-messages/view-messages.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { BasicelementsComponent } from './components/basicelements/basicelements.component';
import { FormvalidComponent } from './temp/formvalid/formvalid.component';
import { CollapseComponent } from './temp/collapse/collapse.component';
import { ImageComponent } from './temp/image/image.component';
import { ViewforWorkerComponent } from './bookingDetails/viewfor-worker/viewfor-worker.component';
import { OngoingComponent } from './bookingDetails/viewfor-worker/ongoing/ongoing.component';
import { WorkerViewMapComponent } from './googlemap/worker-view-map/worker-view-map.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { EdituserprofileComponent } from './user/edituserprofile/edituserprofile.component';
import { UserongoingComponent } from './bookingDetails/viewfor-user/userongoing/userongoing.component';
import { UserpendingComponent } from './bookingDetails/viewfor-user/userpending/userpending.component';
import { UsercompletedComponent } from './bookingDetails/viewfor-user/usercompleted/usercompleted.component';
import { CompletedComponent } from './bookingDetails/viewfor-worker/completed/completed.component';
import { UserratedComponent } from './bookingDetails/viewfor-user/userrated/userrated.component';
import { UserimageComponent } from './user/userimage/userimage.component';
import { WorkerimageComponent } from './options/workerimage/workerimage.component';
import { AdminimageComponent } from './admin/adminimage/adminimage.component';
import { AllcompaniesComponent } from './admin/allcompanies/allcompanies.component';
import { AllshopsComponent } from './admin/allshops/allshops.component';
import { CompanyimageComponent } from './admin/companyimage/companyimage.component';
import { ShopimageComponent } from './admin/shopimage/shopimage.component';
// import { UpdateuserComponent } from './options/updateuser/updateuser.component';
// import { UserprofileComponent } from './options/userprofile/userprofile.component';

const routes: Routes = [


  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'companyimage/:uid', component: CompanyimageComponent },
  { path: 'shopimage/:uid', component: ShopimageComponent },
  { path: 'signupuser', component: SignUpUserComponent },
  { path: 'profile/:email', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'update/:email', component: UpdateworkerComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'rating', component: RatingComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'booking/:uid', component: BookingComponent, canActivate: [AuthGuard] },
  { path: 'component', component: ComponentsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'verify', component: VerifyEmailComponent },
  { path: 'adminverify', component: AdminVerifyEmailComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'categories/:job', component: CategoriesComponent },
  { path: 'reglog', component: ReglogComponent },
  { path: 'viewprofile/:uid', component: ViewProfileComponent },
  { path: 'bookingworkernew/:uid', component: ViewforWorkerComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SignInComponent },

  { path: 'adminsignin', component: AdminSignInComponent },   //admin
  { path: 'adminsignup', component: AdminSignUpComponent },   //admin
  { path: 'adminprofile/:email', component: AdminProfileComponent},    //admin
  { path: 'adminupdate/:email', component: UpdateAdminComponent, canActivate: [AuthGuard] },      //admin
  { path: 'allworkers', component: AllworkersComponent, canActivate: [AuthGuard] },   //admin
  { path: 'allusers', component: AllusersComponent, canActivate: [AuthGuard] },   //admin
  { path: 'addshops', component: AddshopsComponent, canActivate: [AuthGuard] },   //admin
  { path: 'addcompanies', component: AddcompaniesComponent, canActivate: [AuthGuard] },   //admin
  { path: 'verifyworker', component: VerifyWorkersComponent, canActivate: [AuthGuard] },    //admin
  { path: 'editadminprofile/:email', component: EditAdminProfileComponent, canActivate: [AuthGuard] },    //admin
  { path: 'viewmessages', component: ViewMessagesComponent, canActivate: [AuthGuard] },       //admin   
  //{ path: 'gmap', component: GooglemapComponent, canActivate: [AuthGuard] },
  // { path: 'userprofile/:email', component: UserprofileComponent, canActivate: [AuthGuard] },

  { path: 'bootstraps', component: BasicelementsComponent },
  { path: 'formvalid', component: FormvalidComponent },
  { path: 'collapse', component: CollapseComponent },
  { path: 'image', component: ImageComponent },
  { path: 'ongoingworker/:uid', component: OngoingComponent, canActivate: [AuthGuard] },
  { path: 'gmapworker', component: WorkerViewMapComponent},
  { path: 'userprofile/:email', component: UserprofileComponent },
  { path: 'edituserprofile/:email', component: EdituserprofileComponent, canActivate: [AuthGuard]},
  { path: 'userongoing/:uid', component: UserongoingComponent },
  { path: 'userpending/:uid', component: UserpendingComponent },
  { path: 'usercompleted/:uid', component: UsercompletedComponent },
  { path: 'completed/:uid', component: CompletedComponent },
  { path: 'rated/:uid', component: UserratedComponent },
  { path: 'userimage/:uid', component: UserimageComponent },
  { path: 'workerimage/:uid', component: WorkerimageComponent },
  { path: 'adminimage/:uid', component: AdminimageComponent },
  { path: 'allcompanies', component: AllcompaniesComponent },
  { path: 'allshops', component: AllshopsComponent},
  // { path: 'userprofile/:email', component: UserprofileComponent}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
