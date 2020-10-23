import { browser, element, By } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from './Helper/helper.spec';
import 'jasmine';

/**
 * E2E Spec for Day View
 */

const sleepTime: number = 1000;

describe('Day View', () => {
    it('Date Navigation', async () => {
        Helper.loadAndWait('/demos/index.html', Helper.schedule);
        await browser.sleep(sleepTime);
        browser.compareScreen(element(By.className('e-schedule')), 'week');

        await browser.actions().click(browser.findElement(By.xpath('//*[@id="schedule"]/div[1]/div/div/div[3]/div[6]'))).perform();
        await browser.sleep(sleepTime);
        browser.compareScreen(element(By.className('e-schedule')), 'month');
    });
});
