import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProBindComponent } from './pro-bind.component';

describe('ProBindComponent', () => {
  let component: ProBindComponent;
  let fixture: ComponentFixture<ProBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
