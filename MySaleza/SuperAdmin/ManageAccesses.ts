import { Page } from "@playwright/test";


export default class Accesses{

    constructor(public page:Page){}

    async ClickSuperAdmin(){
        await this.page.click("//span[text()=' Super Admin']")
    }
    async ClickManageAccess(){
        await this.page.click("'Manage Accesses'")
    }
    async AddAccess(){
        await this.page.click("'Add Access'")
    }
    async AccessName(accessname:string){
        await this.page.locator("(//input[@id='access-name'])[1]").fill(accessname)
    }
    async AccessSumbit(){
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[1]")
    }

}