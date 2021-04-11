import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>About Me</h2>

    <p>Hi, I am Jo (Joaquin)! I am an engineer.</p>

    <p>
      I focus on software development and my main interests are Frontend
      Engineering and Artificial Intelligence. I specialize in micro-frontends and machine-learning.
    </p>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
