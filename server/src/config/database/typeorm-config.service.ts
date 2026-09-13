import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'
import { DATABASE_CONFIG } from './database.config.js'
import { Env } from '../env.config.js'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const dbConfig =
      this.config.getOrThrow<TypeOrmModuleOptions>(DATABASE_CONFIG)

    const isDev = this.config.get<Env['NODE_ENV']>('NODE_ENV') === 'development'

    return {
      ...dbConfig,
      autoLoadEntities: true,
      // use migration instead of automatically update schema
      synchronize: false,
      logging: isDev ? ['error', 'warn', 'query'] : ['error'],
      //   not automatically run migration
      migrationsRun: false,
      retryAttempts: 5,
      retryDelay: 3000,
      namingStrategy: new SnakeNamingStrategy(),
    }
  }
}
