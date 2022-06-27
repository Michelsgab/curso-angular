import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Gabriel';

  userProfile = {
    role: 'Trainee',
    experienceTime: '1 year'
  }

  title = 'curso-angular';
}
