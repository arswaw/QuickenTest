import { Component, OnInit, Output } from '@angular/core';
import { Contact } from '../contact';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  @Output() sendForm: EventEmitter<Contact> = new EventEmitter();

  model = new Contact('', '', '', '','', '')

  submitted = false

  // Emit to parent, and then clear form.
  // Also, display to console.
  onSubmit() { 
    alert("Form submitted successfully!")
    this.submitted = true

    const serialize = JSON.stringify(this.model)
    
    // Logging output to console
    console.info("Completed form", serialize)
    
    // Emitting to parent, have to create new object because
    // form model will reset after this method executes.
    this.sendForm.emit(JSON.parse(serialize))

    this.submitted = false
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
