# Express-bank-app

About A Fictional bank Application that leverages a third party API to get location and weather of a user and behaves like a SPA. User Creates an account and makes an initial deposit. More description would be given in Read me file

<!-- ![Design preview for Express bank](src\assets\Express1.png) -->

# Home page

Homepage for Express bank app which also shows the type of **CREDIT** CARD you will be getting when you bank with us, Use Express today and bank seamlessly
<img src="src\assets\Express1.png" alt="project screenshot">

# Login

This is the login modal for Express bank to login into your account, some dummy accounts have been set up to show you our customer how your dashboard would look like and the information you can use to access those accounts

- username: prosper, password:1988
- username: adeniyi, passowrd:1997
- username:arogbonlo, passowrd:1998
- username: ore-aruwaji, password:1998

<img src="src\assets\Express2.png" alt="project screenshot">

# Sign up

Sign up Page lets you sign up to be able to access our services, steps for signing up for our services are listed below

- Name: Username you wish to use for your account, LastName && FisrtName
  Example: Ogunleye Oluwafemi
- Password: Since this is just a mockup, your password should be Min (4) and Max (8) characters, and they should be numbers e.g (1,2,3,4)
- Username: Upon signing up with Express, your username will be validated by our backend and be set as your LASTNAME you provided but with small letters (NB: Not capital letters but small letters) e.g Signing up with a username like "Oguleye Oluwafemi", your username will be "ogunleye"
- Interest: Your interest should be between 1% and 2%, like i said this is just a mock up, the interest serves as a means for you to request for loans from the bank and be provided based on your balance banking with the bank, since the backend is more of a logical CSR (Client Side Rendering)
- Deposit: I will reiterate, this is just a mock up of logical CSR so please deposit something like at most 20000, do not worry or be scared we will take care of what currency your deposit will be based on the International Locality or Locality you provide in a input field you will be filling.
- Currency: This determines what currency your deposit will be in e.g (NGN, USD, EUR, GBP, CHF, CAD, AUD/NZD), based on the information supplied in the input field.
- Excrate: Simply spells out Exchange rate, had to implement this type of logic based on how Express bank works in which you can send money from one your account whose currency is in either of the currencies you supplied to another account with another currency. Min (10) && Max (50) for you opening an account.
- Locale: Locality for your account, use locales like (en-NG, en-US, en-Uk)
  <img src="src\assets\Express3.png" alt="project screenshot">

# Dashboard

Shows the details of your account and transactions you can carry out on your account such as loans, transfer and closing your account
<img src="src\assets\Express4.png" alt="project screenshot">
