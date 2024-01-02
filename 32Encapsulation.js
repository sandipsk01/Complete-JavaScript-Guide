// Encapsulation enhaces code modularity and organization by grouping related data and operations together promoting information hiding.
// Privated property or methods: #propName / #methName
class ExpenseTracker{
  #expenses;
  constructor(){
    this.#expenses=[];
  };
  
  #addExpense(name, amount, date){
    this.#expenses.push({name, amount, date});
  };

  addNTrack(name, amount, date){
    this.#addExpense(name, amount, date);
    let total = 0;
    for (let expense of this.#expenses) {
      total += expense.amount;
    };
    console.log(total);
  };
}

const tracker = new ExpenseTracker();
tracker.addNTrack("Rent", 1000, "2021-10-01");
tracker.addNTrack("Rent", 2000, "2021-10-01");
