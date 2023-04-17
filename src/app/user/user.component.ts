import {Component, inject} from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import {MockHttpClient, MockHttpUserServer, User} from '../component/todolist/http.mock';
import {BehaviorSubject} from "rxjs";
import {Item} from "../component/todolist/item";

@Component({
  selector: 'app-user',
  template: `
    <img class=""
         ngSrc="../assets/unnamed.jpg" width="100" height="100" priority alt=""
         src="">
    <h2></h2>
    <textarea class="border-2 border-gray-500">Hi</textarea>
    <div class="h-2"></div>
<!--    <button mat-stroked-button class="justify-self-start w-40" (click)="swapAccount()">-->
<!--      Switch account-->
<!--    </button>-->
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  faCirclePlus = faCirclePlus
  userIndex = 0

  // public httpServer = inject(MockHttpUserServer)
  //
  // public users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  // users: User[] = []
  // //
  // constructor() {
  //   this.httpServer.get().subscribe((user$) => {
  //     this.users = this.users$.getValue()
  //   })
  // }
  //
  swapAccount() {
    this.userIndex = this.userIndex == 0 ? 1 : 0
  }
}
