import { by, element, ElementFinder } from "protractor";

export class FooterRepository {
    readonly footerByClass: ElementFinder = element(by.css(".g-bottom"));
    readonly footerByTag: ElementFinder = element(by.tagName("footer"));
}