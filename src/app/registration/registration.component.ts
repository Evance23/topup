import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: any ={
    username : 'null',
    email : 'null',
    password : 'null'
  }; 
  isSuccessful = false;
  isSignedUpFailed = false;
  errorMessage = ''

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const { username, email, password } = this.form;
    this.authService.register(username, email). subscribe(
      // check out the addition of the password argument here
      data=>{
        console.log(data);
        this.isSuccessful = true;
        this.isSignedUpFailed = false;
      },
      err =>{
        this.errorMessage = err.error.message;
        this.isSignedUpFailed = true;
      }
    );
  }

}
