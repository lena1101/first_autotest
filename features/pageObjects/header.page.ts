import { browser, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { HeaderRepository } from "../objectRepository/header.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class HeaderPage {
    
    headerRepo: HeaderRepository;
    
    constructor() {
        this.headerRepo = new HeaderRepository;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    public navigateToOnliner() {
        browser.navigate().to(browser.params.onlinerByURL);
    }

    public async clickServices() {
        await this.headerRepo.servicesByText.click();
    }

    public async checkTitleByClass() {
       await browser.wait(ExpectedConditions.visibilityOf(await this.headerRepo.titleByClass), defaultTimeout, "Title wasn't loaded or has incorrect class");
    }

 
}