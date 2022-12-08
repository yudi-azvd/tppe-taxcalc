import { IncomeTaxCalculator } from '../calculator'

describe('IncomeTaxCalculator', () => {
  it('add income', () => {
    let sut = new IncomeTaxCalculator()
    sut.addIncome({ label: 'Salário', value: 1000 })
  })
})
