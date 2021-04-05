import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyAdsPage } from './my-ads.page';

describe('MyAdsPage', () => {
  let component: MyAdsPage;
  let fixture: ComponentFixture<MyAdsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAdsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
