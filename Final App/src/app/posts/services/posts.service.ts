import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    const url = `${environment.apiUrl}/posts/timeline?filter[where][type]=text`
    return this.http.get(url)
  }

  getProfile(profileId) {
    const url = `${environment.apiUrl}/profiles/${profileId}?filter[include]=posts`
    return this.http.get(url)
  }

}
