import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateAdPage } from './create-ad.page';

describe('CreateAdPage', () => {
  let component: CreateAdPage;
  let fixture: ComponentFixture<CreateAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
