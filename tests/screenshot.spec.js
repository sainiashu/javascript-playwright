import {test, expect} from '@playwright/test'
import path from 'path';

test.skip('page screenshot',async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/login');
    await page.screenshot({path:'tests/screenshots/'+ Date.now() + 'HomePage.png'})
    
    
})

test.skip('full page screenshot',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/login');
    await page.screenshot({path:'tests/screenshots/'+ Date.now() + 'fullPage.png', fullPage:true})
})


test('element page screenshot',async({page})=>{
 await page.goto('https://demowebshop.tricentis.com/login');
    await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'tests/screenshots/'+ Date.now() + 'elementPage.png'})
})