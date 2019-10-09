import { Component, OnInit } from '@angular/core';
import { Personal } from 'src/Personal.modal';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {
 p=new Personal();
  constructor(private p1:PersonalService) { }

  ngOnInit() {
  }
  add(){
    this.p1.list1.push(this.p);
  }

}
