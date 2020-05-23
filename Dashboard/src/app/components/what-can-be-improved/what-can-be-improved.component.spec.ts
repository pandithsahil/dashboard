import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatCanBeImprovedComponent } from './what-can-be-improved.component';

describe('WhatCanBeImprovedComponent', () => {
  let component: WhatCanBeImprovedComponent;
  let fixture: ComponentFixture<WhatCanBeImprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatCanBeImprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatCanBeImprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
