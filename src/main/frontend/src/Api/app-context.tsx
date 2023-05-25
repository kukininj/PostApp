import { User } from "PostAppAPI";
import * as React from "react";

export class State {
    user?: User;

    constructor() {
        this.user = undefined;
    }

    authenticated() {
        return this.user;
    }

    static clone(state: State) {
        return Object.assign(
            new State(),
            state
        );
    }

    static reducer(state: State, action: AppAction): State {
        switch (action.type) {
            case 'set_user':
                let new_state = State.clone(state);
                new_state.user = action.user;
                return new_state;
        }
        console.error("unnknown action!", action, state);
        return state;
    }
}

export class SetUser {
    readonly type: 'set_user' = 'set_user';
    user: User;
    constructor(user: User) {
        this.user = user;
    }
}

export type AppAction =
    | SetUser;


export const AppContext = React.createContext<State>(new State());
