import * as React from "react";

export class State {
    user?: string;

    constructor() { }

    authienticated() {
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
                new_state.user = action.username;
                return new_state;
        }
    }
}

class SetUser {
    readonly type: 'set_user';
    username: string;
}

export type AppAction =
    | SetUser;


export const AppContext = React.createContext<State>(new State());
