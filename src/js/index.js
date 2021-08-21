'use strict';
require('regenerator-runtime/runtime');
import sass from '../sass/main.scss';
import { tabbedComponent } from './tabbedcomponent';
import { getLocation } from './api';
import * as apis from './api';

// Accounts data
const accounts1 = {
  owner: 'Ore-Aruwaji Olotuntola',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1998,
  movementDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-06-29T17:01:17.194Z',
    '2021-07-02T10:36:17.929Z',
    '2021-07-01T10:51:36.790Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
  exc: 10,
};
const accounts2 = {
  owner: 'Arobngolo Samuel',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30, 900],
  interestRate: 1.5,
  pin: 1998,
  movementDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
  exc: 190,
};
const accounts3 = {
  owner: 'Adeniyi Mayokun',
  movements: [5000, 3100, -150, -3210, -1000, 8500, -30],
  interestRate: 1.4,
  pin: 1997,
  movementDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-06-29T17:01:17.194Z',
    '2021-07-02T10:36:17.929Z',
  ],
  currency: 'USD',
  locale: 'en-US',
  exc: 190,
};
const accounts4 = {
  owner: 'Prosper Otemuyiwa',
  movements: [5000, 3100, -150, -3210, -1000, 8500, -30],
  interestRate: 1.4,
  pin: 1988,
  movementDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
  ],
  currency: 'USD',
  locale: 'en-US',
  exc: 190,
};
// Accounts Array
const accounts = [accounts1, accounts2, accounts3, accounts4];

// console.log(accounts);

const ELS_pages = document.querySelectorAll('.page');
const ELS_buttons = document.querySelectorAll('[data-page]');

// console.log(ELS_pages);
// console.log(ELS_buttons);
const goToPage = (id) => {
  ELS_pages.forEach((EL, i) => {
    // console.log(EL.id);
    // console.log(`${i} : ${EL.id}`);
    // console.log(id);
    // EL.classList.toggle("u-none", EL.id !== id);
    if (EL.id === id) {
      setTimeout(() => {
        EL.classList.remove('u-none');
        setTimeout(() => {
          EL.style.opacity = 1;
        }, 100);
      }, 2000);
    } else {
      EL.style.opacity = 0;
      setTimeout(() => {
        EL.classList.add('u-none');
      }, 2000);
    }
  });
};
// goToPage("page-main");
ELS_buttons.forEach((EL) =>
  EL.addEventListener('click', () => {
    goToPage(EL.dataset.page);
  })
);

// Dealing with the login form
// const myForm = document.querySelector('#form-id');
// const name = document.querySelector('#name');
// const pin = document.querySelector('#pin');
// const message = 'you need to fill it';
// myForm.addEventListener('submit', function (e) {
//   e.preventDefault();
//   if (name.value !== '' && pin.value !== '') {
//     console.log('white');
//     // submit.dataset.page = settings;
//     // setTimeout(goToPage('page-dashboard'), 2000);
//     goToPage('page-dashboard');
//   } else {
//     e.preventDefault();
//     // console.log("outh");
//   }
// });

// const name = document.querySelector("#name");
// const pin = document.querySelector("#pin");
// myForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (name.value !== "" && pin.value !== "") {
//     console.log("white");
//     // submit.dataset.page = settings;
//     goToPage(submit);
//     // submit.addEventListener("click", function () {
//     //   goToPage(submit);
//     // });
//   } else {
//     alert("you need to input");
//   }
// });
// const ELS_pages = document.querySelectorAll(".page");
// const ELS_buttons = document.querySelectorAll("[data-page]");

// console.log(ELS_pages);
// const submit = document.querySelector(".submit");
// const goToPage = (id) => {
//   ELS_pages.forEach((EL) => EL.classList.toggle("u-none", EL.id !== id));
// };

// ELS_buttons.forEach((EL) =>
//   EL.addEventListener("click", () => {
//     console.log(EL.dataset.page);
//     goToPage(EL.dataset.page);
//   })
// );
// const myForm = document.querySelector("#form-id");
// const name = document.querySelector("#name");
// const pin = document.querySelector("#pin");

