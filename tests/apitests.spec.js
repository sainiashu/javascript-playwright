const {test, expect} = require ('@playwright/test')

var userId

test('Get User 1 ', async({request})=>{
    const response =  await request.get('https://reqres.in/api/users?page=2')
    console.log("response ", response.json())

    expect(response.status()).toBe(200)
})

test('Post  2 ', async({request})=>{

   const response=  await request.post('https://reqres.in/api/users',{
        data:{
            "name": "John",
            "job": "tester"
        },
        headers:{
            "Accept": "application/json"
        }
    })


    console.log("response: ", response.json())
    expect(response.status()).toBe(201)// fortest data creation

    const res = await response.json()
    userId=res.id
})

test('Update  3 ', async({request})=>{

   const response=  await request.post('https://reqres.in/api/users'+ userId,{
        data:{
            "name": "John",
            "job": "engineer"
        },
        headers:{
            "Accept": "application/json"
        }
    })


    console.log("response: ", response.json())
    expect(response.status()).toBe(200)// fortest update user creation
    
})
    
test('Delete  4 ', async({request})=>{
    const response= await request.delete('https://reqres.in/api/users/2')

    expect(response.status()).toBe(200)
    console.log("Test 4")
})