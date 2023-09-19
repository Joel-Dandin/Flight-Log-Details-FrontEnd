import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aviation3';
  constructor(private themeService: ThemeService) {
    this.setTheme();
    // this.playAudio(); 
  }

  setTheme() {
    const theme = this.themeService.getTheme();
    // set on <html>
    document.documentElement.setAttribute('data-theme', theme); 
  }

  toggleTheme() {
    const current = this.themeService.getTheme();
    const next = current === 'light' ? 'dark' : 'light';

    this.themeService.setTheme(next);

    this.setTheme(); // update
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "/assets/background.mp3";
    audio.load();
    audio.play();
  } 
}
