import { Body, Controller, Post } from "@nestjs/common";
import { ContactService } from "./contact.service";

@Controller("contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}
  @Post()
  async submitContactForm(@Body() formData: any) {
    return this.contactService.processContactForm(formData);
  }
}
