import { Page } from "@playwright/test";


export default class LoginMysalesza{

constructor(public page:Page){}

async logs(gmail:string,Password:string){
    await this.loginscreen(gmail)
    await this.loginscreen1(Password)
    await this.loginscreen2()
}

async loginscreen(Username:string){
    await this.page.locator("#username").fill(Username)
}
async loginscreen1(Password:string){
 await this.page.locator("#password").fill(Password)
}
async loginscreen2(){
    await this.page.click("button[type='submit']")
}
}