import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgkeysComponent } from './mgkeys.component';

describe('MgkeysComponent', () => {
  let component: MgkeysComponent;
  let fixture: ComponentFixture<MgkeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgkeysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
