import { Page } from "@playwright/test";

export default class SLA{

    constructor(public page:Page){}

    async clickOnSla(){
        await this.page.click("//span[text()='SLA']")
    }
    async clickOnAddSla(){
        await this.page.click("'Add SLA'")
    }
    async SLANoofDays(slanoofdays:string) {
        await this.page.locator("#slaDays").fill(slanoofdays)
    }
    async SLACode(slacode:string) {
        await this.page.locator("#slaCode").fill(slacode)
    }
    async SLADate(sladate:string) {
        await this.page.locator("#slaDate").fill(sladate)
    }
    async SLADescription(sladescription :string) {
        await this.page.locator("(//textarea[@name='description'])[1]").fill(sladescription)
    }
    async clickOnSave(){    
        await this.page.click("//button[text()='Create']")
    }
    async clickOnCancel(){
        await this.page.click("")
    }
    
}