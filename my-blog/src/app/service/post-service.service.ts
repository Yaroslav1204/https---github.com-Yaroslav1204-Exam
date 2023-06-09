import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post'

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  URL = 'http://localhost:8000/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.URL);
  }
}
