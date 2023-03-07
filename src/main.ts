import { IncomeTaxCalculator } from './calculator'

let calculator = new IncomeTaxCalculator()

calculator.addIncome({ label: 'salário', value: 4_000 })

let result = calculator.run()

console.log(result);
