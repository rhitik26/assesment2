import { Injectable } from '@angular/core';
import { Personal } from '../Personal.modal';
@Injectable({
  providedIn: 'root'
})
export class PersonalService {
 list1:Personal[]=[];
  constructor() { }
  getPersonal(){
    return this.list1;
  }
}
