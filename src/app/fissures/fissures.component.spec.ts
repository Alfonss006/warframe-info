import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FissuresComponent } from './fissures.component';

describe('FissuresComponent', () => {
  let component: FissuresComponent;
  let fixture: ComponentFixture<FissuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FissuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FissuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
