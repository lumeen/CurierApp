import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriersListComponent } from './curiers-list.component';

describe('CuriersListComponent', () => {
  let component: CuriersListComponent;
  let fixture: ComponentFixture<CuriersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuriersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
