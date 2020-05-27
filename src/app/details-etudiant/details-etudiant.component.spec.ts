import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEtudiantComponent } from './details-etudiant.component';

describe('DetailsEtudiantComponent', () => {
  let component: DetailsEtudiantComponent;
  let fixture: ComponentFixture<DetailsEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
