import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { del } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public a = [];
  public b = [];
  constructor() {
   
  }

  setBlog(
    blogCreatedBy: string,
    blogTitle: string,
    blogDetails: string,
    date: string
  ) {
    let obj = {
      blogCreatedBy: blogCreatedBy,
      blogTitle: blogTitle,
      blogDetails: blogDetails,
      blogCreatedOn: date,
    };
    let blogs =
      localStorage.getItem('blogs') != null
        ? JSON.parse(localStorage.getItem('blogs')!)
        : [];
    blogs.push(obj);
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }
  getBlog() {
    var a = [];
    a = JSON.parse(localStorage.getItem('blogs')!);
    return a;
  }
  getBlogDetails(blogInfo: string) {
    let data;
    let b = this.getBlog();
    for (let j = 0; j < b.length; j++) {
      if (blogInfo === b[j].blogTitle) {
        let obj = {
          blogTitle: b[j].blogTitle,
          blogDetails: b[j].blogDetails,
          blogCreatedBy: b[j].blogCreatedBy,
          blogCreatedOn: b[j].blogCreatedOn,
        };
        data = obj;
      }
    }
    return data;
  }
}
