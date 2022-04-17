import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecipeDetailComponent } from './user-recipe-detail.component';

describe('UserRecipeDetailComponent', () => {
  let component: UserRecipeDetailComponent;
  let fixture: ComponentFixture<UserRecipeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecipeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
