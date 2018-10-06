import { LaunchService, Launch } from './../launch.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lh-launch-site',
  templateUrl: './launch-site.component.html',
  styleUrls: ['./launch-site.component.css']
})
export class LaunchSiteComponent implements OnInit {
  launch$: Observable<Launch>;

  constructor(
    private launchService: LaunchService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.launch$ = this.launchService.getLaunch(+params['flightNumber']);
    });
  }

}
