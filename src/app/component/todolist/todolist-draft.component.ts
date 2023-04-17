import { Component} from '@angular/core';
import {StringArrayService} from "../observable/string-array.service";
import {StringArrayBaseComponent} from '../observable/string-array-base.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodoListComponent extends StringArrayBaseComponent {

  public editingTask: { index: number, value: string } | null = null;

  constructor(public stringArrayService: StringArrayService) {
    super(stringArrayService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.add('')
  }

  public get items(): string[] {
    console.log('get items')
    console.log(this.stringArray)
    return this.stringArray || [];
  }

  public setEditingTask(index: number): void {
    this.editingTask = { index, value: this.stringArray![index] };
  }

  public addTask(): void {
    this.add('new task');
  }

  public deleteTask(index: number): void {
    this.pop_index(index);
  }

  public editTask(index: number): void {
    const value = this.stringArray![index];
    this.editingTask = { index, value };
  }

  public saveTask(): void {
    if (this.editingTask) {
      const { index, value } = this.editingTask;
      this.editingTask = null;
      this.edit(index, value);
    }
  }

  public cancelEdit(): void {
    this.editingTask = null;
  }

  public reorderTasks(event: any): void {
    const [previousIndex, currentIndex] = event.detail;
    this.swap(previousIndex, currentIndex);
  }

  public console_log(): void {
    console.log(this.stringArray);
  }
}
