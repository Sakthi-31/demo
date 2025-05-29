import { Page } from "@playwright/test";


export default class roles{

    constructor(public page:Page){}

    async ClickRoles(){
        await this.page.click("'Manage Roles'")
    }
    async ClickAddRoles(){
        await this.page.click("//a[@href='#/role']")
    }
    async RoleName(rolename:string){
        await this.page.locator("(//input[@name='roleName'])[1]").fill(rolename)
    }
    async ChoosePrivilege(){
        await this.page.selectOption("(//select[@name='privileges'])[1]",[
            {
                label:" Instant "
            },{
                index:1
            }
        ])
    }
    async RoleSumbit(){
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[1]")
    }

}