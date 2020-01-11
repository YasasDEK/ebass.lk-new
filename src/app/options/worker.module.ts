import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { ReglogComponent } from './reglog/reglog.component';
import {RouterModule} from '@angular/router';
import { SignUpUserComponent } from './sign-up-user/sign-up-user.component';
// import { SignUpComponent } from './sign-up/sign-up.component';
// import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
    ],
    declarations: [
        LandingComponent,
        // SignUpComponent,
        ProfileComponent,
        ReglogComponent,
        SignUpUserComponent,
        // SignInComponent
    ]
})
export class WorkerModule { }