// // function validateForm() {
// //   var x = document.forms["myForm"]["fname"].value;
// //   var x1 = document.forms["myForm"]["fname1"].value;
// //   if (x == "" || x == null || x1 == "" || x1 == null) {
// //     return false;
// //   }
// // }
// const form = document.querySelector("#form-id");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var x = document.forms["myForm"]["fname"].value;
//   var x1 = document.forms["myForm"]["fname1"].value;
//   if (x == "" || x == null || x1 == "" || x1 == null) {
//     return false;
//   } else {
//     submit.addEventListener("click", function () {
//       goToPage(submit);
//     });
//   }
// });
// Dealing with pusing the new account to the array
const submitting = document.querySelector('.submitting');
const password = document.querySelector('#pins');
const nam = document.querySelector('#names');
const username = document.querySelector('#user');
const interest = document.querySelector('#rate');
const deposit = document.querySelector('#deposit');
// const date = document.querySelector('#date');
const denomination = document.querySelector('#currency');
const exchange = document.querySelector('#exchange');
const locale = document.querySelector('#locale');

// let account = [];
// console.log(account);

const addAccount = () => {
  // movements.push(deposit.value);
  // let dates = date.value;
  // var isoDate = new Date(dates).toISOString();
  // This is for the ISO dates so as to get the current date then convert it to ISO format and pass it to the movement dates array
  const isoDate = new Date().toISOString();
  let deposits = deposit.value;
  let movementDates = [];
  let movements = [];
  movements.push(+deposits);
  movementDates.push(isoDate);
  let accountss = {
    owner: nam.value,
    movements,
    interestRate: +interest.value,
    username: username.value,
    pin: +password.value,
    movementDates,
    currency: denomination.value,
    locale: locale.value,
    exc: +exchange.value,
  };
  accounts.push(accountss);
  // console.log(accounts);
  localStorage.setItem('details', JSON.stringify(accountss));
};
// Getting UI element to change text content
const registered = document.querySelector('.sign-text');
submitting.addEventListener('click', function (e) {
  // alert(
  //   'you have successfully opened an account with express kindly go back to our home page and login 🚀 '
  // );
  registered.textContent = `You have successfully opened an account with express kindly go back to
  our home page and login 🚀`;
  e.preventDefault();
  rem();
  addAccount();
});

// Remove all values function after submission
function rem() {
  locale.value = '';
  exchange.value = '';
  denomination.value = '';
  password.value = '';
  username.value = '';
  interest.value = '';
  deposit.value = '';
}
tabbedComponent();
apis.weatherApi();
apis.locationApi();
// console.log(accounts.accounts1);

// Login modal functionality
const modals = document.querySelector('#login');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.btn-close-modal');
const overlay = document.querySelector('.overlay');
function openModal(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModals(e) {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
// modals.addEventListener('click', openModal);
modals.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModals);
overlay.addEventListener('click', closeModals);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modals.classList.contains('hidden')) {
    closeModals();
  }
});

// Account component
// const button = document.querySelector('#button');
// button.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log(this);
//   accounts.pushAccount();
//   alert(
//     'you have succesfully opened an account, kindly go to our home page to login, welcome to the express family 🚀 '
//   );
//   console.log(accounts.accounts);
// });

// display.displayMovements();

// Formatter for dates and currency
function formatDate(date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat(locale, options).format(date);
}

function currency(val, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(val);
}

// Movements summary and display and its UI elemets
const containerMovement = document.querySelector(
  '.dashboard-main-account-movement'
);
function displayMovements(acc) {
  containerMovement.innerHTML = '';
  const movs = acc.movements;

  movs.forEach((mov, i) => {
    const date = new Date(acc.movementDates[i]);
    const displayDate = formatDate(date);
    const formattedMov = currency(mov, acc.locale, acc.currency);
    const type = mov > 0 ? `Deposit` : `Withdrawal`;
    const html = `
    <div class="dashboard-main-account-movement-row">
    <div
      class="dashboard main-account-movement-type movement-type-${type}"
    >
      ${type}
    </div>
    <div class="dashboard main-account-movement-date">
      ${displayDate}
    </div>
    <div class="dashboard main-account-movement-value">
      ${formattedMov}
    </div>
  </div>
    `;
    containerMovement.insertAdjacentHTML('afterbegin', html);
  });
}
// displayMovements(accounts4);
// Ui ELEMETS FOR BALANCE
const labelBalance = document.querySelector('.dashboard-body-account-value');
const labelSumIn = document.querySelector('.summary-value-in');
const labelSumOut = document.querySelector('.summary-value-out');
const labelSumInterest = document.querySelector('.summary-value-interest');
function displayBalance(accs) {
  accs.balance = accs.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = currency(accs.balance, accs.locale, accs.currency);
}

function displaySummary(acc) {
  // Money in the account
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = currency(incomes, acc.locale, acc.currency);

  // Money outside the account
  const outcome = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = currency(
    Math.abs(outcome),
    acc.locale,
    acc.currency
  );

  // Calculating the interest
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .reduce((acc, interests) => acc + interests, 0);
  labelSumInterest.textContent = currency(interest, acc.locale, acc.currency);
}

