import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  defaultThemeActive = true;
  themeButtonText = "Switch to Dark Theme";

  changeTheme() {
    var classList = document.documentElement.classList;

    if (this.defaultThemeActive) {
      document.documentElement.classList.remove(`theme-default`);
      // this will not handle error well
      classList.add(`theme-dark`);
      this.themeButtonText = "Switch to Light Theme";
    }
    else {
      document.documentElement.classList.remove(`theme-dark`);
      // this will not handle error well
      classList.add(`theme-default`);
      this.themeButtonText = "Switch to Dark Theme";

    }

    this.defaultThemeActive = !this.defaultThemeActive;

  }
}
