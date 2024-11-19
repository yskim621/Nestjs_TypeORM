import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BoardsModule } from './boards/boards.module';
import { MindsTrafficLightModule } from 'src/routes/minds-traffic-light.module';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => BoardsModule),
    forwardRef(() => MindsTrafficLightModule),
  ],
})
export class Modules {}
