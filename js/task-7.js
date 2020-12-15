const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  createTransaction(amount, type) {
    const newTtransaction = {
      id: ~~(Math.random() * 1e8),
      type,
      amount,
    };
    this.transactions.push(newTtransaction);

    return newTtransaction;
  },

  deposit(amount) {
    if (Number.isNaN(amount) || typeof amount !== 'number' || amount <= 0) {
      console.log('некорректно введена сумма');
      return;
    }

    const action = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
  },

  withdraw(amount) {
    if (Number.isNaN(amount) || typeof amount !== 'number' || amount <= 0) {
      console.log('некорректно введена сумма');
      return;
    }

    if (amount > this.balance) {
      console.log(`недостаточно средств, на счету ${this.balance} юнитов`);
      return;
    }
    const action = this.createTransaction(amount, Transaction.WITHDRAW);

    this.balance -= amount;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  getTransactionTotal(type) {
    let total = 0;

    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

const depositAmountRef = document.querySelector('input[id = "deposit"]');

const depositButtonRef = document
  .querySelector('.add_units_btn')
  .addEventListener('click', () => {
    console.log(`вносится ${depositAmountRef.value} юнитов`);
    const fn = account.deposit(Number(depositAmountRef.value));
  });

const withdrawAmountRef = document.querySelector('input[id = "withdraw"]');

const withdrawButtonRef = document
  .querySelector('.reduce_units_btn')
  .addEventListener('click', () => {
    console.log(`снимается ${withdrawAmountRef.value} юнитов`);
    const fn = account.withdraw(Number(withdrawAmountRef.value));
  });

const balanceButtonRef = document
  .querySelector('.get_balance_btn')
  .addEventListener('click', () => {
    console.log(`текущий баланс ${account.getBalance()} юнитов`);
  });
