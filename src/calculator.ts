interface Income {
  label: string
  value: number
}

class IncomeTaxCalculator {
  totalIncome: number = 0
  incomes: Income[] = []

  addIncome(income: Income) {
    this.totalIncome += income.value
    this.incomes.push(income)
  }

  getTotalIncome() {
    return this.totalIncome
  }
}


export type { Income }
export { IncomeTaxCalculator }