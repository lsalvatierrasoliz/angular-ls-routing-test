import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {
  applicationId: Number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.applicationId = +params.applicationId;
    });
  }

  ngOnInit() {}
}
