import { Injectable } from "@nestjs/common";

@Injectable()
export class ContactService {
  async processContactForm(formData: any) {
    console.log("Processing contact form submission...", formData);
    return { success: true };
  }
}
