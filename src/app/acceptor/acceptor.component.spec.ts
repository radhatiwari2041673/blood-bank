import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptorComponent } from './acceptor.component';

describe('AcceptorComponent', () => {
  let component: AcceptorComponent;
  let fixture: ComponentFixture<AcceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
