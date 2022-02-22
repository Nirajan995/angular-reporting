import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBackendComponent } from './child-backend.component';

describe('ChildBackendComponent', () => {
  let component: ChildBackendComponent;
  let fixture: ComponentFixture<ChildBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildBackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
