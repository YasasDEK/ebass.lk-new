import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './options/profile/profile.component';
import { SignUpComponent } from './options/sign-up/sign-up.component';
import { SignInComponent } from './options/sign-in/sign-in.component';

import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminSignUpComponent } from './admin/admin-sign-up/admin-sign-up.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';


import { LandingComponent } from './options/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
// import { MasonsComponent } from './components/masons/masons.component';
// import { PaintersComponent } from './components/painters/painters.component';
// import { CarpentersComponent } from './components/carpenters/carpenters.component';
// import { ElectriciansComponent } from './components/electricians/electricians.component';
// import { PlumbersComponent } from './components/plumbers/plumbers.component';
// import { RepairsComponent } from './components/repairs/repairs.component';
import { ForgotPasswordComponent } from './options/forgot-password/forgot-password.component';
import { SearchComponent } from './search/search.component';
import { RatingComponent } from './components/rating/rating.component';
import { AboutComponent } from './components/about/about.component';
import { BookingComponent } from './components/booking/booking.component';
import { ScheduleComponent } from './schedule/schedule/schedule.component';

import { VerifyEmailComponent } from './options/verify-email/verify-email.component';
// import { VerifyEmailuComponent } from './user/verify-emailu/verify-emailu.component';

import { ReglogComponent } from './options/reglog/reglog.component';

// import { ForgotPassworduComponent } from './user/forgot-passwordu/forgot-passwordu.component';
// import { ProfileuComponent } from './user/profileu/profileu.component';
// import { SignUpuComponent } from './user/sign-upu/sign-upu.component';
// import { SignInuComponent } from './user/sign-inu/sign-inu.component';

import { ShopsComponent } from './components/shops/shops.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CategoriesComponent } from './components/categories/categories.component';

// import { ForgotPassworduComponent } from './examplesu/forgot-passwordu/forgot-passwordu.component';
// import { ProfileuComponent } from './examplesu/profileu/profileu.component';
// import { SignUpuComponent } from './examplesu/sign-upu/sign-upu.component';
// import { SignInuComponent } from './examplesu/sign-inu/sign-inu.component';
import {UpdateworkerComponent} from './options/updateworker/updateworker.component';
import {UpdateAdminComponent} from './admin/updateadmin/updateadmin.component';

import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  //     { path: 'profile/:id',      component: ProfileComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'profile/:email', component: ProfileComponent },
  { path: 'update/:email', component: UpdateworkerComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  // { path: 'masons', component: MasonsComponent },
  // { path: 'painters', component: PaintersComponent },
  // { path: 'carpenters', component: CarpentersComponent },
  // { path: 'electricians', component: ElectriciansComponent },
  // { path: 'plumbers', component: PlumbersComponent },
  // { path: 'repairs', component: RepairsComponent },
  // { path: 'plumbers', component: PlumbersComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'component', component: ComponentsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'schedule', component: ScheduleComponent },
  // { path: 'forgot-passwordu', component: ForgotPassworduComponent },
  // { path: 'reglog', component: ReglogComponent },
  // { path: 'signupu', component: SignUpuComponent },
  // { path: 'signinu', component: SignInuComponent },
  // { path: 'profileu/:uid', component: ProfileuComponent },
  { path: 'verify', component: VerifyEmailComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'companies', component: CompaniesComponent },
  // { path: 'verifyu', component: VerifyEmailuComponent }
  { path: 'categories/:job', component: CategoriesComponent },
  // { path: 'forgot-passwordu', component: ForgotPassworduComponent },
  { path: 'reglog', component: ReglogComponent },
  { path: 'viewprofile/:uid', component: ViewProfileComponent },
  // { path: 'signupu', component: SignUpuComponent },
  // { path: 'signinu', component: SignInuComponent },
  // { path: 'profileu/:uid', component: ProfileuComponent },
  { path: 'signin', component: SignInComponent },
  //     { path: 'profile/:id',      component: ProfileComponent },
  { path: 'adminsignin', component: AdminSignInComponent },
  { path: 'adminsignup', component: AdminSignUpComponent },
  { path: 'adminprofile/:email', component: AdminProfileComponent },
  { path: 'adminupdate/:email', component: UpdateAdminComponent },
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
