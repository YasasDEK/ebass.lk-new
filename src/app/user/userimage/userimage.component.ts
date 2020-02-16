
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { EdituserprofileComponent } from '../edituserprofile/edituserprofile.component';
import * as firebase from 'firebase/app';

export interface Users {
  image: String;
}

@Component({
  selector: 'app-userimage',
  templateUrl: './userimage.component.html',
  styleUrls: ['./userimage.component.scss']
})
export class UserimageComponent implements OnInit {
  value: string;
  image: String;
  download;
  data: Observable<Item[]>;
  datas: Item[];
  updatesuccess: boolean;
  form = new FormGroup({
    image: new FormControl(),
  });
  formControls = this.form.controls;
  results: any;
  constructor(public _Activatedroute: ActivatedRoute,
    public ebass: AngularFirestore,
    public authService: AuthService,
    public router: Router,
    private afst: AngularFireStorage,
  ) {
    this.value = this._Activatedroute.snapshot.paramMap.get('uid');
    console.log('value : ' + this.value);
    this.ebass.doc<Users>('users/' + this.value).valueChanges().subscribe(
    );
  }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.datas = data;
    })

  }

  onSubmit() {
    this.download = this.afst.ref('/userimage/' + this.randomId).getDownloadURL().subscribe(a => {
      this.download = a;
      // this.form.value.image = this.download;
      console.log('download url', this.form.value.image);
      this.update(this.download);
    });
  }

  randomId;
  upload(event) {
    this.randomId = Math.random().toString(36).substring(2);
    this.afst.upload('/userimage/' + this.randomId, event.target.files[0]);
    console.log('image:', this.form.value.image, '  ', this.image);
  }

  update(value) {
    console.log("updates");
    this.ebass.doc('users/' + this.value).update({ 'image': value });
    alert('Updated..');

    // this.ebass.doc('users' + spa1.email).update(spa1).then(res=>{
    //console.log(spa1.telephone);
    //console.log(spa1.email);
    // alert("Updated..");
    //this.router.navigateByUrl('/spa-view');
    // });
  }



  getData() {
    this.data = this.ebass.collection('users', ref => ref.where('uid', '==', this.value)).valueChanges();
    console.log("data" + this.data);
    return this.data;

  }

  back(val) {
    this.router.navigate(['/userhome/']);
  }


  // this.afs.doc('bookings/' + id).update({'status': 'canceled'});
  // alert('Booking canceled');
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
