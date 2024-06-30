import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Component, NgModule } from '@angular/core';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [ /* your components */],
  imports: [
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [ /* your root component */]
})
export class AppModule { }
