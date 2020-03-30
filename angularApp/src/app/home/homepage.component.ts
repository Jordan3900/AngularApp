import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
    <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a Business app made for training.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-danger btn-lg" role="button" [routerLink]="['/user/login']">Login now</a>
</div>
  `
})

export class HomePageComponent {
 
}
