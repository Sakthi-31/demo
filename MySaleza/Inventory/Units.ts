import { Page } from "@playwright/test";

export default class Units{

    constructor(public Page:Page){}

    async ClickUnits(){
       await this.Page.click("//span[text()='Units']")  
        
       }
       async clickAddUnits(){
        await this.Page.click("'Add Units'")
       }
       async UnitsName(uname:string){
        await this.Page.locator("(//input[@name='unitName'])[1]").fill(uname)
       }
       async UnitsSubmit(){
        await this.Page.click("(//button[contains(@class,'btn btn-primary')])[1]")
       }

}