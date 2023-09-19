import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeKey = 'appTheme';

  constructor() { }

  setTheme(theme: string) {
    localStorage.setItem(this.themeKey, theme);
  }

  getTheme() {
    return localStorage.getItem(this.themeKey) || 'light'; // default
  }
}
