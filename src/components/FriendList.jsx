import Friend from "./Friend"

export default function FriendList({friends, choosePerson, execute}){
    return(
      <ul className="friendsList">
        {friends.map(friend=><Friend friends={friends} execute={execute} choosePerson={choosePerson} key={friend.number}  friendx={friend}/>)}
        
          
  
      </ul>
      
    )
  
  
  }