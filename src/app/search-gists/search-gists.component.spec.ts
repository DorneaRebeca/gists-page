import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGistsComponent } from './search-gists.component';

describe('SearchGistsComponent', () => {
  let component: SearchGistsComponent;
  let fixture: ComponentFixture<SearchGistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
