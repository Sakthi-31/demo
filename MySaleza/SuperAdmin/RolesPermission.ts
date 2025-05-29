import { Page } from "@playwright/test";


export default class rolespermission{

    constructor(public page:Page){}

    async Clickrolespermission(){
        await this.page.click("'Roles & Permission'")
    }
    async ClickaddRoles(){
        await this.page.click("'Add Roles'")
    }
    async RoleName(rolenames:string){
        await this.page.locator("#role-name").fill(rolenames)
    }
    async RoleSumbit(){
        await this.page.click("//button[contains(@class,'btn btn-primary')]")
    }
}