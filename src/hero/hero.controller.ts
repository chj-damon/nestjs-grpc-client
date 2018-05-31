import { Controller, OnModuleInit, Get } from '@nestjs/common';
import {
  GrpcMethod,
  ClientGrpc,
  Client,
  Transport,
} from '@nestjs/microservices';
import { HeroById } from './interfaces/hero-by-id.interface';
import { Hero } from './interfaces/hero.interface';
import { Observable } from 'rxjs';
import { join } from 'path';
import { grpcClientOptions } from '../grpc-client.options';

interface HeroService {
  findOne(data: { id: number }): Observable<any>;
}

@Controller()
export class HeroController implements OnModuleInit {
  @Client(grpcClientOptions) private readonly client: ClientGrpc;
  private heroService: HeroService;

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  @Get()
  call(): Observable<any> {
    return this.heroService.findOne({ id: 2 });
  }
}
