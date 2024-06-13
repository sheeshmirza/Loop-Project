import { Logger } from "@nestjs/common";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { NestFactory } from "@nestjs/core";
import { MainModule } from "./main.module";

async function bootstrap() {
  try {
    const app = await NestFactory.create(MainModule);
    // CORS setup
    const corsOptions: CorsOptions = {
      origin: true, // allows all origins
    };
    app.enableCors(corsOptions);
    await app.listen(3000);
    Logger.log("Server started at http://127.0.0.1:3000", "Bootstrap");
  } catch (error: any) {
    Logger.error(`Failed to start the server: ${error.message}`, "Bootstrap");
    process.exit(1);
  }
}
bootstrap();
