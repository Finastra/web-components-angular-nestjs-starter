import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ProxyService, PROXY_URL } from '@finastra/services/proxy';
import { map } from 'rxjs';
import { User } from './randomuser.interface';
import { RANDOM_USER_SERVICE } from './randomuser.token';

@Injectable({
  providedIn: 'any',
})
export class RandomUserService extends ProxyService {
  constructor(
    @Inject(RANDOM_USER_SERVICE) serviceId: string,
    http: HttpClient,
    @Inject(PROXY_URL) proxyUrl: string
  ) {
    super(serviceId, http, proxyUrl);
  }

  getRandomUsers() {
    return this.get<User[]>('?results=5').pipe(map((data: any) => data.results));
  }
}
