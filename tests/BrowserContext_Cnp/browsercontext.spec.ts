import { Browser, BrowserContext, Page,chromium,expect,test } from "@playwright/test";




// Browser Context :
        //in this each session is running in seperate isolated browser each page is running in same browser but on different context
        // Browser can have multiple context and each context have its seperate page
        // vai this feature of playwright multi user testing is possible



test("browsr context concept test", async({})=>{
    let browser:Browser = await chromium.launch({channel:'chrome',headless:false});
    let browsercontext1:BrowserContext = await  browser.newContext();
    let browsercontext2: BrowserContext = await browser.newContext();

    let page1:Page = await browsercontext1.newPage();
    let page2:Page = await browsercontext2.newPage();

    await page1.goto('');
    await page2.goto('')

    //page1.login()
    //page2.login()
})        
