import { BlankLabelException, InvalidIncomeValueException } from "./exceptions"

interface Income {
  label: string
  value: number
}

class IncomeTaxCalculator {
  totalIncome: number = 0
  incomes: Income[] = []

  addIncome(income: Income) {
    if (income.label.length === 0)
      throw new BlankLabelException()

    if (income.value <= 0 || isNaN(income.value))
      throw new InvalidIncomeValueException()

    this.totalIncome += income.value
    this.incomes.push(income)
  }

  getTotalIncome() {
    return this.totalIncome
  }
}


export type { Income }
export { IncomeTaxCalculator }