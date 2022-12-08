import { IncomeTaxCalculator } from '../calculator'

let sut: IncomeTaxCalculator

describe('IncomeTaxCalculator', () => {
  beforeEach(() => {
    sut = new IncomeTaxCalculator()
  })

  it('adiciona 1 rendimento', () => {
    sut.addIncome({ label: 'Salário', value: 1000 })

    expect(sut.totalIncome).toEqual(1000)
  })

  it('adiciona 2 rendimentos', () => {
    sut.addIncome({ label: 'Salário', value: 1000 })
    sut.addIncome({ label: 'Bolsa', value: 500 })

    expect(sut.totalIncome).toEqual(1500)
  })

  it('adiciona 3 rendimentos', () => {
    sut.addIncome({ label: 'Salário', value: 1000 })
    sut.addIncome({ label: 'Bolsa', value: 500 })
    sut.addIncome({ label: 'Pensão', value: 500 })

    expect(sut.totalIncome).toEqual(2000)
  })
})
