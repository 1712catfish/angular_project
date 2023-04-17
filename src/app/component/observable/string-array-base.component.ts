import {Component, OnInit, OnDestroy, Inject} from '@angular/core';
import {Subscription} from 'rxjs';

import {StringArrayService} from './string-array.service';

@Component({})
export abstract class StringArrayBaseComponent implements OnInit, OnDestroy {
  public stringArray: string[] | undefined;
  public stringArrayLength: number | undefined;

  private readonly _subscriptions = new Subscription();

  constructor(@Inject(StringArrayService) private readonly _stringArrayService: StringArrayService) {
  }

  ngOnInit(): void {
    this._subscriptions.add(
      this._stringArrayService.data$.subscribe(data => {
        this.stringArray = data;
        this.stringArrayLength = data.length;
      })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  public add(newValue: string): void {
    this._stringArrayService.push(newValue);
  }

  public edit(index: number, newValue: string): void {
    this._stringArrayService.edit(index, newValue);
  }

  public pop(): void {
    this._stringArrayService.pop();
  }

  public swap(index1: number, index2: number): void {
    this._stringArrayService.swap(index1, index2);
  }

  public pop_index(index: number): void {
    this._stringArrayService.pop_index(index);
  }
}
