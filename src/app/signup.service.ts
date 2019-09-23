import { Injectable } from '@angular/core';
import { Signup } from './signup.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  fromData: Signup

  constructor() { }
}
