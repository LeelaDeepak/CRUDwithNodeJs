import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatToolbarModule,MatFormFieldModule,MatInputModule,MatInputModule,MatButtonModule,MatIconModule,RouterLink,ReactiveFormsModule,MatSelectModule,MatCheckboxModule,NgStyle],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder,private loginServ:LoginService) { }

  ngOnInit(){
    this.registerForm = this.fb.group({
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Registration successful:', this.registerForm.value);
    }
  }

  

  

  
  



  

  

  

}
