import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ad } from 'src/models/ad';
import { FirestoreService } from 'src/services/data/firestore.service';

@Component({
  selector: 'app-detail-ad',
  templateUrl: 'detail-ad.page.html',
  styleUrls: ['detail-ad.page.scss'],
})
export class DetailAdPage implements OnInit {
  public ad: Ad;

  constructor(private firestore: FirestoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    const adId: string = this.route.snapshot.paramMap.get('id');
    this.firestore.getAdDetail(adId).subscribe(ad => {
      this.ad = ad;
    })
  }
}