import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  get(key: string) {
    return JSON.parse(localStorage.getItem(key)!);
  }

  save(key: string, data: any) {
    return localStorage.setItem(key, JSON.stringify(data));
  }
}
