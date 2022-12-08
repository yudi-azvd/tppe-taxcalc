import { IncomeTaxCalculator } from '../calculator'

describe('IncomeTaxCalculator', () => {
  it('adiciona 1 rendimento', () => {
    let sut = new IncomeTaxCalculator()
    sut.addIncome({ label: 'Salário', value: 1000 })

    expect(sut.totalIncome).toEqual(1000)
  })

  it('adiciona 2 rendimentos', () => {
    let sut = new IncomeTaxCalculator()

    sut.addIncome({ label: 'Salário', value: 1000 })
    sut.addIncome({ label: 'Bolsa', value: 500 })

    expect(sut.totalIncome).toEqual(1500)
  })

  it('adiciona 3 rendimentos', () => {
    let sut = new IncomeTaxCalculator()

    sut.addIncome({ label: 'Salário', value: 1000 })
    sut.addIncome({ label: 'Bolsa', value: 500 })
    sut.addIncome({ label: 'Bolsa', value: 500 })

    expect(sut.totalIncome).toEqual(2000)
  })
})
