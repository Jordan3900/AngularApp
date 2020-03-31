import { Component, OnInit, Input } from '@angular/core';
import { IPeople } from '../../models/people.model';


@Component({
  selector: 'people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent implements OnInit {
  @Input() people: IPeople
  
  constructor() { }

  ngOnInit() {

  }

}
