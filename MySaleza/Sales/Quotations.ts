import { Page } from "@playwright/test"

export default class Quotations {

    constructor(public page: Page) { }

    async ClickQuotations() {
        await this.page.click("//span[normalize-space(text())='Quotations']")
    }
    async ClickAddQuotations() {
        await this.page.click("//a[@class='btn btn-primary']")
    }
    async QuoteOwner() {
        await this.page.click("//div[@id='mat-select-value-57']")
        await this.page.selectOption("#mat-select-0-panel", {
            value: " thangavel "
        })
    }
    async Subject(subject: string) {
        await this.page.locator("//input[@id='subject']").fill(subject)
    }
    async ContactName() {
        await this.page.click("#mat-select-value-3")
        await this.page.selectOption("#mat-select-2-panel", {
            value: "Mohit"
        })
    }
    async DealName() {
        await this.page.click("#mat-select-value-5")
        await this.page.selectOption("//div[@id='cdk-overlay-2']", {
            value: "Geetha"
        })
    }
    async AccountName() {
        await this.page.click("#mat-select-value-7")
        await this.page.selectOption("#mat-select-6-panel", {
            value: " Sathyam Software Solutions "
        })
    }
    async DueDate(duedate: string) {
        await this.page.locator("#dueDate").fill(duedate)
    }
    async QuotesStage() {
        await this.page.click("#mat-select-value-9")
        await this.page.selectOption("#mat-select-8-panel", {
            value: "Confirmed"
        })
    }
    async Carrier() {
        await this.page.click("#mat-select-value-11")
        await this.page.selectOption("#mat-select-10-panel", {
            value: "USPS"
        })
    }
    async QuotationsStreet(quotationsstreet: string) {
        await this.page.locator("//input[@id='street']").fill(quotationsstreet)
    }
    async QuotationsCity(quotationscity: string) {
        await this.page.locator("//input[@id='city']").fill(quotationscity)
    }
    async QuotationsState(quotationsstate: string) {
        await this.page.locator("//input[@id='state']").fill(quotationsstate)
    }
    async QuotationsPincode(quotationspincode: number) {
        await this.page.locator("//input[@id='pincode']").fill(quotationspincode.toString())
    }
    async QuotationsCountry(quotationscountry: string) {
        await this.page.locator("//input[@id='country']").fill(quotationscountry)
    }
    async QuotationsClickCopyAddress() {
        await this.page.click("//button[normalize-space()='Copy Address']")
        await this.page.selectOption("//ul[@class='dropdown-menu show']", {
            value: "  Billing to Shipping  "
        })
    }
    async ClickAProductInQuotations() {
        await this.page.click("//a[@class='btn btn-primary form-plus-btn mb-2']")
    }
    async QuotationsClickAddProduct(quotationsquantity: string) {
        await this.page.click("//div[@id='mat-select-value-13']")
        await this.page.selectOption("//div[@id='mat-select-12-panel']", {
            value: "  OnePlus 13   "
        })
        await this.page.locator("//div[@id='product_details']//div[3]//div[1]//input[1]").fill(quotationsquantity)

    }
    async QuotationsClickDiscount(quotationsdiscount: number) {
        await this.page.locator("input[placeholder='Enter Discount'][type='text']").fill(quotationsdiscount.toString())
        await this.page.click("//button[@data-bs-dismiss='modal'][normalize-space()='Create']")
    }
    async QuotationsTermsandConditions(quotationstermsandconditions: string) {
        await this.page.locator("//textarea[@placeholder='Terms and Conditions']").fill(quotationstermsandconditions)
    }
    async QuotationsDescription(quotationsdescription: string) {
        await this.page.locator("//textarea[@placeholder='Description']").fill(quotationsdescription)
    }
    async CreatedQuotationsSumbit() {
        await this.page.click("//div[@class='form-group-item']//button[@type='submit'][normalize-space()='Create']")
    }
}