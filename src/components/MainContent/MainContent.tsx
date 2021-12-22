import React, { useEffect } from "react";
import { IMainContentProps } from './types';
import axios from "axios";

interface IName {
    first: string,
    last: string,
}

const MainContent:React.FC<IMainContentProps> = ({ user, allUsers, setAllUsers }: any) => {

    useEffect(() => {
        const {seed} = user;
        if(seed){
            axios.get(`https://randomuser.me/api/?seed=${seed}`).then(resp => {
                const result = resp.data.results[0];
                const tempUser = [...allUsers];
                tempUser.push({...result, ...user});
                setAllUsers(tempUser);
            })
        }
    }, [user])

    return (
        <main className="main">
            {allUsers && allUsers.length > 0 && allUsers.map((theUser: { svg: string, seed: string, email: string, name: IName,  }, index: number) => {
                
                return (
                    <div className="user-card" key={index}>
                        <div className='image' dangerouslySetInnerHTML={{ __html: theUser.svg }}/>
                        <p className="seed">{theUser.seed}</p>
                        <div className="flex">
                            <label>First Name : </label>
                            <span>{theUser?.name?.first}</span>
                        </div>
                        <div className="flex">
                            <label>Last Name : </label>
                            <span>{theUser?.name?.last}</span>
                        </div>
                        <div className="flex">
                            <label>Email Address</label>
                            <span>
                                <a className="mail" href={`https://mailto:${theUser.email}`}>{theUser.email}</a>
                            </span>
                        </div>
                    </div>
                )
            })}
        </main>
    )
}

export default MainContent;