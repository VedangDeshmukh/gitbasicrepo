import { test, expect, chromium, Browser,Page } from "@playwright/test";



//test() ---> function , browser is load when function is execuate by default configured browser in playwright.config.ts
//test function accepts summary and arrow function

//page ---> custom fecture
// async ()---> async arrow function 


// Test By Build in custom fecture

// test('my first test cases', async({page})=>{
//             await page.goto('https://www.google.com')
// })


//Another way of writing a test

test('my first test cases', async({})=>{
           let browser:Browser =  await chromium.launch({headless:false, channel:'chrome'})
           let page:Page = await browser.newPage();
            await page.goto('https://www.google.com')
})

