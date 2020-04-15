import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() public user: User;
  public showText = false;
  public text = 'Show more';

  constructor() { }

  public toggle(): boolean {
    this.text = this.showText ? 'Show more' : 'Hide';
    this.showText = !this.showText;
    return this.showText;
  }
}
