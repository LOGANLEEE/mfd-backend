import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // todo CORS

  const options = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('users')
    .build();

  // Create the Swagger document and set up Swagger UI route
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
