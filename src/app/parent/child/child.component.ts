import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'] // Corrected property name to styleUrls
})
export class ChildComponent {
  @Input() parentData: any;

  ngOnInit(): any {
    console.log(this.parentData);
  }

}
