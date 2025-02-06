import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorseCardComponent } from './course-card.component';

describe('CorseCardComponent', () => {
  let component: CorseCardComponent;
  let fixture: ComponentFixture<CorseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorseCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
