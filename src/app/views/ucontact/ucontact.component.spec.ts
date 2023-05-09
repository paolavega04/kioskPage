import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcontactComponent } from './ucontact.component';

describe('UcontactComponent', () => {
  let component: UcontactComponent;
  let fixture: ComponentFixture<UcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
