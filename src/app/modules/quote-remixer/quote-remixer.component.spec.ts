import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRemixerComponent } from './quote-remixer.component';

describe('QuoteRemixerComponent', () => {
  let component: QuoteRemixerComponent;
  let fixture: ComponentFixture<QuoteRemixerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteRemixerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteRemixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
