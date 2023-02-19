import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDpComponent } from './my-dp.component';

describe('MyDpComponent', () => {
  let component: MyDpComponent;
  let fixture: ComponentFixture<MyDpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
