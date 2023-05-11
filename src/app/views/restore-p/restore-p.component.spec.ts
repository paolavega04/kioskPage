import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePComponent } from './restore-p.component';

describe('RestorePComponent', () => {
  let component: RestorePComponent;
  let fixture: ComponentFixture<RestorePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestorePComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestorePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
