import { Page } from "@playwright/test";


export default class users{

    constructor(public page:Page){}

    async ClickUser(){
        await this.page.click("'Users'")
    }
    async ClickAddUser(){
        await this.page.click("'Add user'")
    }
    async FristName(fristname:string){
        await this.page.locator("#firstName").fill(fristname)
    }
    async LastName(lastname:string){
        await this.page.locator("#lastName").fill(lastname)
    }
    async Email(email:string){
        await this.page.locator("#emailAddress").fill(email)
    }
    async PhoneNumber(phonenumber:string){
        await this.page.locator("#phoneNo").fill(phonenumber)
    }
    async Role(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-283']")
        await this.page.selectOption("//div[@class='mat-mdc-select-value ng-tns-c1771602899-283']",{
            label:"ROLE_COMPANY "
        })
    }
    async Password(userpassword:string){
        await this.page.locator("#password").fill(userpassword)
    }
    async ConfrimPassword(userpassword:string){
        await this.page.locator("#confirmPassword").fill(userpassword)
    }
    async Address(address:string){
        await this.page.locator("#address").fill(address)
    }
    async State(state:string){
        await this.page.locator("(//input[@id='state'])[1]").fill(state)
    }
    async Country(country:string){
        await this.page.locator("(//input[@id='state'])[2]").fill(country)
    }
    async Status(){
        await this.page.click("//div[@class='mat-mdc-select-value ng-tns-c1771602899-284']")
        await this.page.selectOption("//div[@class='mat-mdc-select-value ng-tns-c1771602899-284']",{
            label:"Active"
        })
    }
    async UserSumbit(){
        await this.page.click("//button[contains(@class,'btn btn-primary')]")
    }
}