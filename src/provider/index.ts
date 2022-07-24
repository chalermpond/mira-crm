export enum ProviderName {
    // Peripheral Providers
    EnvConfigProvider = 'environment-config',
    MongoDBConnectionProvider = 'mongodb-connection',

    // Repository Providers
    ContactRepositoryProvider = 'contact-repository-provider',
    UserRepositoryProvider = 'user-repository-provider',

    // Service Providers
    ContactServiceProvider = 'contact-service-provider',
    AuthServiceProvider = 'auth-service-provider',
    UserServiceProvider = 'user-service-provider',

}

export * from './env-config'
export * from './database'
export * from './repository'
export * from './service'
