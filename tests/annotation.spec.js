const {test, expect} = require('@playwright/test')

// test('test 1 ', async({page, browserName})=>{
//     console.log("Test 1")
//     if (browserName ==='chromium')
//     {
//         test.skip()
//     }
// })

test('test 2 ', async({})=>{
    test.fixme()
    console.log("Test 2")
   
})

test('test 3 ', async({page})=>{
    test.slow() //it will automatically triple the current timeout
    await page.goto('')
    console.log("Test 3")
   
})

test('test 5 ', async({page})=>{
    test.setTimeout(5000) //set th etimeout
    await page.goto('')
    console.log("Test 5")
   
})

test('test 4 ', async({})=>{
    test.fail()
    console.log("Test 4")
   
})