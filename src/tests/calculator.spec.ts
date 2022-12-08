import { IncomeTaxCalculator } from '../calculator'

let sut: IncomeTaxCalculator

describe('IncomeTaxCalculator', () => {
  beforeEach(() => {
    sut = new IncomeTaxCalculator()
  })

  it.each([
    [1000, [1000]],
    [1500, [1000, 500]],
    [2000, [1000, 500, 500]],
  ])
    ('adiciona rendimentos', (expectedTotalIncome: number, incomeValues: number[]) => {
      for (let i = 0; i < incomeValues.length; i++) {
        sut.addIncome({ label: `label ${i}`, value: incomeValues[i] })
      }

      expect(sut.totalIncome).toEqual(expectedTotalIncome)
    })
})
