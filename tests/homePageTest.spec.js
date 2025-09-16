const {test,expect} = require('@playwright/test')
const LoginPage = require('../pages/loginPage')
const HomePage = require('../pages/homePage')


test('Home Page Test',async({page})=>{

    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)

    await loginPage.goto();
    await loginPage.login('Demo1.Tester@test.test', 'Tester@123');

    await homePage.clickExcellentCheckBox()
    await homePage.verifyExcellentIsChecked()
    
    await homePage.ClickOnBookSTab()
    
    
    
})