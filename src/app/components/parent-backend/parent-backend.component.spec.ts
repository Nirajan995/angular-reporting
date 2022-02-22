import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBackendComponent } from './parent-backend.component';

describe('ParentBackendComponent', () => {
  let component: ParentBackendComponent;
  let fixture: ComponentFixture<ParentBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentBackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
