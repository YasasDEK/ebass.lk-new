import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignUpComponent } from './examples/sign-up/sign-up.component';
import { SignInComponent } from './examples/sign-in/sign-in.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { MasonsComponent } from './components/masons/masons.component';
import { PaintersComponent } from './components/painters/painters.component';
import { CarpentersComponent } from './components/carpenters/carpenters.component';
import { ElectriciansComponent } from './components/electricians/electricians.component';
import { PlumbersComponent} from './components/plumbers/plumbers.component';
import { RepairsComponent } from './components/repairs/repairs.component';
import { ForgotPasswordComponent } from './examples/forgot-password/forgot-password.component';
import { SearchComponent } from './search/search.component';
import { RatingComponent } from './components/rating/rating.component';
import { AboutComponent } from './components/about/about.component';
import { ReglogComponent } from './examples/reglog/reglog.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'signup',           component: SignUpComponent },
    { path: 'signin',            component: SignInComponent },
    { path: 'profile/:id',      component: ProfileComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'masons',           component: MasonsComponent},
    { path: 'painters',         component: PaintersComponent},
    { path: 'carpenters',       component: CarpentersComponent},
    { path: 'electricians',     component: ElectriciansComponent},
    { path: 'plumbers',         component: PlumbersComponent},
    { path: 'repairs',          component: RepairsComponent},
    { path: 'forgot-password',  component: ForgotPasswordComponent},
    { path: 'plumbers/:id',     component: PlumbersComponent},
    { path: 'rating',           component: RatingComponent},
    { path: 'about',            component: AboutComponent},
    { path: 'component',        component: ComponentsComponent},
    { path: 'search',           component: SearchComponent},
    { path: 'reglog',           component: ReglogComponent}
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
