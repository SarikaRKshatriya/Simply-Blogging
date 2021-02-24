import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, public bs: BlogService) {}
  public blogTitle: any;
  public blogCreatedBy: any;
  public blogCreatedOn: any;
  public blogDetails: any = [];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.blogTitle = params['blogTitle'];
    });
    let data = this.bs.getBlogDetails(this.blogTitle);
    this.blogCreatedBy = data?.blogCreatedBy;
    this.blogCreatedOn = data?.blogCreatedOn;
    this.blogDetails = data?.blogDetails;
  }
}
