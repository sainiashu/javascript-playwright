import{test, expect} from '@playwright/test'

test.beforeAll( async({})=>{
    console.log('Before All.......s')
})

test.afterAll( async({})=>{
    console.log('After All.......s')
})

test.beforeEach( async({})=>{
    console.log('Before each.......s')
})

test.afterEach( async({})=>{
    console.log('After each.......s')
})


test.describe.skip('Group 1',()=>{

    test('test 1',async({})=>{
    console.log('test 1....')
})

test('test 2',async({})=>{
    console.log('test 2....')
})

})

test.describe('Group 2',()=>{

test('test 3',async({})=>{
    console.log('test 3....')
})

test('test 4',async({})=>{
    console.log('test 4....')
})

})



