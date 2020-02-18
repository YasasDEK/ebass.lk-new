import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UpdateworkerComponent } from '../updateworker/updateworker.component';
import * as firebase from 'firebase/app';

export interface Workers {
  image: String;
}

@Component({
  selector: 'app-workerimage',
  templateUrl: './workerimage.component.html',
  styleUrls: ['./workerimage.component.scss']
})
export class WorkerimageComponent implements OnInit {
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
  constructor(public _Activatedroute: ActivatedRoute,
              public ebass: AngularFirestore,
              public authService: AuthService,
              public router: Router,
              private afst: AngularFireStorage
    ) {
    this.value = this._Activatedroute.snapshot.paramMap.get('uid');
    console.log('value : ' + this.value);
          this.ebass.doc<Workers>('workers/' + this.value).valueChanges().subscribe(
        );
      }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.datas = data;
    })
  } 

  onSubmit(){
    this.download = this.afst.ref('/workerimage/' + this.randomId).getDownloadURL().subscribe(a => {
      this.download = a;
      // this.form.value.image = this.download;
      console.log('download url', this.form.value.image);
      this.update(this.download);
    });
    }

  randomId;
  upload(event) {
    this.randomId = Math.random().toString(36).substring(2);
    this.afst.upload('/workerimage/' + this.randomId, event.target.files[0]);
    console.log('image:', this.form.value.image, '  ', this.image);
  }

  update(value) {
    console.log("updates");
    this.ebass.doc('workers/' + this.value).update({'image': value });
    alert('Updated..');

    // this.ebass.doc('workers' + spa1.email).update(spa1).then(res=>{
    //console.log(spa1.telephone);
    //console.log(spa1.email);
    // alert("Updated..");
    //this.router.navigateByUrl('/spa-view');
    // });
  }
  getData() {
    this.data = this.ebass.collection('workers', ref => ref.where('uid', '==', this.value)).valueChanges();
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


