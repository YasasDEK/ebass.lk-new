import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LoginComponent } from './examples/login/login.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { MasonsComponent } from './components/masons/masons.component';
import { PaintersComponent } from './components/painters/painters.component';
import { CarpentersComponent } from './components/carpenters/carpenters.component';
import { ElectriciansComponent } from './components/electricians/electricians.component';
import { PlumbersComponent} from './components/plumbers/plumbers.component';
import { RepairsComponent } from './components/repairs/repairs.component';
import { RatingComponent } from './components/rating/rating.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'profile/:id',          component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'login',            component: LoginComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'masons',           component: MasonsComponent},
    { path: 'painters',         component: PaintersComponent},
    { path: 'carpenters',       component: CarpentersComponent},
    { path: 'electricians',     component: ElectriciansComponent},
    { path: 'plumbers',         component: PlumbersComponent},
    { path: 'plumbers/:id',     component: PlumbersComponent},
    { path: 'repairs',          component: RepairsComponent},
    { path: 'rating',           component: RatingComponent},

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
