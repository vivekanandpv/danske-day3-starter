import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss'],
})
export class HrComponent implements OnInit {
  city: string;
  year: number;
  qp: object;

  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.city = this.ar.snapshot.paramMap.get('city');
    this.year = +this.ar.snapshot.paramMap.get('year');

    this.qp = this.ar.snapshot.queryParams;
  }
}
