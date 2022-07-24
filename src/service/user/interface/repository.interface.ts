import { Observable } from 'rxjs'
import { IUser } from './model.interface'
import { IRepository } from '../../../common/interface/repository.interface'

export interface IUserRepository extends IRepository<IUser> {
    list(page: number, limit: number): Observable<IUser>
    getById(id: string): Observable<IUser>
    save(model: IUser): Observable<any>
    update(model: IUser): Observable<any>
}
