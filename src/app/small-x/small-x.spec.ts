import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmallX } from './small-x';

describe('SmallX', () => {
  let component: SmallX;
  let fixture: ComponentFixture<SmallX>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallX],
    }).compileComponents();

    fixture = TestBed.createComponent(SmallX);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
