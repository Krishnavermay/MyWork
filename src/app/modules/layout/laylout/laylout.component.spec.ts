import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayloutComponent } from './laylout.component';

describe('LayloutComponent', () => {
  let component: LayloutComponent;
  let fixture: ComponentFixture<LayloutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayloutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
