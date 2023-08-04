import { Injectable } from '@angular/core';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private defaultUser: IUser = {
    id: 1,
    username: 'DonaldTrump',
    email: 'DonaldTrump@example.com',
    password: 'password123',
  };

  getUser() {
    return { ...this.defaultUser };
  }
}
