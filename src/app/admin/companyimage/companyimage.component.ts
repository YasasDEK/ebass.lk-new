import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';

export interface Company {
  image: String;
}
@Component({
  selector: 'app-companyimage',
  templateUrl: './companyimage.component.html',
  styleUrls: ['./companyimage.component.scss']
})
export class CompanyimageComponent implements OnInit {
  value: string;
  image: String;
  data: any;
  download;
  updatesuccess: boolean;
  form = new FormGroup({
    image: new FormControl(),
  });
  formControls = this.form.controls;
  constructor(public _Activatedroute: ActivatedRoute,
              public ebass: AngularFirestore,
              public authService: AuthService,
              public router: Router,
              private afst: AngularFireStorage
    ) {
    this.value = this._Activatedroute.snapshot.paramMap.get('uid');
    // this.data = this.ebass.collection('admins', ref => ref.where('uid', '==', this.value)).valueChanges();
    // return this.data
    // this.test()
    console.log('value : ' + this.value);
          this.ebass.doc<Company>('companies/' + this.value).valueChanges().subscribe(
        );
      }

  ngOnInit() {

  }

  onSubmit(){
    this.download = this.afst.ref('/compayimage/' + this.randomId).getDownloadURL().subscribe(a => {
      this.download = a;
      // this.form.value.image = this.download;
      console.log('download url', this.form.value.image);
      this.update(this.download);
    });
    }

  randomId;
  upload(event) {
    this.randomId = Math.random().toString(36).substring(2);
    this.afst.upload('/compayimage/' + this.randomId, event.target.files[0]);
    console.log('image:', this.form.value.image, '  ', this.image);
  }

  update(value) {
    console.log("updates");
    this.ebass.doc('companies/' + this.value).update({'image': value });
    alert('Updated..');
    this.router.navigate(['/companies']);
    // this.ebass.doc('admins' + spa1.email).update(spa1).then(res=>{
    //console.log(spa1.telephone);
    //console.log(spa1.email);
    // alert("Updated..");
    //this.router.navigateByUrl('/spa-view');
    // });
  }

  // this.afs.doc('bookings/' + id).update({'status': 'canceled'});
  // alert('Booking canceled');
}
