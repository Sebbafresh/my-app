import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMedEirikComponent } from './test-med-eirik.component';

describe('TestMedEirikComponent', () => {
  let component: TestMedEirikComponent;
  let fixture: ComponentFixture<TestMedEirikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMedEirikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMedEirikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
