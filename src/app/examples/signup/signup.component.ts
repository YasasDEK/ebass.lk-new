import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SignupService } from './../../signup.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    constructor(private service: SignupService,
        private firestore: AngularFirestore) { }

    ngOnInit() {
        this.resetForm();
    }

resetForm(signupform?: NgForm){
    if(signupform != null)    
    signupform.resetForm();
    this.service.fromData = {
        username: null,
        id: '',
        mail: '',
        mobile: '',
        password_one: '',
        password_two: ''
        }
    }

    onSubmit(signupform: NgForm){
        let data = signupform.value;
        console.log("data", data);
        this.firestore.collection('signup').add(data);
        this.resetForm(signupform);
    }
}
