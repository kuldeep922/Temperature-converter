function convert(from) {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    
    if (from === 'celsius') {
      const celsiusValue = parseFloat(celsiusInput.value);
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      fahrenheitInput.value = isNaN(fahrenheitValue) ? '' : fahrenheitValue.toFixed(2);
    } else {
      const fahrenheitValue = parseFloat(fahrenheitInput.value);
      const celsiusValue = (fahrenheitValue - 32) * 5/9;
      celsiusInput.value = isNaN(celsiusValue) ? '' : celsiusValue.toFixed(2);
    }
  }
  