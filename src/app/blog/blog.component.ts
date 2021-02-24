import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  Form,
} from '@angular/forms';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  addForm: FormGroup;
  public blogs = [];
  public bTitle: any;
  public blogTitle: any;
  public date = new Date();

  ngOnInit() {
    this.blogs = this.bs.getBlog();
  }
  constructor(
    private fb: FormBuilder,
    public bs: BlogService,
    private route: Router
  ) {
    this.addForm = this.fb.group({
      blogCreatedBy: ['', [Validators.required]],
      blogTitle: ['', [Validators.required]],
      blogDetails: ['', [Validators.required]],
    });
  }
  save(form: any) {
    let date = new Date().toJSON().slice(0, 10);
    let details = form.value.blogDetails.split('<br>');
    this.bs.setBlog(
      form.value.blogCreatedBy,
      form.value.blogTitle,
      details,
      date
    );
    this.blogs = this.bs.getBlog();
  }

  getBlogTitle() {
    var blogT = [];
    var i;
    let a = this.bs.getBlog();
    for (i = 0; i < a.length; i++) {
      blogT[i] = a[i].blogTitle;
    }
    return blogT;
  }
}
