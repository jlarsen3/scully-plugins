import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Http404Component } from './http404.component';

describe('Http404Component', () => {
  let component: Http404Component;
  let fixture: ComponentFixture<Http404Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Http404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
