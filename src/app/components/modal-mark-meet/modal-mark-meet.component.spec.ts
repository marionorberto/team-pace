import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMarkMeetComponent } from './modal-mark-meet.component';

describe('ModalMarkMeetComponent', () => {
  let component: ModalMarkMeetComponent;
  let fixture: ComponentFixture<ModalMarkMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalMarkMeetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalMarkMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
