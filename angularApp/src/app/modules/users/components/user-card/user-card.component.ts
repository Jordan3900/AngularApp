import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../models/user.model';


@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser
  showText: boolean = false
  text: string = 'Show more'
  constructor() { }

  ngOnInit() {

  }

  toggle() {
    this.text = this.showText? 'Show more' : 'Hide';
    this.showText = !this.showText;
    return this.showText;
  }

}
