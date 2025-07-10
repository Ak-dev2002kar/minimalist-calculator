import { useState, useCallback, useEffect } from 'react';

export interface CalculatorState {
  currentValue: string;
  previousValue: string;
  operation: string;
  errorMessage: string;
  shouldClearOnNext: boolean;
}

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>({
    currentValue: '0',
    previousValue: '',
    operation: '',
    errorMessage: '',
    shouldClearOnNext: false,
  });

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, errorMessage: '' }));
  }, []);

  const handleNumber = useCallback((digit: string) => {
    clearError();
    setState(prev => {
      if (prev.shouldClearOnNext) {
        return {
          ...prev,
          currentValue: digit,
          shouldClearOnNext: false,
        };
      }
      
      if (prev.currentValue === '0' && digit !== '.') {
        return { ...prev, currentValue: digit };
      }
      
      if (prev.currentValue.length >= 10) {
        return prev;
      }
      
      return {
        ...prev,
        currentValue: prev.currentValue + digit,
      };
    });
  }, [clearError]);

  const handleDecimal = useCallback(() => {
    clearError();
    setState(prev => {
      if (prev.shouldClearOnNext) {
        return {
          ...prev,
          currentValue: '0.',
          shouldClearOnNext: false,
        };
      }
      
      if (prev.currentValue.includes('.')) {
        return prev;
      }
      
      return {
        ...prev,
        currentValue: prev.currentValue + '.',
      };
    });
  }, [clearError]);

  const handleOperation = useCallback((op: string) => {
    clearError();
    setState(prev => {
      if (prev.operation && prev.previousValue && !prev.shouldClearOnNext) {
        // Continue calculation
        const result = calculate(prev.previousValue, prev.currentValue, prev.operation);
        if (result.error) {
          return {
            ...prev,
            errorMessage: result.error,
          };
        }
        return {
          ...prev,
          currentValue: result.value,
          previousValue: result.value,
          operation: op,
          shouldClearOnNext: true,
        };
      }
      
      return {
        ...prev,
        previousValue: prev.currentValue,
        operation: op,
        shouldClearOnNext: true,
      };
    });
  }, [clearError]);

  const handleEquals = useCallback(() => {
    clearError();
    setState(prev => {
      if (!prev.operation || !prev.previousValue) {
        return prev;
      }
      
      const result = calculate(prev.previousValue, prev.currentValue, prev.operation);
      if (result.error) {
        return {
          ...prev,
          errorMessage: result.error,
        };
      }
      
      return {
        ...prev,
        currentValue: result.value,
        previousValue: '',
        operation: '',
        shouldClearOnNext: true,
      };
    });
  }, [clearError]);

  const handleClear = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentValue: '0',
      errorMessage: '',
      shouldClearOnNext: false,
    }));
  }, []);

  const handleAllClear = useCallback(() => {
    setState({
      currentValue: '0',
      previousValue: '',
      operation: '',
      errorMessage: '',
      shouldClearOnNext: false,
    });
  }, []);

  const handleBackspace = useCallback(() => {
    clearError();
    setState(prev => {
      if (prev.shouldClearOnNext) {
        return {
          ...prev,
          currentValue: '0',
          shouldClearOnNext: false,
        };
      }
      
      if (prev.currentValue.length === 1) {
        return { ...prev, currentValue: '0' };
      }
      
      return {
        ...prev,
        currentValue: prev.currentValue.slice(0, -1),
      };
    });
  }, [clearError]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      
      if (e.key >= '0' && e.key <= '9') {
        handleNumber(e.key);
      } else if (e.key === '.') {
        handleDecimal();
      } else if (e.key === '+') {
        handleOperation('+');
      } else if (e.key === '-') {
        handleOperation('-');
      } else if (e.key === '*') {
        handleOperation('×');
      } else if (e.key === '/') {
        handleOperation('÷');
      } else if (e.key === 'Enter' || e.key === '=') {
        handleEquals();
      } else if (e.key === 'Escape') {
        handleAllClear();
      } else if (e.key === 'Backspace') {
        handleBackspace();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNumber, handleDecimal, handleOperation, handleEquals, handleAllClear, handleBackspace]);

  return {
    state,
    handleNumber,
    handleDecimal,
    handleOperation,
    handleEquals,
    handleClear,
    handleAllClear,
    handleBackspace,
  };
}

function calculate(prev: string, current: string, operation: string): { value: string; error?: string } {
  const prevNum = parseFloat(prev);
  const currentNum = parseFloat(current);
  
  if (isNaN(prevNum) || isNaN(currentNum)) {
    return { value: '0', error: 'Invalid number' };
  }
  
  let result: number;
  
  switch (operation) {
    case '+':
      result = prevNum + currentNum;
      break;
    case '-':
      result = prevNum - currentNum;
      break;
    case '×':
      result = prevNum * currentNum;
      break;
    case '÷':
      if (currentNum === 0) {
        return { value: '0', error: 'Cannot divide by zero' };
      }
      result = prevNum / currentNum;
      break;
    default:
      return { value: current };
  }
  
  // Handle very large or very small numbers
  if (!isFinite(result)) {
    return { value: '0', error: 'Result too large' };
  }
  
  // Format result to avoid floating point precision issues
  const formatted = parseFloat(result.toPrecision(10));
  
  // Convert to string and limit display length
  let resultStr = formatted.toString();
  if (resultStr.length > 10) {
    if (formatted >= 1e10 || formatted <= -1e10) {
      resultStr = formatted.toExponential(5);
    } else {
      resultStr = formatted.toFixed(10 - resultStr.indexOf('.') - 1);
    }
  }
  
  return { value: resultStr };
}
