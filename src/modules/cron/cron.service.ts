import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {
   @Cron('*/5 * * * *')
   async startNewGame(): Promise<void> {
      console.log('Hi.', new Date());
   }
}
