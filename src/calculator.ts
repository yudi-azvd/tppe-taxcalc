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
    return 0.00
  }
}


export type { Income, Deduction, Dependent }
export { IncomeTaxCalculator }