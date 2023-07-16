import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resistor-calculator',
  templateUrl: './resistor-calculator.component.html',
  styleUrls: ['./resistor-calculator.component.css']
})
export class ResistorCalculatorComponent {
  colors: string[] = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Grey', 'White'];
  selectedColors: string[] = ['', '', '', '', ''];

  resistorValues: { value: number, multiplier: string, tolerance: string }[] = [
    { value: 0, multiplier: '1', tolerance: '±1%' },
    { value: 10, multiplier: '10', tolerance: '±2%' },
    { value: 100, multiplier: '100', tolerance: '±5%' },
    { value: 1000, multiplier: '1K', tolerance: '±10%' },
    { value: 10000, multiplier: '10K', tolerance: '±0.1%' },
    { value: 100000, multiplier: '100K', tolerance: '±0.5%' },
    { value: 1000000, multiplier: '1M', tolerance: '±0.01%' },
    { value: 10000000, multiplier: '10M', tolerance: '±0.02%' },
    { value: 100000000, multiplier: '100M', tolerance: '±0.05%' },
    { value: 1000000000, multiplier: '1G', tolerance: '±0.025%' }
  ];

  calculateResistance(): string {
    const [band1, band2, band3, multiplier, tolerance] = this.selectedColors;
    const resistance = (this.getResistanceValue(band1, band2, band3) * parseInt(multiplier)).toFixed(2);
    return resistance + ' ' + tolerance;
  }

  getResistanceValue(band1: string, band2: string, band3: string): number {
  const resistorValue = (this.colors.indexOf(band1) * 100 + this.colors.indexOf(band2) * 10 + this.colors.indexOf(band3)) * Math.pow(10, this.colors.indexOf(band3));
  return resistorValue;

  }

  getMultiplierLabel(multiplier: string): string {
    switch (multiplier) {
	    case '1':
		    return 'Black';
      case '10':
        return 'Brown';
      case '100':
        return 'Red';
      case '1K':
        return 'Orange';
      case '10K':
        return 'Yellow';
      case '100K':
        return 'Green';
      case '1M':
        return 'Blue';
      case '10M':
        return 'Violet';
      case '100M':
        return 'Grey';
      case '1G':
        return 'White';
      default:
        return '';
    }
  }

  getToleranceLabel(tolerance: string): string {
    switch (tolerance) {
      case '±1%':
        return 'Brown';
      case '±2%':
        return 'Red';
      case '±5%':
        return 'Gold';
      case '±10%':
        return 'Silver';
      case '±0.1%':
        return 'Violet';
      case '±0.5%':
	      return 'Green';
      case '±0.01%':
        return 'Grey';
      case '±0.02%':
        return 'Yellow';
      case '±0.05%':
        return 'Orange';
      case '±0.25%':
	      return 'Blue';
      default:
        return '';
    }
  }}
