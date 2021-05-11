import { browser, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { FooterRepository } from "../objectRepository/footer.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class FooterPage {
    
    footerRepo: FooterRepository;

    constructor() {
        this.footerRepo = new FooterRepository;
    }
    
    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    public navigateToOnliner() {
        browser.navigate().to(browser.params.onlinerByURL);
    }

    public async clickVacancies() {
        await this.footerRepo.vacanciesByText.click();
    }

    public async checkTitleByTag() {
       await browser.wait(ExpectedConditions.visibilityOf(await this.footerRepo.titleByTag), defaultTimeout, "Title wasn't loaded or has incorrect class");
    }

}