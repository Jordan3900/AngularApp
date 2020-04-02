import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  showText = false;
  text = 'Show more';

  constructor() { }

  ngOnInit() {

  }

  toggle() {
    this.text = this.showText ? 'Show more' : 'Hide';
    this.showText = !this.showText;
    return this.showText;
  }

}
