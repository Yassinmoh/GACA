import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {


  private openSidebarSubject$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public openFilter:Observable<boolean> = this.openSidebarSubject$.asObservable();
  constructor() { }

  openSidebaPopup() {
    this.openSidebarSubject$.next(true);
  }

  closeSidebaPopup() {
    this.openSidebarSubject$.next(false);
  }


}
