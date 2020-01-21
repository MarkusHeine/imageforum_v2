import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPublishComponent } from './upload-publish.component';

describe('UploadPublishComponent', () => {
  let component: UploadPublishComponent;
  let fixture: ComponentFixture<UploadPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
