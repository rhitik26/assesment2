import { Component, OnInit } from '@angular/core';
import { Educational } from 'src/Educational.modal';
import { EducationalService } from '../educational.service';

@Component({
  selector: 'app-educational-details',
  templateUrl: './educational-details.component.html',
  styleUrls: ['./educational-details.component.css']
})
export class EducationalDetailsComponent implements OnInit {
 e=new Educational();
  constructor(private e1:EducationalService) { }

  ngOnInit() {
  }
  addEd(){
    this.e1.list.push(this.e);
  }

}
