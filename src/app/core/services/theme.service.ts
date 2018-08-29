import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _darkTheme: Subject<boolean> = new Subject<boolean>();
  isDarktheme = this._darkTheme.asObservable();

  setDarkTheme(isDarktheme: boolean) {
    this._darkTheme.next(isDarktheme);
  }
}
