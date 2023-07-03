import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchtroumfDetailsComponent } from './schtroumf-details.component';

describe('SchtroumfDetailsComponent', () => {
  let component: SchtroumfDetailsComponent;
  let fixture: ComponentFixture<SchtroumfDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchtroumfDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchtroumfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
