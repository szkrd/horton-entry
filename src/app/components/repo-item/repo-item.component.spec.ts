/* tslint:disable: no-floating-promises */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoItemComponent } from './repo-item.component';

xdescribe('RepoItemComponent', () => {
  let component: RepoItemComponent;
  let fixture: ComponentFixture<RepoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
