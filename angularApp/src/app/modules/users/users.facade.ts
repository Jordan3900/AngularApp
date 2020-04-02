import { Injectable } from "@angular/core";
import { UsersService } from "./services/users/users.service";
import { Observable } from "rxjs";
import { UsersState } from "./state/users.state";
import { tap } from "rxjs/operators";

// I know that you saw this in the architecture article, 
// but in this use case the facade and state are just making complications
// Please remove them and use only your service 
@Injectable()
export class UsersFacade {
    constructor(private usersService: UsersService, private usersState: UsersState) {

    }

    isUpdating(): Observable<boolean> {
        return this.usersState.isUpdating();
    }

    loadUsers() {
        return this.usersService.getUsers()
            .pipe(tap(user => this.usersState.setUsers(user)));
    }
}