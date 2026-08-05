const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage.js');
require('../hooks/hooks.js');

Given('I navigate to {string}', async function (url) {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.goto(url);
});

When('I enter my email {string}', async function (email) {
    await this.loginPage.enterEmail(email);
});

When('I enter my password {string}', async function (password) {
    await this.loginPage.enterPassword(password);
});

When('I click the login button', async function () {
    await this.loginPage.clickLogin();
});

Then('I should see {string}', async function (message) {
    await expect(this.loginPage.getHomeLocator()).toHaveText(message);
});

Then('I should see the message {string}', async function (expectedMessage) {

    const expectedMessageArray = expectedMessage.split(',').map(msg => msg.trim());

    for (const msg of expectedMessageArray) {
        if (msg === 'Password is required' || msg === 'Email address is required') {
            await expect(this.loginPage.getMessageLocator(msg)).toBeVisible();
        } else {
            const alertMessage = await this.loginPage.getAlertMessageLocator().textContent();
            expect(alertMessage).toContain(msg);
        }
    }
});