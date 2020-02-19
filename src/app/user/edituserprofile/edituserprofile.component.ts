import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service' ;
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edituserprofile',
  templateUrl: './edituserprofile.component.html',
  styleUrls: ['./edituserprofile.component.scss']
})
export class EdituserprofileComponent implements OnInit {

  value: string;
  data: Observable<Item[]>;
  datas: Item[];
  exampleForm: any;
  constructor(public _Activatedroute: ActivatedRoute,
    public ebass: AngularFirestore,
    public authService: AuthService,
    private router: Router,
  ) {
    this.value = this._Activatedroute.snapshot.paramMap.get('email');
  }
  ngOnInit() {
    this.getData().subscribe(data => {
      this.datas = data;
    })
  }

  getData() {
    this.data = this.ebass.collection('users', ref => ref.where('email', '==', this.value)).valueChanges();
    return this.data;
  }
  onUpdate(exampleForm: NgForm) {
    console.log(exampleForm.value.fullname);
    if (exampleForm.value.adminname === '') { alert('You can not keep empty lines'); }
    else if (exampleForm.value.idNumber === '') { alert('You can not keep empty lines'); }
    else if (exampleForm.value.mobile === '') { alert('You can not keep empty lines'); }
    else if (exampleForm.value.username === '') { alert('You can not keep empty lines'); }
    else if ((exampleForm.value.idNumber).length < 10 ) { alert('ID number too short'); }
    else if ((exampleForm.value.idNumber).length > 10 ) { alert('ID number too long'); }
    else if ((exampleForm.value.mobile).length < 10 ) { alert('mobile number too short'); }
    else if ((exampleForm.value.mobile).length > 10 ) { alert('mobile number too long'); }
    else { 
    this.ebass.doc('users/' + exampleForm.value.uid).update(exampleForm.value);
    this.router.navigateByUrl('/userprofile/' + exampleForm.value.email);
    }
  }
  delete(id) {
    this.ebass.doc('users/' + id).update({ 'status': 'deleted' });
    alert('Deleted');
    this.router.navigateByUrl('/home');
  }

}

interface Item {
  uid?: string;
  username?: string;
  idNumber?: string;
  email?: string;
  emailVerified?: boolean;
  jobType?: string;
  mobile?: string;
}
