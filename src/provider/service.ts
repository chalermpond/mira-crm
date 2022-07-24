import { ProviderName } from './index'
import { Provider as NestProviderInterface } from '@nestjs/common'
import { IContactRepository } from '../service/contact/interface/repository.interface'
import { ContactService } from '../service/contact/contact.service'
import { IConfig } from '../common/interface/config.interface'
import { AuthService } from '../service/auth/auth.service'
import { UserService } from '../service/user/user.service'
import { IUserRepository } from '../service/user/interface/repository.interface'

const {
    AuthServiceProvider,
    ContactServiceProvider,
    ContactRepositoryProvider,
    EnvConfigProvider,
    UserServiceProvider,
    UserRepositoryProvider,
} = ProviderName

export const contactServiceProvider: NestProviderInterface = {
    provide: ContactServiceProvider,
    inject: [
        ContactRepositoryProvider,
    ],
    useFactory: (
        contactRepo: IContactRepository,
    ) => {
        return new ContactService(
            contactRepo,
        )
    },
}

export const authServiceProvider: NestProviderInterface = {
    provide: AuthServiceProvider,
    inject: [
        EnvConfigProvider,
    ],
    useFactory: (conf: IConfig) => new AuthService(conf),
}

export const userServiceProvider: NestProviderInterface = {
    provide: UserServiceProvider,
    inject: [
        UserRepositoryProvider,
    ],
    useFactory: (userRepository: IUserRepository) => new UserService(userRepository),
}
