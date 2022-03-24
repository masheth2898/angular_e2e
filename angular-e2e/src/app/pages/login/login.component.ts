import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: any = ''
  constructor(private http: HttpClient,
    private router: Router) { }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false)
  });

  ngOnInit(): void {
  }

  submit() {
    let data = {
      name: this.loginForm.value.username
    }
    if (this.loginForm.invalid) {
      this.errorMessage = 'Username is required.'
      return
    }
    else {
      this.http.post('http://localhost:8000/login', data).subscribe((res: any) => {
        if (res.result.statusCode === 200) {
          this.errorMessage = 'Login success.'
          console.log(data);
          this.router.navigate(['/pass']);
          return
        }
        else if (res.result.statusCode === 404) {
          this.errorMessage = 'User not found.'
        }
      },(err:any)=>{
        if(err.status == 404) {
          this.loginForm.controls['username'].setErrors({ invalid: true });
          this.errorMessage = 'Username is invalid.'
          return
        }
      })
    }
  }

}
