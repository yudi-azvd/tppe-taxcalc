import { BlankLabelException, BlankNameException, InvalidDeductionValueException, InvalidIncomeValueException, } from "./exceptions"

interface Income {
  label: string
  value: number
}

interface Deduction {
  label: string
  value: number
}

interface Dependent {
  name: string
  birth: Date
}

class IncomeTaxCalculator {
  static REAIS_PER_DEPENDENT = 189.59
  totalIncome = 0
  incomes: Income[] = []
  deductions: Deduction[] = []
  dependents: Dependent[] = []
  totalDeduction = 0
  private readonly bands = [1903.98, 922.67, 924.40, 913.63, 0]
  private readonly rates = [0.0, 0.075, .15, .225, .275]
  private readonly FIRST_BAND = this.bands[0]

  addIncome(income: Income) {
    if (income.label.length === 0)
      throw new BlankLabelException()

    if (income.value <= 0 || isNaN(income.value))
      throw new InvalidIncomeValueException()

    this.totalIncome += income.value
    this.incomes.push(income)
  }

  addDeduction({ label, value }: Deduction) {
    if (label.length === 0)
      throw new BlankLabelException()

    if (value <= 0 || isNaN(value))
      throw new InvalidDeductionValueException()

    this.deductions.push({ label, value })
    this.totalDeduction += value
  }

  addDependent({ name, birth }: Dependent) {
    if (name.length === 0)
      throw new BlankNameException()

    this.dependents.push({ name, birth })
    this.totalDeduction += IncomeTaxCalculator.REAIS_PER_DEPENDENT
  }

  getTotalIncome() {
    return this.totalIncome
  }

  getBasis() {
    return this.totalIncome - this.totalDeduction
  }

  getEffectiveRate() {
    const basis = this.getBasis()
    if (basis <= this.FIRST_BAND)
      return 0

    const calculator = new TaxesPerBandsCalculator(this.rates, this.bands)
    const taxes = calculator.run(basis)
    const totalTax = taxes.reduce((acc, next) => acc + next, 0)
    const effectiveRate = totalTax / this.totalIncome * 100
    return effectiveRate
  }

  run() {
    const basis = this.getBasis()

    const calculator = new TaxesPerBandsCalculator(this.rates, this.bands)
    const taxes = calculator.run(basis)
    const totalTax = taxes.reduce((acc, next) => acc + next, 0)
    const effectiveRate = totalTax / this.totalIncome * 100
    return {
      effectiveRate,
      taxes,
      totalTax
    }
  }
}


class TaxesPerBandsCalculator {
  constructor(
    private readonly rates: number[],
    private readonly bands: number[],
  ) { }

  run(basis: number) {
    let i, restInBand = basis, taxInBand = 0
    const taxes = Array<number>(5).fill(0)

    if (basis <= this.bands[0])
      return taxes

    for (i = 0; i < this.bands.length - 1; i++) {
      restInBand -= this.bands[i]
      taxInBand = this.bands[i] * this.rates[i]
      taxes[i] = taxInBand
      if (restInBand - this.bands[i + 1] <= 0) {
        i++
        break
      }
    }

    taxInBand = restInBand * this.rates[i]
    taxes[i] = taxInBand
    return taxes
  }
}


export type { Income, Deduction, Dependent }
export { IncomeTaxCalculator }