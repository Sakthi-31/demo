import { Page } from "@playwright/test";

export default class Skills {

    constructor(public page: Page) { }

    async clickOnSkills() {
        await this.page.click("//span[text()='SLA']")
    }
    async clickOnAddSkills() {
        await this.page.click("'Add Skills'")
    }
    async SkillsName(skillsname: string) {
        await this.page.locator("(//input[@name='skillsName'])[1]").fill(skillsname)
    }
    async SkillsCode(skillscode: string) {
        await this.page.locator("#skillsCode").fill(skillscode)
    }

    async clickOnSave() {
        await this.page.click("//button[text()=' Create ']")
    }
}