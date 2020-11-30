const accounts = require('accounts.js')
const actions = require('actions.js')

const webdriver = require('selenium-webdriver')
    By = webdriver.By
    until = webdriver.until

const driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build()


// create list of accounts
// create list of acctions to perform on accounts
// loop through account and perform all actions,
// when finished begin next account. Set timed intervals.
// follow, like, unfollow
driver.get('https://parler.com')

for(let i = 0; i < accounts.users.length; i++){

    // set interval
    // 
}