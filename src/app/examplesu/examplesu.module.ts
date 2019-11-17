import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileuComponent } from './profileu/profileu.component';
import { ReglogComponent } from './reglog/reglog.component';
// import { SignUpComponent } from './sign-up/sign-up.component';
// import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        // SignUpComponent,
        ProfileuComponent,
        ReglogComponent,
        // SignInComponent
    ]
})
export class ExamplesuModule { }