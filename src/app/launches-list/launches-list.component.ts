import { Component, OnInit } from '@angular/core';
import { LaunchService, Launch } from '../launch.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'lh-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.css']
})
export class LaunchesListComponent implements OnInit {
  launches: Observable<Launch[]>;

  constructor(private launch: LaunchService) { }

  ngOnInit() {
    this.launches = this.launch.getLaunches();
  }

}
