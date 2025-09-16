const {test, expect } = require('@playwright/test')
const DropDownPage = require('../pages/dropdownPage')
const LoginPage = require('../pages/loginPage')

// test('Test 1 select drop down and multi select', async({page})=>{

//     const dropdownPage = new DropDownPage(page)
//     const loginPage = new LoginPage(page)
//     await loginPage.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')

//     await dropdownPage.selectDropdown(2)

//     await dropdownPage.multiSelect(3,'Texas')
// })

test('Test 2 select Tree Select', async({page})=>{

    const dropdownPage = new DropDownPage(page)
    const loginPage = new LoginPage(page)
    await loginPage.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo')

    await dropdownPage.treeSelect('Denmark')

})