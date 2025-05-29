import { Page } from "@playwright/test";

export default class Category{

    constructor(public page: Page) {}

    async ClickCategory(){
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[1]")
    }
    async ClickAddCategory(){
        await this.page.click("'Add Category'")
    }
    async CategoryName(Cname:string){
        await this.page.locator("(//input[@name='productName'])[1]").fill(Cname)
    }
    async CategorySubmit(){
        await this.page.click("(//button[contains(@class,'btn btn-primary')])[1]")
    }
}