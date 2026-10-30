import { Page,test,expect } from "@playwright/test";


test.use({storageState:'sessions/loginsession.json'})

//or directly store inside the Use section in playwrightconfig.ts

test('opening the product page without login again', async ({page})=>{
    await page.goto('https://www.saucedemo.com/inventory.html')
    let header:String = await page.locator('[data-test="title"]').innerText();
    console.log('Header:',header)
    expect(header).toBe('Products')
    await page.pause()
})