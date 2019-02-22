import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Input() title = "";
  @Input() buttonTitle = "";
  @Output() addUserEvent = new EventEmitter();
  form: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  patchFormValue(user){
    if(user)
    this.form.patchValue(user);
  }

  createForm(){
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  addUser(){
      this.addUserEvent.emit(this.form.getRawValue());
  }

}
