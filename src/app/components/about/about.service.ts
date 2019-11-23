import { Injectable } from '@angular/core';
import { About } from './about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  fromData: About

  constructor() { }
}
