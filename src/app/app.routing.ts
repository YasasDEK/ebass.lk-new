import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signupuser', component: SignUpUserComponent },
  { path: 'profile/:email', component: ProfileComponent },
  { path: 'update/:email', component: UpdateworkerComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'booking/:uid', component: BookingComponent },
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
  { path: 'signin', component: SignInComponent },
  { path: 'adminsignin', component: AdminSignInComponent },
  { path: 'adminsignup', component: AdminSignUpComponent },
  { path: 'adminprofile/:email', component: AdminProfileComponent },
  { path: 'adminupdate/:email', component: UpdateAdminComponent },
  { path: 'allworkers', component: AllworkersComponent },
  { path: 'allusers', component: AllusersComponent },
  { path: 'addshops', component: AddshopsComponent },
  { path: 'addcompanies', component: AddcompaniesComponent },
  { path: 'verifyworker', component: VerifyWorkersComponent },
  { path: 'editadminprofile/:email', component: EditAdminProfileComponent },
  { path: 'viewmessages', component: ViewMessagesComponent },
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
