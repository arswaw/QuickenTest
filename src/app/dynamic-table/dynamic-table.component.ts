import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  @Input() rows : object[]
  @Input() columns : string[]

  constructor() { }

  ngOnInit(): void {
  }

}
