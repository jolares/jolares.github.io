import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteRemixerComponent } from './quote-remixer.component';


@NgModule({
  declarations: [
    QuoteRemixerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ QuoteRemixerComponent ]
})
export class QuoteRemixerModule { }
