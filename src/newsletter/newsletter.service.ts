import { Injectable } from "@nestjs/common";
import { SubscriptionInput } from "./helpers/subscription.input";

@Injectable()
export class NewsletterService {
  async subscribe(subscribeInput: SubscriptionInput): Promise<any> {
    return {
      email: subscribeInput?.email,
      name: subscribeInput?.name,
    };
  }
}
