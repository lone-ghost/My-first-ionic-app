import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailAdPage } from './detail-ad.page';

describe('DetailAdPage', () => {
  let component: DetailAdPage;
  let fixture: ComponentFixture<DetailAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
