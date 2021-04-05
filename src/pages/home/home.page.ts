import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad } from 'src/models/ad';
import { FirestoreService } from 'src/services/data/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
  
export class HomePage implements OnInit {
  public adList: Observable<Ad[]>;

  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
    this.adList = this.firestore.getAdList();
  }
}