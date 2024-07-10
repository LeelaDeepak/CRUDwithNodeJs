import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatToolbarModule,MatFormFieldModule,MatInputModule,MatInputModule,MatButtonModule,MatIconModule,RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;
  selectedGender: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.registerForm = this.fb.group({
      email: ['', [ Validators.email]],
      password: ['', [Validators.minLength(6)]],
      gender: [''] 
    });
  }

  onSubmit(){
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      if(this.registerForm.value['email']!="" && this.registerForm.value["password"]!="" && this.registerForm.value['gender']!=""){
        alert("Register Successful");
      }
    } else {
      alert("Invalid Data");
    }
    this.registerForm.reset();
    
  }

  

  

}
