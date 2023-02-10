import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAlertComponent } from './users-alert.component';

describe('UsersAlertComponent', () => {
  let component: UsersAlertComponent;
  let fixture: ComponentFixture<UsersAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
