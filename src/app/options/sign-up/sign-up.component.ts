import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder , FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [`
    .check {
      color: white ;
    }
  `]
})
export class SignUpComponent implements OnInit {
  jobType: Array<string> = ['mason' , 'electrician' , 'plumber' , 'painter' , 'repair' , 'carpenter'];
  selectedJobArray: Array<string>;
  jobError: Boolean = true;

  nestedForm: FormGroup;
  constructor(
      public authService: AuthService ,
      private _fb: FormBuilder

  ) { }

  ngOnInit() {
    this.nestedForm = this._fb.group({
        selectedJobType: this.jobTypeControl()
    });
  }

  jobTypeControl(){
    const arr = this.jobType.map(element => {
      return this._fb.control(false);
    });
    return this._fb.array(arr);
  }

  get jobArray(){
    return  this.nestedForm.get('selectedJobType') as FormArray ;
  }

  determineErrorDisplay(){
    let flag = false;
    this.jobArray.controls.forEach(control => {
      if (control.touched) {
          flag = true;
      }
    });
    return flag;
  }

  getSelectedJobType() {
      this.selectedJobArray = [];
      this.jobArray.controls.forEach((control , i) => {
        if (control.value) {
            this.selectedJobArray.push(this.jobType[i]);
        }
      });
      this.jobError = this.selectedJobArray.length > 0 ? false : true;
  }
}
