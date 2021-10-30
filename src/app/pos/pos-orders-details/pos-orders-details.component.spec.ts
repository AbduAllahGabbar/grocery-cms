import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosOrdersDetailsComponent } from './pos-orders-details.component';

describe('PosOrdersDetailsComponent', () => {
  let component: PosOrdersDetailsComponent;
  let fixture: ComponentFixture<PosOrdersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosOrdersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosOrdersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
