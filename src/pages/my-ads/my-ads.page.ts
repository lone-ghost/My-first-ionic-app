import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from 'src/models/ad';
import { FirestoreService } from 'src/services/data/firestore.service';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.page.html',
  styleUrls: ['./my-ads.page.scss'],
})
export class MyAdsPage implements OnInit {
  public u_adList: Observable<Ad[]>;

  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
    this.u_adList = this.firestore.getUAdList();
  }
}
