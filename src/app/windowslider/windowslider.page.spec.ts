import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WindowsliderPage } from './windowslider.page';

describe('WindowsliderPage', () => {
  let component: WindowsliderPage;
  let fixture: ComponentFixture<WindowsliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowsliderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WindowsliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
