import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'Midudev',
        name: 'Miguel Duran',
        isFollowing : true
    },
    {
        userName: 'Mbv69',
        name : 'Newmoss',
        isFollowing: false
    }
 ]
 
export function App () {
    return (
        <section className='App'>
            {
                users.map(({userName,name,isFollowing})=>( 
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )) 
            }
        </section>
    )
}

/* <TwitterFollowCard isFollowing userName="midudev">
            Miguel 
        </TwitterFollowCard>

        <TwitterFollowCard userName="Mbv69">
            Tomas
        </TwitterFollowCard> */