import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-admin-profile',
  templateUrl: './edit-admin-profile.component.html',
  styleUrls: ['./edit-admin-profile.component.scss']
})
export class EditAdminProfileComponent implements OnInit {

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
    this.data = this.ebass.collection('admins', ref => ref.where('email', '==', this.value)).valueChanges();
    return this.data;
  }
  onUpdate(exampleForm: NgForm) {
    console.log(exampleForm.value.fullname);
    this.ebass.doc('admins/' + exampleForm.value.uid).update(exampleForm.value);
    this.router.navigateByUrl('/adminprofile/' + exampleForm.value.email);
  }
  delete(id) {
    this.ebass.doc('admins/' + id).update({ 'status': 'deleted' });
    alert('Deleted');
    this.router.navigateByUrl('/home');
  }

}

interface Item {
  uid?: string;
  adminname?: string;
  idNumber?: string;
  email?: string;
  emailVerified?: boolean;
  jobType?: string;
  mobile?: string;
}
