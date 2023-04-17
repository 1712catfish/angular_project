import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Item} from "./item";
import {MockHttpClient} from "./http.mock";

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {faCoffee, faPencil, faCheckCircle, faCircleMinus, faCirclePlus} from '@fortawesome/free-solid-svg-icons';

// font awesome https://fontawesome.com/v5/icons/edit?f=classic&s=duotone&sz=xs&sc=%231E3050

@Component({
  selector: 'app-todolist-item',
  template: `
    <div class="flex justify-between">

      <input matInput
             [contentEditable]="!isDone"
             [readonly]="isDone"
             class="border-0 grow"
             #x (input)="setContent(x.innerText)"
             [ngClass]="{'strikethrough': isDone, 'item-done-color': isDone}"
             (click)="isEditing=true"
             value={{item.name}}>

      <div class="w-4"></div>

      <div *ngIf="this.isHover" class="h-1">

        <fa-icon [ngClass]="{'item-done-color' : isDone}"
                 [icon]="faDone" [border]="true"
                 (click)="toggleDone()"></fa-icon>

        <fa-icon (click)="deleteItem()"
                 [icon]="faDelete" [border]="true">

        </fa-icon>

      </div>

    </div>
  `,
  styleUrls: ['./todolist.component.css']
})
export class TodoListItem {
  @Input() item: Item = new Item('', '', false)
  @Input() setItem: (item: Item) => void = (item: Item) => {
  }
  @Input() isHover: boolean = false

  faEditing = faCoffee
  faNotEdit = faPencil
  faDone = faCheckCircle
  faDelete = faCircleMinus
  color = "primary"

  isEditing = false;
  isDone = this.item.done;

  public toggleEdit() {
    this.isEditing = !this.isEditing
  }

  public setEditDone() {
    this.isEditing = false
  }

  public toggleDone() {
    this.isDone = !this.isDone
    if (this.isDone)
      this.setEditDone()
  }

  public setContent(newContent: string) {
    console.log(newContent)
    this.item.content = newContent
    this.setItem(this.item)
  }

  onClick() {
  }

  deleteItem() {
    this.setItem(new Item('', '-1', true))
  }
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodoListComponent {
  private httpClient = inject(MockHttpClient)
  public items$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  public currentIndex = 0;
  hoverIndex = -1
  faCirclePlus = faCirclePlus

  constructor() {
    this.httpClient.get().subscribe(this.items$)
  }

  public pushItem(item: Item) {
    this.httpClient.post(item)
    this.httpClient.get().subscribe(this.items$)
  }

  public putItems(items: Item[]) {
    this.httpClient.put(items)
    this.httpClient.get().subscribe(this.items$)
  }

  public addEmptyItem() {
    let newItem = new Item('New task', 'Content 4', false)
    this.pushItem(newItem)
  }

  drop(event: CdkDragDrop<Item>) {
    let items = this.items$.getValue()
    moveItemInArray(items, event.previousIndex, event.currentIndex);
    this.items$.next(items)
  }

  public setItem(index: number) {
    return (newItem: Item) => {
      let items = this.items$.getValue()

      if (newItem.content !== "-1") {
        items[index] = newItem
      } else {
        items.splice(index, 1);
      }

      this.items$.next(items)
      this.putItems(items)

    }
  }
}


