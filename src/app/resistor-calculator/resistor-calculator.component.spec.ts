import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ResistorCalculatorComponent } from './resistor-calculator.component';

describe('ResistorCalculatorComponent', () => {
  let component: ResistorCalculatorComponent;
  let fixture: ComponentFixture<ResistorCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResistorCalculatorComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistorCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate resistance correctly', () => {
    component.selectedColors = ['Brown', 'Red', 'Orange', '100', '±2%'];
    const resistance = component.calculateResistance();
    expect(resistance).toBe('12300000.00 ±2%');
  });

  it('should get resistance value correctly', () => {
    const resistanceValue = component.getResistanceValue('Brown', 'Red', 'Orange');
    expect(resistanceValue).toBe(123000);
  });

  it('should get multiplier label correctly', () => {
    const multiplierLabel = component.getMultiplierLabel('10K');
    expect(multiplierLabel).toBe('Yellow');
  });

  it('should get tolerance label correctly', () => {
    const toleranceLabel = component.getToleranceLabel('±5%');
    expect(toleranceLabel).toBe('Gold');
  });
});