// Function to create username of account holder

function createUser(accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner.toLowerCase().split(' ')[0];
  });
  // console.log(accs.username);
  // console.log(accs.username);
}

createUser(accounts);

function ui(acc) {
  displayMovements(acc);

  displayBalance(acc);

  displaySummary(acc);
}

// Dealing with the timer and current account
let currentAccount, timer;

// Function for the timer
function startTimer() {
  const tick = () => {
    if (time === 0) {
      goToPage('page-main');
    }
    time--;
  };
  let time = 400;
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
}
// UI ELEMENTS AGAIN
const btnLogin = document.querySelector('.submit');
const btnTransfer = document.querySelector('.transfer');
const btnLoan = document.querySelector('.loan');
const btnClose = document.querySelector('.close');
const loginInput = document.querySelector('#name');
const loginPin = document.querySelector('#pin');
const accountOwner = document.querySelector('.user');
const accountDate = document.querySelector('.date');
const accountBalance = document.querySelector(
  '.dashboard-body-account-balance'
);

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const mins = currentTime.getMinutes();
  let greet = '';
  if (hours >= 5 && hours <= 11) {
    greet = 'Morning';
  } else if (hours >= 12 && hours <= 17) {
    greet = 'Afternoon';
  } else {
    greet = 'evening';
  }
  const greeting = (greets.textContent = `Good ${greet}`);
  currentAccount = accounts.find((acc) => acc.username === loginInput.value);
  // console.log(currentAccount);

  if (currentAccount?.pin === +loginPin.value) {
    accountOwner.textContent = `${greeting} ${
      currentAccount.owner.split(' ')[0]
    }`;
    accountBalance.textContent = `Balance for ${currentAccount.username}`;
    const date = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      // weekday: 'long',
    };
    accountDate.textContent = Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(date);
    ui(currentAccount);
    goToPage('page-dashboard');
  } else {
    alert('kindly provide the right details');
    setTimeout(function () {
      goToPage('page-main');
    }, 10);
  }

  if (timer) {
    clearInterval(timer);
  }
  timer = startTimer();
});

// UI elements for transfer
const receiver = document.querySelector('#transfer');
// console.log(receiver);
const amounts = document.querySelector('#amount');
btnTransfer.addEventListener('click', function (e) {
  // console.log(receiver.value);
  e.preventDefault();
  const receiverAcc = accounts.find((acc) => acc.username === receiver.value);
  // console.log(receiverAcc);
  const amount = +amounts.value * receiverAcc.exc;
  // console.log(amount);
  amounts.value = receiver.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementDates.push(new Date().toISOString());
    receiverAcc.movementDates.push(new Date().toISOString());
    ui(currentAccount);
    clearInterval(timer);
    timer = startTimer();
  }
});

// Dealing with the Loan Element
// UI eLEMENTS FOR the loan
const loanValue = document.querySelector('#loans');
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(loanValue.value);
  if (
    amount > 0 &&
    currentAccount?.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementDates.push(new Date().toISOString());
      ui(currentAccount);
      clearInterval(timer);
      timer = startTimer();
    }, 2500);
  }
  loanValue.value = '';
});

// Dealing with the function to close your account
// UI Elements for Loan
const closeName = document.querySelector('#closing');
const closePin = document.querySelector('#closingpassword');
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    closeName.value === currentAccount.username &&
    +closePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (account) => account.username === currentAccount.username
    );

    accounts.splice(index, 1);
    alert(
      'Your account has been closed, kindly reachout to the bank if you feel this was a mistake'
    );
    setTimeout(() => {
      goToPage('page-main');
    }, 2500);
  }
  closeName.value = closePin.value = '';
});

// Time function
const greets = document.querySelector('.greet');
const timing = document.querySelector('.body-time-current');
function getTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const mins = currentTime.getMinutes();
  let greet = '';
  if (hours >= 5 && hours <= 11) {
    greet = 'Morning';
  } else if (hours >= 12 && hours <= 17) {
    greet = 'Afternoon';
  } else {
    greet = 'evening';
  }
  greets.textContent = `Good ${greet}`;

  if (mins < 10) {
    mins = '0' + mins;
  }

  timing.textContent = `${hours}:${mins}`;

  let interval = (60 - new Date().getSeconds()) * 1000 + 5;
  setTimeout(getTime, interval);
}
getTime();

// Fixed a bug i had to find for some hours
const hide = document.querySelector('.hide-in');
hide.addEventListener('click', function (e) {
  e.preventDefault();
});
