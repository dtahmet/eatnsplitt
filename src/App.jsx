import {useState } from "react";
import FriendList from "./components/FriendList";
import AddNewMate from "./components/AddNewMate";
import BillingArea from "./components/BillingArea";





export default function App() {

  const [showAddFriend, setShowAddFriend] = useState(false);
  
  const [newFriendsList, setnewFriendsList]=useState([]);

  const [importantPerson, setImportantPerson] = useState({name:""})

  const [execute, setExecute] = useState(false)

  
  const handleAddFriendClick = () => {
    setShowAddFriend(previousState=> !previousState);
  };

  function addToList(person){
    setnewFriendsList(previousFriends=> [...previousFriends, person])
  }

  function choosePerson(personId){
    
    const selectedFriend = newFriendsList.find(aFriend=> aFriend.id === personId)
    setImportantPerson(selectedFriend);
    
  }

    
  return (
    <div className="App">
      <div className="leftMain">
        <FriendList execute={execute} choosePerson={choosePerson} friends={newFriendsList} />
        {showAddFriend && <AddNewMate grabAPerson={addToList} />}
        <Button onAddFriendClick={handleAddFriendClick} showAddFriend={showAddFriend}/>
      </div>
      <div className="rightMain">
        {newFriendsList.length<1 ? <p>Please Add a Friend to the List</p> :<BillingArea importantPerson={importantPerson} setImportantPerson={setImportantPerson} setExecute={setExecute}/>}
        

      </div>
    </div>
  );
}




function Button({onAddFriendClick, showAddFriend}){
 
  

  return <div className="funcButton">
    <button onClick={onAddFriendClick}>{!showAddFriend ? "Add Friend": "Close"}</button>
  </div>
}


