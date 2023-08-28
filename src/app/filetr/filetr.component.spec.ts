import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiletrComponent } from './filetr.component';

describe('FiletrComponent', () => {
  let component: FiletrComponent;
  let fixture: ComponentFixture<FiletrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiletrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiletrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
