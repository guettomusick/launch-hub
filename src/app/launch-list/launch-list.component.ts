import { Component, OnInit } from '@angular/core';
import { LaunchService, Launch } from '../launch.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'lh-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {
  launches$: Observable<Launch[]>;

  constructor(private launch: LaunchService) { }

  ngOnInit() {
    this.launches$ = this.launch.getLaunches();
  }

}
