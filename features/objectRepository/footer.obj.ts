import { by, element, ElementFinder } from "protractor";

export class FooterRepository {
    readonly titleByTag: ElementFinder = element(by.tagName('h1'));
    readonly vacanciesByText: ElementFinder = element(by.cssContainingText('.footer-style__link_primary', 'Вакансии'));
}