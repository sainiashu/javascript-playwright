const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const data = require('../utils/testData');
const homePage = require('../pages/homePage');
const HomePage = require('../pages/homePage');


test('login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.goto();
  await loginPage.login('Demo1.Tester@test.test', 'Tester@123');
 
  const titleText = await homePage.getTitlePageText();
  console.log(titleText);
  
  expect(titleText).toContain('Tricentis')

});
