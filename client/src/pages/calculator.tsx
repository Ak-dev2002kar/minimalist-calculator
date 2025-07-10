import { useCalculator } from '@/hooks/use-calculator';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Trash2, Delete, Calculator as CalculatorIcon } from 'lucide-react';

export default function Calculator() {
  const {
    state,
    handleNumber,
    handleDecimal,
    handleOperation,
    handleEquals,
    handleClear,
    handleAllClear,
    handleBackspace,
  } = useCalculator();

  const { currentValue, previousValue, operation, errorMessage } = state;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <Card className="w-full max-w-sm p-6 bg-white rounded-3xl shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold text-slate-800 mb-1 flex items-center justify-center gap-2">
            <CalculatorIcon className="w-5 h-5" />
            Calculator
          </h1>
          <p className="text-sm text-slate-500">React + Vite + Node.js</p>
        </div>

        {/* Display */}
        <div className="bg-slate-900 rounded-2xl p-6 mb-6 shadow-inner">
          <div className="text-right">
            {/* Previous calculation display */}
            <div className="text-slate-400 font-mono text-sm mb-2 h-5">
              {previousValue && operation && `${previousValue} ${operation}`}
            </div>
            
            {/* Current display */}
            <div className="text-white font-mono text-4xl font-medium overflow-hidden">
              {currentValue}
            </div>
            
            {/* Error message display */}
            <div className="text-red-400 text-xs mt-2 h-4">
              {errorMessage}
            </div>
          </div>
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1: Clear and operations */}
          <Button
            className="bg-calc-clear hover:bg-red-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-lg h-14"
            onClick={handleClear}
          >
            <Trash2 className="w-5 h-5" />
          </Button>
          
          <Button
            className="bg-calc-clear hover:bg-red-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-lg h-14"
            onClick={handleAllClear}
          >
            AC
          </Button>
          
          <Button
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-lg h-14"
            onClick={handleBackspace}
          >
            <Delete className="w-5 h-5" />
          </Button>
          
          <Button
            className="bg-calc-primary hover:bg-blue-700 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleOperation('÷')}
          >
            ÷
          </Button>

          {/* Row 2: Numbers 7-9 and multiply */}
          <Button
            className="bg-calc-secondary hover:bg-slate-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleNumber('7')}
          >
            7
          </Button>
          
          <Button
            className="bg-calc-secondary hover:bg-slate-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleNumber('8')}
          >
            8
          </Button>
          
          <Button
            className="bg-calc-secondary hover:bg-slate-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleNumber('9')}
          >
            9
          </Button>
          
          <Button
            className="bg-calc-primary hover:bg-blue-700 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleOperation('×')}
          >
            ×
          </Button>

          {/* Row 3: Numbers 4-6 and subtract */}
          <Button
            className="bg-calc-secondary hover:bg-slate-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleNumber('4')}
          >
            4
          </Button>
          
          <Button
            className="bg-calc-secondary hover:bg-slate-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleNumber('5')}
          >
            5
          </Button>
          
          <Button
            className="bg-calc-secondary hover:bg-slate-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleNumber('6')}
          >
            6
          </Button>
          
          <Button
            className="bg-calc-primary hover:bg-blue-700 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleOperation('-')}
          >
            −
          </Button>

          {/* Row 4: Numbers 1-3 and add */}
          <Button
            className="bg-calc-secondary hover:bg-slate-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleNumber('1')}
          >
            1
          </Button>
          
          <Button
            className="bg-calc-secondary hover:bg-slate-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleNumber('2')}
          >
            2
          </Button>
          
          <Button
            className="bg-calc-secondary hover:bg-slate-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleNumber('3')}
          >
            3
          </Button>
          
          <Button
            className="bg-calc-primary hover:bg-blue-700 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={() => handleOperation('+')}
          >
            +
          </Button>

          {/* Row 5: Zero, decimal, and equals */}
          <Button
            className="bg-calc-secondary hover:bg-slate-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14 col-span-2"
            onClick={() => handleNumber('0')}
          >
            0
          </Button>
          
          <Button
            className="bg-calc-secondary hover:bg-slate-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={handleDecimal}
          >
            .
          </Button>
          
          <Button
            className="bg-calc-accent hover:bg-amber-600 text-white font-semibold py-4 px-2 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl h-14"
            onClick={handleEquals}
          >
            =
          </Button>
        </div>

        {/* Keyboard Support Indicator */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm5.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L10.586 10 8.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Keyboard input supported
          </p>
        </div>
      </Card>
    </div>
  );
}
