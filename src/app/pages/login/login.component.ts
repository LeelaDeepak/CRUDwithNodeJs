import { Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatInputModule,MatFormFieldModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  
  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      if(this.loginForm.value['email']!="" && this.loginForm.value["password"]!=""){
        alert("Login Successful");
      }
    }else{
      alert("Invalid Login");
    }
    this.loginForm.reset();
  }

 
    
}

  


