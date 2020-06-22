import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarsintomasPage } from './editarsintomas.page';

describe('EditarsintomasPage', () => {
  let component: EditarsintomasPage;
  let fixture: ComponentFixture<EditarsintomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarsintomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarsintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
