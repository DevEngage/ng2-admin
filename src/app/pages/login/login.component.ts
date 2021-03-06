import {Component, ViewEncapsulation} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl} from '@angular/common';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  directives: [],
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form:ControlGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }
  
  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
}
