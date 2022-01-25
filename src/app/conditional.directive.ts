import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appConditionalDirective]'
})
export class ConditionalDirective {
  constructor(public templateRef: TemplateRef<unknown>) { }
}
