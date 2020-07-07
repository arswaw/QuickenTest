import { Component, OnInit } from '@angular/core';
import { APIService, IMockContact } from './api.service';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private api : APIService) {}

  title = 'QLTest';
  columns : string[];
  rows: IMockContact[];

  async ngOnInit() {
    // Rows is the full JSON object.
    this.rows = await this.grabMockData()

    // Columns are just the keys for the first object.
    // This of course relies on the schema being consistent.
    this.columns = createColumns(this.rows[0])
  }

  async grabMockData() {
    return await this.api.getContacts().toPromise()
  }

  

  // On Form Submit, add to table.
  addNewContact(form : Contact) {
    this.rows.push({
      _id: generateMongoObjectId(),
      index: this.rows.length + 1,
      ...form
    })
  }
}

// Thanks to Solenoid for the Mongo Generator
// This is allowed right?
// https://gist.github.com/solenoid/1372386
function generateMongoObjectId() {
  var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
      return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
};

function createColumns(obj : IMockContact) {
  return Object.keys(obj)
}