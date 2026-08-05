// @ts-check

class LoginPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.emailInput = page.getByTestId('login-email');
        this.passwordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-submit');
        this.homeElement = page.getByTestId('home');
        this.alertMessage = page.getByTestId('alert-message');
    }

    /**
     * @param {string} url
     */
    async goto(url) {
        await this.page.goto(url);
    }

    /**
     * @param {string} email
     */
    async enterEmail(email) {
        if (email) {
            await this.emailInput.fill(email);
        }
    }

    /**
     * @param {string} password
     */
    async enterPassword(password) {
        if (password) {
            await this.passwordInput.fill(password);
        }
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    getHomeLocator() {
        return this.homeElement;
    }

    getAlertMessageLocator() {
        return this.alertMessage;
    }

    /**
     * @param {string} text
     */
    getMessageLocator(text) {
        return this.page.getByText(text);
    }
}

module.exports = { LoginPage };