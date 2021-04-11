import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFeatureFlag]'
})
export class FeatureFlagDirective {
  @Input() featureFlag: string | string[] = [];

  constructor(
    private vcr: ViewContainerRef,
    private tpl: TemplateRef<any>,
  ) { }

  ngOnInit() {
  }
}
