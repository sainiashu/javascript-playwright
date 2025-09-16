const { time } = require("console");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#Email';
    this.passwordInput = '#Password';
    this.loginButton = 'input[value="Log in"]';
  }

  async goto(url) {
    // await this.page.goto('https://demowebshop.tricentis.com/login', {
      await this.page.goto(url, {
      waitUntil: 'domcontentloaded'
    });
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    // await this.page.getByRole('textbox',{name:'Email'}).fill('Demo1.Tester@test.test');
    //  await this.page.getByRole('textbox',{name: 'Password'}).fill('Tester@123')
    await this.page.click(this.loginButton);
     
  }
}

 module.exports = LoginPage; 
