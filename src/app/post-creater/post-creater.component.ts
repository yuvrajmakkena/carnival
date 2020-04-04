import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-creater',
  templateUrl: './post-creater.component.html',
  styleUrls: ['./post-creater.component.css']
})
export class PostCreaterComponent implements OnInit {
  enteredValue = ''; 
  newPost = 'NO CONTENT';
  onAddPost(){
    this.newPost=this.enteredValue;
  }

  ngOnInit() {
  }}
