import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-about-now',
  templateUrl: './join-now.component.html',
  styleUrls: ['./join-now.component.css']
})
export class JoinNowComponent implements OnInit {
  constructor() { }
  JoinUs:any;
  ngOnInit(): void {
    this.JoinUs=new FormGroup({
      "firstName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "Email":new FormControl(null,[Validators.required,Validators.email]),
      "Password":new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z]*')]),
    })
  }
  EnrollNow(){
    if(this.JoinUs.valid){
      alert(`Thank you ${this.JoinUs.value.firstName}`)
      this.JoinUs.reset();
    }
    console.log(this.JoinUs.value);

  }
  get UserName(){
    return this.JoinUs.get('firstName');
  }
  get Email(){
    return this.JoinUs.get('Email');
  }
  get Password(){
    return this.JoinUs.get('Password');
  }
}

