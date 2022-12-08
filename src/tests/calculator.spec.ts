import { IncomeTaxCalculator } from '../calculator'
import { BlankLabelException, InvalidIncomeValueException } from '../exceptions'

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

  describe('Exceptions', () => {
    it('BlankLabelException', () => {
      expect(() => {
        sut.addIncome({ label: '', value: 1000 })
      }).toThrow(BlankLabelException)
    })

    it.each([
      [-100],
      [NaN],
      [0],
    ])
      ('InvalidIncomeValueException %p', (value: number) => {
        expect(() => {
          sut.addIncome({ label: 'Salário', value })
        }).toThrow(InvalidIncomeValueException)
      })
  })
})
