import { Component } from '@angular/core';
import { LaunchService } from './launch.service';

@Component({
  selector: 'lh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'launch-hub';

  constructor(private launch: LaunchService) {
    this.launch.getLaunches().subscribe((data) => {
      console.log(data);
      console.log(data[0]);
    });

    this.launch.getLaunch(3).subscribe(data => {
      console.log(data);
    });
  }
}
