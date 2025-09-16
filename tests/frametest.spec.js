const {test, expect} = require('@playwright/test')
const Frame = require('../pages/frame')
const LoginPage = require('../pages/loginPage')


test('Test handle frames',async({page})=>{

    const loginPage = new LoginPage(page)
    const frame = new Frame(page)
    await loginPage.goto('https://ui.vision/demo/webtest/frames/')
    const iframe = await frame.frameHandler('[src="frame_1.html"]')
    await iframe.locator("//input[@name='mytext1']").fill('hello world')  

})

// test.only('Test handle nested frames',async({page})=>{

//     const loginPage = new LoginPage(page)
//     const frame = new Frame(page)
//     await loginPage.goto('https://ui.vision/demo/webtest/frames/')
//     const iframe = await frame.frameHandler('[src="frame_2.html"]', '[src="frame_3.html"]')
//     await iframe.locator("div[id='i6'] div[class='AB7Lab Id5V1']").check()

// })
// test.only('Handled Nested frame', async({page})=>{

//     const loginPage = new LoginPage(page)
//     const iFrame = new Frame(page)
//     await loginPage.goto('https://ui.vision/demo/webtest/frames/')
//     const nestedFrame = await iFrame.nestedFrameHandlers('[src="frame_3.html"]')

//     const childFrames = nestedFrame.childFrames()
//     // console.log('Child frame count: ', childFrames)
//     await childFrames[0].locator("div[id='i6'] div[class='AB7Lab Id5V1']").check()
    
//     page.waitForTimeout(5000)
    

// })