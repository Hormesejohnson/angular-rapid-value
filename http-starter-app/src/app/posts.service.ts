import { HttpClient, HttpHeaders } from '@angular/common/http';
import { posts } from './post.model';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
basUrl: string = "https://my-first-project-rapidvalue-default-rtdb.firebaseio.com/"
constructor(private http:HttpClient) { }

createPost(postData:posts)
{
  console.log(postData);
  let url = this.basUrl + "posts.json";
  this.http.post<{name:string}>(url, postData).subscribe((response) => {
    console.log(response);
  });
}
getPosts()
{

    // Send Http request
let url1 = this.basUrl + "posts.json";
return this.http

  .get<{[key:string]:posts}>(url1)
  headers:new HttpHeaders({"custom-Header":'hormese'})
})
  .pipe(
    map((responesData) => {
      const postArray:posts[] = [];
      for (const key in responesData) {
        postArray.push({...responesData[key],id:key});
      }
      return postArray;
    })
  )
  
}

deletePost()
{
  let url=this.basUrl+"posts.json";
  return this.http.delete(url)
}
}