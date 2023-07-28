import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesinfComponent } from './sitesinf.component';

describe('SitesinfComponent', () => {
  let component: SitesinfComponent;
  let fixture: ComponentFixture<SitesinfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesinfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitesinfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
