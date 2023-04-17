import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StringArrayService {
  private readonly _data$: string[];
  private readonly _dataSubject$: Subject<string[]>;

  constructor() {
    this._data$ = ['foo', 'bar', 'baz'];
    this._dataSubject$ = new Subject();
  }

  public get(index: number): Observable<string> {
    return this._dataSubject$.asObservable().pipe(map(data => data[index]));
  }

  public edit(index: number, newValue: string): void {
    this._data$[index] = newValue;
    this._notifyDataChange();
  }

  public push(value: string): void {
    this._data$.push(value);
    this._notifyDataChange();
  }

  public pop(): void {
    this._data$.pop();
    this._notifyDataChange();
  }

  public swap(index1: number, index2: number): void {
    [this._data$[index1], this._data$[index2]] = [this._data$[index2], this._data$[index1]];
    this._notifyDataChange();
  }

  public get data$(): Observable<string[]> {
    return this._dataSubject$.asObservable();
  }

  public pop_index(index: number): void {
    this._data$.splice(index, 1);
    this._notifyDataChange();
  }

  private _notifyDataChange(): void {
    this._dataSubject$.next([...this._data$]);
  }
}
