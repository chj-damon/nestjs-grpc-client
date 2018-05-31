import { Module } from '@nestjs/common';
import { HeroController } from './hero.controller';

@Module({
  controllers: [HeroController],
  providers: [],
})
export class HeroModule {}
