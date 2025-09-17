    // DOM Elements
    const display = document.getElementById('display');
    const calculationDisplay = document.getElementById('calculation');
    const buttons = document.querySelectorAll('button');
    const acButton = document.getElementById('ac');
    const delButton = document.getElementById('del');
    const equalsButton = document.getElementById('equals');
    
    // Calculator state
    let currentInput = '';
    let previousInput = '';
    let operation = null;
    let shouldResetScreen = false;
    let memory = 0;
    
    // Update display
    const updateDisplay = () => {
      display.value = currentInput || '0';
    };
    
    // Reset calculator
    const resetCalculator = () => {
      currentInput = '';
      previousInput = '';
      operation = null;
      shouldResetScreen = false;
      calculationDisplay.textContent = '';
      updateDisplay();
    };
    
    // Delete last character
    const deleteLastCharacter = () => {
      currentInput = currentInput.toString().slice(0, -1);
      if (currentInput === '') {
        currentInput = '0';
        setTimeout(() => {
          currentInput = '';
          updateDisplay();
        }, 100);
      }
      updateDisplay();
    };
    
    // Append number to current input
    const appendNumber = (number) => {
      if (currentInput === '0' || shouldResetScreen) {
        currentInput = '';
        shouldResetScreen = false;
      }
      
      // Handle decimal point
      if (number === '.' && currentInput.includes('.')) return;
      
      currentInput += number;
      updateDisplay();
    };
    
    // Choose operation
    const chooseOperation = (op) => {
      if (currentInput === '') return;
      
      if (previousInput !== '') {
        compute();
      }
      
      operation = op;
      previousInput = currentInput;
      shouldResetScreen = true;
      
      // Update calculation display
      calculationDisplay.textContent = `${previousInput} ${getOperationSymbol(operation)}`;
    };
    
    // Perform computation
    const compute = () => {
      let computation;
      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);
      
      if (isNaN(prev) || isNaN(current)) return;
      
      switch (operation) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case '*':
          computation = prev * current;
          break;
        case '/':
          computation = prev / current;
          break;
        case '%':
          computation = prev % current;
          break;
        default:
          return;
      }
      
      // Format the result
      currentInput = computation.toString();
      operation = null;
      previousInput = '';
      shouldResetScreen = true;
      
      // Update calculation display
      calculationDisplay.textContent = '';
      updateDisplay();
    };
    
    // Get operation symbol for display
    const getOperationSymbol = (op) => {
      switch (op) {
        case '+': return '+';
        case '-': return '−';
        case '*': return '×';
        case '/': return '÷';
        case '%': return '%';
        default: return '';
      }
    };
    
    // Format display number
    const formatDisplayNumber = (number) => {
      return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 10
      }).format(number);
    };
    
    // Memory functions
    const memoryClear = () => {
      memory = 0;
    };
    
    const memoryRecall = () => {
      currentInput = memory.toString();
      updateDisplay();
    };
    
    const memoryAdd = () => {
      const current = parseFloat(currentInput);
      if (!isNaN(current)) {
        memory += current;
      }
    };
    
    const memorySubtract = () => {
      const current = parseFloat(currentInput);
      if (!isNaN(current)) {
        memory -= current;
      }
    };
    
    // Keyboard support
    const handleKeyboardInput = (e) => {
      if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
        appendNumber(e.key);
      } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        chooseOperation(e.key);
      } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        compute();
      } else if (e.key === 'Escape') {
        resetCalculator();
      } else if (e.key === 'Backspace') {
        deleteLastCharacter();
      } else if (e.key === '%') {
        chooseOperation('%');
      }
    };
    
    // Add event listeners
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Number buttons
        if (button.classList.contains('number')) {
          appendNumber(button.getAttribute('data-value'));
        }
        // Operator buttons
        else if (button.classList.contains('operator')) {
          chooseOperation(button.getAttribute('data-value'));
        }
        // Equals button
        else if (button.id === 'equals') {
          compute();
        }
        // AC button
        else if (button.id === 'ac') {
          resetCalculator();
        }
        // DEL button
        else if (button.id === 'del') {
          deleteLastCharacter();
        }
        // Memory buttons
        else if (button.id === 'mc') {
          memoryClear();
        }
        else if (button.id === 'mr') {
          memoryRecall();
        }
        else if (button.id === 'm-plus') {
          memoryAdd();
        }
        else if (button.id === 'm-minus') {
          memorySubtract();
        }
      });
    });
    
    // Add keyboard support
    document.addEventListener('keydown', handleKeyboardInput);
    
    // Initialize display
    updateDisplay();
