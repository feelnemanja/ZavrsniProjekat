import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { User } from '../modals/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  userDataChanged: Subject<User> = new Subject<User>();

  constructor(
    private httpClient: HttpClient,
  ) { }

  setUserData(userData: any){
    this.userData = userData;
    this.userDataChanged.next(this.userData);
  }

  checkIfUserExist(user: User){
    return this.httpClient.get("http://localhost:3000/users")
    .pipe(
      map(
        (result: any) => {
          if(result){
            let tempIndex = result.findIndex((x: any) => x.email == user.email);
            if(tempIndex != -1){
              throw Error("Korisnik sa unetim email-om vec postoji!");
            }
            else{
              return true;
            }
          }
          else{
            return true;
          }
        }
      )
    )
  }

  signUp(user: User){
    return this.httpClient.post("http://localhost:3000/users", user)
    .pipe(
      map((res: any) => {
        this.setUserData(res);
        return res;
      })
    )
  }

  signIn(email: string, password: string){
    return this.httpClient.get("http://localhost:3000/users")
    .pipe(
      map(
        (result: any) => {
          if(result){
            let tempIndex = result.findIndex((x: any) => x.email == email);
            if(tempIndex == -1){
              throw Error("The email you entered does not exist!");
            }
            else{
              if(result[tempIndex].password == password){
                this.setUserData(result[tempIndex]);
                return true;
              }
              else{
                throw Error("The password you entered is incorrect");
              }
            }
          }
          else{
            throw Error("The email you entered does not exist!");
          }
        }
      )
    )
  }

  logout(){
    this.setUserData(null);
  }
}
