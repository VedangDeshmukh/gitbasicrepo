import{test,Page,expect, Locator} from '@playwright/test'


test('test to login to application',async({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce')
    await page.locator('[data-test="login-button"]').click();

    await page.waitForTimeout(10000);

    await page.context().storageState({path:'sessions/loginsession.json'});

})