import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: "income" | "outcome";
}

class TransactionsRepository {
  private transactions: Transaction[];
  private balance: Balance;

  constructor() {
    this.transactions = [];
    this.balance = { income: 0, outcome: 0, total: 0 };
  }

  public all(): Transaction[] {
    // TODO

    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    let initialValueIncome = 0;
    let initialValueOutcome = 0;

    const income = this.transactions
      .filter(({ type }) => type === 'income')
      .reduce((accumulator, currentValue) => accumulator + currentValue.value
        , initialValueIncome
      );

    const outcome = this.transactions
      .filter(({ type }) => type === 'outcome')
      .reduce((acumulator, currentValue) => acumulator + currentValue.value
        , initialValueOutcome)

    const total = income - outcome;
    const balance = { income, outcome, total }

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({
      title, value, type
    });


    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
