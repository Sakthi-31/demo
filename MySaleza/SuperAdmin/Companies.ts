import { Page } from "@playwright/test";


export default class company{

    constructor(public page:Page){}

    async ClickCompany(){
        await this.page.click("'Companies'")
    }
    async ClickAddCompany(){
        await this.page.click("'Add Company'")
    }
    async CompanyName(companyname:string){
        await this.page.locator("(//input[@name='companyName'])[1]").fill(companyname)
    }
    async EmailAddress(emailaddress:string){
        await this.page.locator("(//input[@name='companyEmail'])[1]").fill(emailaddress)
    }
    async Website(website:string){
        await this.page.locator("(//input[@name='companyWebsite'])[1]").fill(website)
    }
    async Password(companyPassword:string){
        await this.page.locator("(//input[@name='password'])[1]").fill(companyPassword)
    }
    async ConfirmPassword(companyPassword:string){
        await this.page.locator("(//input[@name='confirmPassword'])[1]").fill(companyPassword)
    }
    async GstNo(gstno:string){
        await this.page.locator("(//input[@name='companyGSTNo'])[1]").fill(gstno)
    }
    async ContactNo(contactno:string){
        await this.page.locator("(//input[@name='contactNo'])[1]").fill(contactno)
    }
    async MoblieNo(moblieno:string){
        await this.page.locator("(//input[@name='mobileNo'])[1]").fill(moblieno)
    }
    async City(city:string){
        await this.page.locator("(//input[@name='city'])[1]").fill(city)
    }
    async State(states:string){
        await this.page.locator("(//input[@name='state'])[1]").fill(states)
    }
    async Address(addresscm:string){
        await this.page.locator("(//textarea[@name='address'])[1]").fill(addresscm)
    }
    async CompanySumbit(){
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[1]")
    }
}