import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateTasksComponent } from './modal-create-tasks.component';

describe('ModalCreateTasksComponent', () => {
  let component: ModalCreateTasksComponent;
  let fixture: ComponentFixture<ModalCreateTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreateTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCreateTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
