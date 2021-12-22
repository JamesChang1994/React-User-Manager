interface IName {
    first: string,
    last: string,
}

export interface ITheUser {
    svg: string;
    seed: string;
    email: string;
    name: IName 
}

export interface IMainContentProps {
    user: IUser,
    setAllUsers: any,
    allUsers: Array<object>,
}

export interface IUser {
    seed?: string;
    svg?: string;
}
