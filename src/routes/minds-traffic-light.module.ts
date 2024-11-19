import { Module } from '@nestjs/common';

import { AuthModule } from 'src/modules/auth/auth.module';
import { AuthController } from 'src/modules/auth/auth.controller';
import { BoardsModule } from 'src/modules/boards/boards.module';
import { BoardsController } from 'src/modules/boards/boards.controller';

@Module({
  imports: [AuthModule, BoardsModule],
  controllers: [AuthController, BoardsController],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class MindsTrafficLightModule {}
