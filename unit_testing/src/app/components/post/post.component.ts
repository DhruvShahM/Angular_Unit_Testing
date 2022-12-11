import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post:Post | null=null;
  @Output() delete=new EventEmitter<void>();
  
  constructor() { }

  onDeletePost(event:Event){
    event.stopPropagation();
    this.delete.emit();
  }

}
