import { Injectable } from '@angular/core';
import { Educational } from '../Educational.modal';
@Injectable({
  providedIn: 'root'
})
export class EducationalService {
  list:Educational[]=[];

  constructor() { }
  getEducation(){
    return this.list;
  }
}
