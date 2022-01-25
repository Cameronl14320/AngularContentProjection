import { Component, ContentChild, OnInit } from '@angular/core';
import { ConditionalDirective } from "../conditional.directive";

@Component({
  selector: 'app-conditional-projection',
  templateUrl: './conditional-projection.component.html',
  styleUrls: ['./conditional-projection.component.scss']
})
export class ConditionalProjectionComponent implements OnInit {
  @ContentChild(ConditionalDirective) public childrenContent!: ConditionalDirective;
  public enabled: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleState() {
    this.enabled = !this.enabled;
  }

}
