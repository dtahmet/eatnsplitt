export default function Friend({friends, execute, friendx, choosePerson}){

    return (
      <li key={friendx.number} className= {friendx.number %2=== 0 ? 'friend difBackground' : 'friend'}>
        <img src={friendx.image} alt={friendx.name}></img>
        <div className="friend-details">
          <h1>{friendx.name}</h1>
          {!friendx.description ? <p style={{color:"rgb(84,55,76)"}}>You and {friendx.name} are even.</p> : <p>{friendx.description}{execute}</p> }
          
        </div>
      <button onClick={friends.length>1 ? (()=>choosePerson(friendx.id)): (choosePerson(friendx.id))}>Select</button>
      
      </li>
    )
  
  }