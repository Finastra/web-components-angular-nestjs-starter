import { Component, OnInit } from '@angular/core';
import { RandomUserService, User } from '@finastra/services/randomuser';
import { Observable } from 'rxjs';

@Component({
  selector: 'finastra-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.users$ = this.randomUserService.getRandomUsers();
  }

  call(phone: string) {
    console.log('call:', phone);
  }

  email(email: string) {
    console.log('email:', email);
  }
}
