import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  hide = true;
  userForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });
  errorMessage: any ;
  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.userForm.value,this.userForm.invalid);
    
    if(!this.userForm.value.password){
      this.errorMessage = 'Password is required.'
      return
    }
    
    else {
      let data = {
        password: this.userForm.value.password
      }
      this.http.post('http://localhost:8000/password', data).subscribe((res: any) => {
        if (res.result.statusCode === 200) {
          this.router.navigate(['/home'])
          return
        }
      },(err:any)=>{
        if(err.status == 404) {
          this.userForm.controls['password'].setErrors({ invalid: true });
          this.errorMessage = 'Password is invalid.'
          return
        }
      })
    }
  }

}
