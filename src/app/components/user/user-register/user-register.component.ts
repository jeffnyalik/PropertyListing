import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../../../Helper/confirmed.validator';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({})
  user: any = {}
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      'userName': ['', [Validators.required, Validators.minLength(6)]],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'confirmPassword': ['', [Validators.required]],
      'mobile': ['', [Validators.required]],
    }, {
      validator: ConfirmedValidator('password', 'confirmPassword')
    })
  }
  

  get f(){
    return this.form.controls
  }

  onSubmit(){
    if(this.form.valid){
      this.user = Object.assign(this.user, this.form.value);
      localStorage.setItem('Users', JSON.stringify(this.user))
    }
  }

}
