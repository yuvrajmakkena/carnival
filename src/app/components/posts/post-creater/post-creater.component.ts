import { Component, OnInit} from "@angular/core";
import { NgForm } from '@angular/forms';
import {PostsService} from '../post.service';
@Component({
  selector: "app-post-creater",
  templateUrl: "./post-creater.component.html",
  styleUrls: ["./post-creater.component.css"]
})
export class PostCreaterComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";
  constructor(public postsService:PostsService){

  }
  
  onAddPost(form : NgForm) {
    if(form.invalid){
      return;
    };
       
        this.postsService.addPost(form.value.title,form.value.content);
     form.resetForm();
      }
    
  ngOnInit() {
    
  }
}
