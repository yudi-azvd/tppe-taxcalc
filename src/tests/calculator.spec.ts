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
    ('adiciona rendimentos %p = sum(%p)', (expectedTotalIncome: number, incomeValues: number[]) => {
      incomeValues.forEach((value) => sut.addIncome({ label: 'label ', value }))

      expect(sut.totalIncome).toEqual(expectedTotalIncome)
    })

  it.each([
    [1000, [1000]]
  ])('adiciona deduções %p = sum(%p)', (expectedTotalDeduction: number, deductions: number[]) => {
    deductions.forEach(value => sut.addDeduction({ label: 'label', value: value }))

    expect(sut.totalDeduction).toEqual(expectedTotalDeduction)
  })

  it('adding dependent adds to deduction', () => {
    sut.addDependent({ name: 'John Doe', birth: new Date('2000-01-01') })

    expect(sut.dependents.length).toEqual(1)
    expect(sut.totalDeduction).toEqual(189.59)
  })

  it('adding 2 dependent adds to deduction', () => {
    sut.addDependent({ name: 'John Doe', birth: new Date('2000-01-01') })
    sut.addDependent({ name: 'Mary Sue', birth: new Date('2000-01-02') })

    expect(sut.dependents.length).toEqual(2)
    expect(sut.totalDeduction).toEqual(2 * 189.59)
  })

  describe('Exceptions', () => {
    it('BlankLabelException', () => {
      expect(() =>
        sut.addIncome({ label: '', value: 1000 })
      ).toThrow(BlankLabelException)
    })

    it.each([
      [-100],
      [NaN],
      [0],
    ])
      ('InvalidIncomeValueException %p', (value: number) => {
        expect(() =>
          sut.addIncome({ label: 'Salário', value })
        ).toThrow(InvalidIncomeValueException)
      })
  })
})
