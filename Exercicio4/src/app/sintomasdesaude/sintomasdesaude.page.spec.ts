import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SintomasdesaudePage } from './sintomasdesaude.page';

describe('SintomasdesaudePage', () => {
  let component: SintomasdesaudePage;
  let fixture: ComponentFixture<SintomasdesaudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SintomasdesaudePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SintomasdesaudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
