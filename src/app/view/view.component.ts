import { Component, OnInit } from '@angular/core';
import { Personal } from 'src/Personal.modal';
import { Educational } from 'src/Educational.modal';
import { PersonalService } from '../personal.service';
import { EducationalService } from '../educational.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 list1:Personal[];
 list2:Educational[];
 p1:Personal;
 e1:Educational;
  constructor(private p:PersonalService,private e:EducationalService) {
    this.list1=this.p.getPersonal();
    this.list2=this.e.getEducation();
   }
   del(i:number){
     this.p.list1.splice(i,1);
   }
   del2(i2:number){
    this.e.list.splice(i2,1);
  }
  pd=false;
  editPersonal(i:number){
    this.pd=true;
    this.p1=this.p.list1[i];
  }
  updatePersonal(){
    this.pd=false;
  }
  ed=false;
  update2(i2:number){
    this.ed=true;
    this.e1=this.e.list[i2];
  }
  updateEducational(){
    this.ed=false;
  }
  myinput;
  u2=false;
  u3(){
    this.u2=true;
  }
  ngOnInit() {
  }

}
