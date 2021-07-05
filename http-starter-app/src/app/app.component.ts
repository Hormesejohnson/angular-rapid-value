import { PostService } from './posts.service';
import { posts } from './post.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { pipe } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
loadedPosts:any = [];
isFetching:boolean=false;
constructor(private http: HttpClient,
  private PostService:PostService) {}

ngOnInit() {
  this.fetchPosts();
  }

onCreatePost(postData: { title: string; content: string }) {
  // Send Http request
  // console.log(postData);
  // let url = this.basUrl + "posts.json";
  // this.http.post<{name:string}>(url, postData).subscribe((response) => {
  //   console.log(response);
  // });
  this.PostService.createPost(postData);
}

onFetchPosts() {
  // Send Http request

  //     let url=this.basUrl+'posts.json';
  // this.http.get(url).subscribe((responesBody)=>{
  //   console.log(responesBody);
  // })

  this.fetchPosts()
}

onClearPosts() {
  // Send Http request
  this.deletePosts()
}

private fetchPosts()
{
this.isFetching=true;
this.PostService.getPosts().subscribe((posts) => {
  this.isFetching=false;
  this.loadedPosts=posts;
  console.log(posts);
  return this.loadedPosts
});
}

private deletePosts(){
this.PostService.deletePost().subscribe((response)=>{
this.isFetching=false;
  this.loadedPosts=[];
  return this.loadedPosts;
})
}
}

// export class AppComponent implements OnInit {
//   loadedPosts = [];
//   isfetching:boolean=false;
//   baseurl:string="https://my-first-project-rapidvalue-default-rtdb.firebaseio.com/"

//   constructor (private http: HttpClient,private PostService:PostsService) {}

//   ngOnInit() {}

//   onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    // console.log(postData);
    // let url=this.baseurl+'posts.json'
    // this.http.post<{name:string}>(url,postData)





    // .subscribe(
    //   ((responseData)=>{
    //     console.log(responseData)
    //   })
    // )
    // this.PostService.onCreatePost(postData)
  // }

  // onFetchPosts() {
    // let url=this.baseurl+"posts.json"
    // this.isfetching=true
    // this.http.get(url)
    // .pipe(
    //   map((responseData)=>{
    //     const postarrey:posts[]=[]
    //     for(const key in responseData){
    //       postarrey.push({...responseData[key],id:key})
    //     }
    //     return postarrey
    
    //   }))
    // .subscribe(
    //   (posts)=>{
    //     this.isfetching=false
    //     this.loadedPosts=posts
    //     console.log(posts)
    //   })
    // this.onFetchPosts()
    // }

  // onClearPosts() {
    // Send Http request
  // }

  // }