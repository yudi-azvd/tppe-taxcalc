class IncomeTaxCalculator {
  totalIncome: number = 0
  incomes: { label: string, value: number }[] = []

  addIncome(income: { label: string, value: number }) {
    this.totalIncome += income.value
    this.incomes.push(income)
  }

  getTotalIncome() {
    return this.totalIncome
  }
}


export { IncomeTaxCalculator }