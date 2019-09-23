import { BrowserModule } from '@angular/platform-browser';
import { SignupService } from './signup.service';
import { NgModule, RootRenderer } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ItemService } from './services/item.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';


var firebaseConfig = {
  apiKey: "AIzaSyBjFU2WTS5w4p_SbIpMO3h9uEQ0TmliCn8",
  authDomain: "ebass-892f9.firebaseapp.com",
  databaseURL: "https://ebass-892f9.firebaseio.com",
  projectId: "ebass-892f9",
  storageBucket: "ebass-892f9.appspot.com",
  messagingSenderId: "535789843723",
  appId: "1:535789843723:web:e85f29e256f6578e"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'ebass'),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [SignupService , ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
