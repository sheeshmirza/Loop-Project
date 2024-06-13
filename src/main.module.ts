import { Module } from "@nestjs/common";
import { ContactModule } from "./contact/contact.module";
import { ContactController } from "./contact/contact.controller";
import { ContactService } from "./contact/contact.service";
import { NewsletterModule } from "./newsletter/newsletter.module";
import { NewsletterController } from "./newsletter/newsletter.controller";
import { NewsletterService } from "./newsletter/newsletter.service";

@Module({
  imports: [ContactModule, NewsletterModule],
  controllers: [ContactController, NewsletterController],
  providers: [ContactService, NewsletterService],
})
export class MainModule {}
