import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePractiveComponent } from './directive-practive.component';

describe('DirectivePractiveComponent', () => {
  let component: DirectivePractiveComponent;
  let fixture: ComponentFixture<DirectivePractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivePractiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivePractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
