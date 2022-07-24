import { Module } from '@nestjs/common'
import { ContactController } from './controller/rest/contact.controller'
// import { TicketController } from './controller/rest/ticket.controller'
import {
    authServiceProvider,
    contactServiceProvider,
    databaseProviders,
    environmentConfig,
    repositoryProviders,
    userServiceProvider,
} from './provider'
import { UserController } from './controller/rest/user.controller'
import { httpErrorFilter } from './provider/error-filter'

@Module({
    imports: [],
    controllers: [
        ContactController,
        UserController,
    ],
    providers: [
        // httpErrorFilter,
        environmentConfig,
        ...databaseProviders,
        ...repositoryProviders,
        contactServiceProvider,
        authServiceProvider,
        userServiceProvider,
    ],
})
export class AppModule {
}
