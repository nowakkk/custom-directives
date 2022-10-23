import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="main-div">
    <label id="credit-card-label">
      <p id="credit-card-title">Credit Card Number</p>
      <input 
        id="credit-card-input"
        name="credit-card"
        type="text"
        placeholder="Enter your 16 digits card number"
        appCreditCard>
    </label>

    <label 
      appTooltip="3 digits, back of your card"
      #myTooltip="appTooltip">

      Enter your security code 

      <span
      (mouseover)="myTooltip.show()"
      (mouseout)="myTooltip.hide()">
        (?)
      </span>

      <input type="text">
    </label>
  </div>

  <div id="myfor-div">
    aaa
  </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'custom-directive';
}
