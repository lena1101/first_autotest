import { by, element, ElementFinder } from "protractor";

export class HeaderRepository {
    readonly headerByClass: ElementFinder = element(by.css(".g-top"));    
    readonly headerByTag: ElementFinder = element(by.tagName("header"));
}