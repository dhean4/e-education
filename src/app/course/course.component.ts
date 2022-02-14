import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    {id:1,
      name:'Learn Angular',
      Description:'This tutorial introduces you to the essentials of Angular by walking you through building an e-commerce site with a catalog, shopping cart, and check-out form.',
      image:'../../assets/angularlogo.jpg'
    },

    {
      id:2,
      name:'Learn React',
      Description:'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
      image:'../../assets/react-logo.jpg'
    },

    {
      id:3,
      name:'Learn Node Js',
      Description:'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.',
      image:'../../assets/nodejs-logo.jpg'
    }
  ]

}
