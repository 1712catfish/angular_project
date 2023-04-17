// Mock http
import {Item, jsonStringArrayToItemArray} from "./item";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class MockHttpClient {
  baseUrl = 'http://localhost:3000/items'

  public data = [
    new Item('Episode I - The Phantom Menace', '', false),
    new Item('Episode II - Attack of the Clones', '', false),
    new Item('Episode III - Revenge of the Sith', '', false),
    new Item('Episode IV - A New Hope', '', false),
    new Item('Episode V - The Empire Strikes Back', '', false),
    new Item('Episode VI - Return of the Jedi', '', false),
    new Item('Episode VII - The Force Awakens', '', false),
    new Item('Episode VIII - The Last Jedi', '', false),
    new Item('Episode IX – The Rise of Skywalker', '', false),
  ]

  public get(): Observable<Item[]> {
    console.log('GET')
    // console.log(this.data)
    return new Observable((observer) => {
      observer.next(this.data)
    })
  }

  public post(item: Item) {
    console.log('POST')
    this.data.push(item)
    // console.log(this.data)
  }

  public put(items: Item[]) {
    console.log('PUT')
    this.data = items
    // console.log(this.data)
  }
}

export class User {
  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
  ) {
  }
}

export class MockHttpUserServer {
  baseUrl = 'http://localhost:3000/users'

  public data = [
    new User("Pochitan", "I am a developer", "../assets/pochi.jpg"),
    new User("Pochitan", "I am a developer", "../assets/pochi.jpg"),
  ]

  public get(): Observable<User[]> {
    console.log('GET')
    return new Observable((observer) => {
      observer.next(this.data)
    })
  }

  public post(user: User) {
    console.log('POST')
    this.data.push(user)
    // console.log(this.data)
  }

  public put(users: User[]) {
    console.log('PUT')
    this.data = users
    // console.log(this.data)
  }
}

