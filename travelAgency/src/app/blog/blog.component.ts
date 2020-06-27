import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogcontents } from '../blogcontents'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {
blogcontents;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
   this.blogcontents = blogcontents[+params.get('blogcontentsId')];
});
  }

}
