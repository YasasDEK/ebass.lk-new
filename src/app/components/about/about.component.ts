import { About } from './about.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { NgForm } from '@angular/forms';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private service: AboutService, private firestore: AngularFirestore) {
    fromData: About;
  }

  ngOnInit() {
    // this.resetForm();
  }
  // resetForm(messageform?: NgForm){
  //   if(messageform != null)    
  //   messageform.resetForm();
  //   this.service.fromData = {
  //       username: null,
  //       usermail: null,
  //       usermobile: null,
  //       usermessage: null
  //       }
  //     }

  onSubmit(messageform: NgForm) {
    let data = messageform.value;
    console.log("data", data);
    this.firestore.collection('message').add(data);
    // this.resetForm(signupform);
  }

}
