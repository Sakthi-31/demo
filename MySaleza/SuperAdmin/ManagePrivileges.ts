import { Page } from "@playwright/test";


export default class Privileges{

    constructor(public page:Page){}

    async ClicPrivilege(){
        await this.page.click("'Manage Privileges'")
    }
    async ClickAddPrivilege(){
        await this.page.click("'Add Privilege'")
    }
    async PrivilegeName(privilegename:string){
        await this.page.locator("#privilege-name").fill(privilegename)
    }
    async DropDownAccess(){
        await this.page.click("select")
        await this.page.selectOption("select",[
            {
                 value:"1: Object"
            }
        ])
    }
    async PrivilegeSubmit(){
        await this.page.click("//button[contains(@class,'btn btn-primary')]")
    }

}