import { Deduction, Dependent, Income, IncomeTaxCalculator } from '../calculator'
import { BlankLabelException, InvalidIncomeValueException } from '../exceptions'

let sut: IncomeTaxCalculator
const REAIS_PER_DEPENDENT = IncomeTaxCalculator.REAIS_PER_DEPENDENT

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

  it.each([
    [1 * REAIS_PER_DEPENDENT, [
      { name: 'John Doe', birth: new Date('2000-01-01') }]],
    [2 * REAIS_PER_DEPENDENT, [
      { name: 'John Doe', birth: new Date('2000-01-01') },
      { name: 'Mary Sue', birth: new Date('2000-01-02') }]],
    [3 * REAIS_PER_DEPENDENT, [
      { name: 'John Doe', birth: new Date('2000-01-01') },
      { name: 'John Foe', birth: new Date('2000-01-10') },
      { name: 'Mary Sue', birth: new Date('2000-01-02') }]],
  ])
    ('adding dependents adds to deduction', (dependentsCost: number, dependents: Dependent[]) => {
      dependents.forEach(d => sut.addDependent(d))

      expect(sut.dependents.length).toEqual(dependents.length)
      expect(sut.totalDeduction).toBeCloseTo(dependentsCost)
    })


  it.each([
    [1000, [1000, 1000], [1000]],
    [2500, [3000], [500]],
  ])
    ('basis = total income - total deduction', (expectedBasis: number, incomes: number[], deductions: number[]) => {
      incomes.forEach((value) => sut.addIncome({ label: 'label', value }))
      deductions.forEach((value) => sut.addDeduction({ label: 'label', value }))

      expect(sut.getBasis()).toBeCloseTo(expectedBasis)
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
