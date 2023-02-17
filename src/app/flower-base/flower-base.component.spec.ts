import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerBaseComponent } from './flower-base.component';

describe('FlowerBaseComponent', () => {
  let component: FlowerBaseComponent;
  let fixture: ComponentFixture<FlowerBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowerBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
