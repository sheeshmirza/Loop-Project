import { Body, Controller, Logger, Post, ValidationPipe } from "@nestjs/common";
import { BadRequestException } from "@nestjs/common";
import { NewsletterService } from "./newsletter.service";
import { SubscriptionInput } from "./helpers/subscription.input";

@Controller("/api/newsletter")
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Post()
  async subscribeToNewsletter(
    @Body(new ValidationPipe({ transform: true }))
    subscribeInput: SubscriptionInput
  ) {
    try {
      const response = await this.newsletterService.subscribe(subscribeInput);
      return {
        message: "Subscription successful",
        data: response,
      };
    } catch (error: any) {
      Logger.error(
        "Error occurred during newsletter subscription: ${error.message}",
        NewsletterController.name
      );
      throw new BadRequestException({
        message: ["Failed to subscribe to the newsletter", error.message],
        error: "Bad Request",
        statusCode: 400,
      });
    }
  }
}
