import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { CarpentersComponent } from './carpenters/carpenters.component';
import { MasonsComponent } from './masons/masons.component';
import { PaintersComponent } from './painters/painters.component';
import { RepairsComponent } from './repairs/repairs.component';
import { ElectriciansComponent } from './electricians/electricians.component';
import { PlumbersComponent } from './plumbers/plumbers.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        CarpentersComponent,
        MasonsComponent,
        PaintersComponent,
        RepairsComponent,
        ComponentsComponent,
        ElectriciansComponent,
        PlumbersComponent,
        RatingComponent
    ],
    entryComponents: [NgbdModalContent],
    exports: [ ComponentsComponent ]
})
export class ComponentsModule { }
