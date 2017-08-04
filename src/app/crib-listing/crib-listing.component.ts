import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {CribsService} from '../services/cribs.service';
import {UtilService} from '../services/util.service';


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;
  sortFields: Array<string> = ['address', 'area', 'bathrooms', 'bedrooms', 'price', 'type'];

  constructor(private cribsService: CribsService, private utilService: UtilService) { }

  ngOnInit() {
    this.cribsService.getAllCribs().subscribe(
      data => this.cribs = data,
      error => this.error = error.statusText
    );
    this.cribsService.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
    );
  }

}
