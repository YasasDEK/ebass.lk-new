import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import {RouterModule} from '@angular/router';
import { AllworkersComponent } from './allworkers/allworkers.component';
import { AllusersComponent } from './allusers/allusers.component';
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
        // LandingComponent,
        // SignUpComponent,
        AdminProfileComponent,
        AllworkersComponent,
        AllusersComponent,
        // ReglogComponent,
        // SignInComponent
    ]
})
export class AdminModule { }
