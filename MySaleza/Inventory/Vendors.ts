import { Page } from "@playwright/test";


export default class vendor {

    constructor(public page: Page) { }

    async ClickVendors() {
        await this.page.click("//span[text()='Vendors']")
    }
    async AddVendors() {
        await this.page.click("'Add Vendor'")
    }
    async VendorOwnerName() {
        await this.page.click("(//mat-select[contains(@class,'mat-mdc-select select')])[1]")
        await this.page.selectOption("//div[@role='listbox']", {
            value: "Shakthi"
        })
    }
    async VendorName(vendorname: string) {
        await this.page.locator("//input[contains(@class,'form-control ng-pristine')]").fill(vendorname)
    }
    async Emailid(emailid: string) {
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[1]").fill(emailid)
    }
    async Website(website: string) {
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[2]").fill(website)
    }
    async PhoneNumber(pnumber: string) {
        await this.page.locator("(//input[contains(@class,'form-control ng-untouched')])[3]").fill(pnumber.toString())
    }
    async CategoryName() {
       await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-26']")
        await this.page.selectOption("//div[contains(@class,'ng-trigger ng-trigger-transformPanel')]",{
            index:5
        })
    }
    async EmailOptOut() {
        await this.page.click("(//input[@type='checkbox'])[1]")
    }
    async Street(street: string) {
        await this.page.locator("#address").fill(street)
    }
    async City(city: string) {
        await this.page.locator("//input[@placeholder='Ex. Trichy']").fill(city)
    }
    async State(state: string) {
        await this.page.locator("//input[@placeholder='Ex. Tamilnadu']").fill(state)
    }
    async Country(country: string) {
        await this.page.locator("//input[@placeholder='Ex. India']").fill(country)
    }
    async Zipcode(zipcode: string) {
        await this.page.locator("//input[@placeholder='Ex. 621002']").fill(zipcode.toString())
    }
    async Description(vendordescription: string) {
        await this.page.locator("(//textarea[@name='description'])[1]").fill(vendordescription)
    }
    async CreatedVendorSumbit() {
        await this.page.click("//button[contains(@class,'btn btn-primary')]")
    }

}