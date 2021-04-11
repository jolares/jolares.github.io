import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-remixer',
  template: `
    <div *ngFor="let quoteRemix of quoteRemixes" class="quote-container">
      <div *ngFor="let quote of quoteRemix" class="quote-card">
        <p>{{ quote.description }}</p>
        <p class="author">-- {{ quote.author }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./quote-remixer.component.scss']
})
export class QuoteRemixerComponent implements OnInit {

  quoteRemixes = [
    [
      {
        description: 'All men are created equal.',
        author: 'Thomas Jefferson'
      },
      {
        description: 'We are all made of stardust.',
        author: 'Carl Sagan'
      }
    ],
    [
      {
        description: 'Everything should be made as simple as possible, but no simpler.',
        author: 'Albert Einstein'
      }
    ],
    [
      {
        description: 'Logic will get you from A to B. Imagination will take you everywhere.',
        author: 'Albert Einstein'
      }
    ],
    [
      {
        description: 'If you can\'t explain it simply, you don\'t understand it well enough.',
        author: 'Albert Einstein'
      }
    ],
    [
      {
        description: 'Coincidence is God\'s way of remaining anonymous.',
        author: 'Albert Einstein'
      }
    ],
    [
      {
        description: 'No problem can be solved from the same level of consciousness that created it.',
        author: 'Albert Einstein'
      }
    ],
    [
      {
        description: 'If something\'s important enough, you do it. Even if - the probable outcome is failure.',
        author: 'Elon Musk'
      }
    ],
    [
      {
        description: 'At some point, everything\'s gonna go south on you and you\'re going to say, this is it. This is how I end. Now you can either accept that, or you can get to work.',
        author: 'Mark Watney (The Martian, Film)'
      }
    ],
    [
      {
        description: 'I don\'t want to be a product of my environment. I want my environment to be a product of me.',
        author: 'Frank Costello (The Departed, Film)'
      }
    ],
    [
      {
        description: 'The drive to close the gap between near-perfect and perfect is the difference between great and unstoppable.',
        author: 'Tim S. Grover, Relentless: From Good to Great to Unstoppable'
      },
      {
        description: 'The difference between the 75 and the 90 is smaller than the one between the 91 and the 100.',
        author: 'Jo\'s memory'
      }
    ]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
