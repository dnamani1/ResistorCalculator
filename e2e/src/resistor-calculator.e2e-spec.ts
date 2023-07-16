import { browser, by, element } from 'protractor';
  
describe('Resistor Calculator App', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should calculate resistance correctly', () => {
    const dropdowns = element.all(by.css('.dropdown-container select'));
    dropdowns.each((dropdown, index) => {
      dropdown.click();
      dropdown.all(by.tagName('option')).first().click();
    });

    const resistanceText = element(by.css('h2')).getText();
    expect(resistanceText).toContain('Resistance:');
  });

  it('should display debug information correctly', () => {
    const dropdowns = element.all(by.css('.dropdown-container select'));
    dropdowns.each((dropdown, index) => {
      dropdown.click();
      dropdown.all(by.tagName('option')).first().click();
    });

    const debugInfo = element(by.css('.debug-container')).getText();
    expect(debugInfo).toContain('Digits:');
    expect(debugInfo).toContain('Multiplier:');
    expect(debugInfo).toContain('Tolerance:');
  });
});
