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
  private bands = [1903.98, 922.67, 924.40, 913.63, 0]
  private rates = [0.0, 0.075, .15, .225, .275]

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
    let effectiveRate = 0.
    let restInBand = this.getBasis()
    let i, tax = 0

    if (restInBand <= this.bands[0])
      return 0

    for (i = 0; i < this.bands.length - 1; i++) {
      restInBand -= this.bands[i]
      tax += this.bands[i] * this.rates[i]

      if (restInBand - this.bands[i + 1] <= 0) {
        i++
        break
      }
    }

    tax += restInBand * this.rates[i]

    effectiveRate = tax / this.totalIncome * 100
    return effectiveRate
  }
}


export type { Income, Deduction, Dependent }
export { IncomeTaxCalculator }