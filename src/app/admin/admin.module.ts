import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { RouterModule } from '@angular/router';
import { AllworkersComponent } from './allworkers/allworkers.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AddshopsComponent } from './addshops/addshops.component';
import { AddcompaniesComponent } from './addcompanies/addcompanies.component';
import { VerifyWorkersComponent } from './verify-workers/verify-workers.component';
import { EditAdminProfileComponent } from './edit-admin-profile/edit-admin-profile.component';
import { ViewMessagesComponent } from './view-messages/view-messages.component';

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
        AddshopsComponent,
        AddcompaniesComponent,
        VerifyWorkersComponent,
        EditAdminProfileComponent,
        ViewMessagesComponent,
        // ReglogComponent,
        // SignInComponent
    ]
})
export class AdminModule { }
