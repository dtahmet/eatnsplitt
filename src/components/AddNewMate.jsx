import { useRef } from "react";

let num=-1


export default function AddNewMate({grabAPerson}){
    let friendsName= useRef();
    let friendsImage=useRef();
  
    let aFriend = null
  
    function addFriend(){
      let fName= friendsName.current.value;
      let fImage= friendsImage.current.value
      let fId = Date.now()
      num++
  
      aFriend = {name: fName, image: fImage, id: fId, number:num, description:false}
      grabAPerson(aFriend)
      
    }
  
  
    return(
      <div className="addFriend">
        <div className="friendName">
          <label for="fname"><span>👩🏼‍🤝‍👨🏻</span>Friend name</label>
          <input type="text" id="fname" name="fname" ref={friendsName}></input>
        </div>
        <div className="add-Url">
          <label for="Iurl"><span>🖼️</span>Image URL</label>
          <input type="url" id="Iurl" name="Iurl" ref={friendsImage}></input>
        </div>
        <div className="newMateButton">
          <button onClick={addFriend}>Add</button>
        </div>
  
  
      </div>
    )
  }