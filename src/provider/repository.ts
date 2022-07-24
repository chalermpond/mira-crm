import { ProviderName } from './index'
import { Db } from 'mongodb'

import { Provider as NestProviderInterface } from '@nestjs/common/interfaces'
import { ContactMongoRepository } from '../repository/contact'
import { UserMongoRepository } from '../repository/user'

const {
    ContactRepositoryProvider,
    MongoDBConnectionProvider,
    UserRepositoryProvider,
} = ProviderName

export const repositoryProviders: NestProviderInterface[] = [
    {
        provide: ContactRepositoryProvider,
        useFactory: (db: Db) => {
            return new ContactMongoRepository(db)
        },
        inject: [MongoDBConnectionProvider],
    },
    {
        provide: UserRepositoryProvider,
        useFactory: (db: Db) => new UserMongoRepository(db),
        inject: [MongoDBConnectionProvider],
    },
]
