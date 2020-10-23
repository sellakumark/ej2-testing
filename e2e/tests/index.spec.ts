import { browser, element, By, protractor } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from './Helper/helper.spec';
import 'jasmine';

/**
 * E2E Spec for Day View
 */

const sleepTime: number = 1000;

describe('Day View', () => {
    it('Date Navigation', async (done: DoneFn) => {
        Helper.loadAndWait('/demos/index-views.html', Helper.schedule);
        await browser.actions().click(element(Helper.day)).perform();
        await element(By.xpath('//*[@id="e-tbr-btn_2"]')).getText().then((dateFormat: string) => {
            expect(dateFormat).toEqual('November 15, 2017');
            browser.sleep(sleepTime);
            browser.compareScreen(element(Helper.schedule), 'd-date-navigation');
            done();
        });
        await browser.actions().click(element(By.className('e-icon-prev'))).perform();
        await element(By.xpath('//*[@id="e-tbr-btn_2"]')).getText().then((dateFormat: string) => {
            expect(dateFormat).toEqual('November 14, 2017');
            browser.sleep(sleepTime);
            browser.compareScreen(element(Helper.schedule), 'd-date-navigation-prev');
            done();
        });
        await browser.actions().click(element(By.className('e-icon-next'))).perform();
        await element(By.xpath('//*[@id="e-tbr-btn_2"]')).getText().then((dateFormat: string) => {
            expect(dateFormat).toEqual('November 15, 2017');
            browser.sleep(sleepTime);
            browser.compareScreen(element(Helper.schedule), 'd-date-navigation-next');
            done();
        });
    });
});
