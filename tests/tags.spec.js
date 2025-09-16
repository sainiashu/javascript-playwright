import {test, expect} from '@playwright/test'

test('test 1 @smoke', async({})=>{
    console.log("Test 1")
})

test('test 2 @sanity', async({})=>{
    console.log("Test 2")
})

test('test 3 @regression', async({})=>{
    console.log("Test 3")
})
    
test('test 4 @smoke@regression', async({})=>{
    console.log("Test 4")
})