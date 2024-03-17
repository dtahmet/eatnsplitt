import { useRef, useState } from "react"




export default function BillingArea({importantPerson, setExecute}){
    const[hisExpense, setHisExpense]=useState(0);


 
 

    

    const totalBill = useRef();
    const myDept= useRef();
    const whoPays = useRef();
  
    

    function splitBill(){
      
      const x= Number(totalBill.current.value);
      const y= Number(myDept.current.value);
      const z= Number(whoPays.current.value);

      const iPaid = ((x-y)*z);
      const hePaid= (y * z);
      let dept = ''

      if (iPaid <= 0 && hePaid <= 0) {
          dept = <p style={{color:"red"}}>You owe {importantPerson.name}  ${hePaid * -1}</p>;
      } else {
        dept = <p style={{color:"blue"}}>{importantPerson.name} owes you ${iPaid}</p>;
      }
      
      
      importantPerson.description =dept;

      setExecute(prevSit=>(!prevSit))

      console.log(importantPerson.description);

      totalBill.current.value =""
      myDept.current.value=""
      setHisExpense(0);

    }

      
  

    function handleHisDept(){
        const a = totalBill.current.value;
        const b = myDept.current.value;

        setHisExpense(Number(a)-Number(b));
        
    }
  
  

    return(
      
      <div className="billingArea">
        <h1>SPLIT A BILL WITH {importantPerson.name.toUpperCase()} </h1>
        <div>
          <label for="billValue"><span>💰</span>Bill value</label>
          <input onChange={handleHisDept} ref={totalBill} type="number" id="billValue" name="billValue" min="10" max="1000"></input>
        </div>
        <div>
          <label for="myExpense"><span>🧑🏻‍💻</span>Your Expense</label>
          <input onChange={handleHisDept} ref={myDept} type="number" id="myExpense" name="myExpense" min="10" max="1000"></input>
        </div>
        <div>
          <label for="his"><span>👩🏼‍🤝‍👨🏻</span>{importantPerson.name}'s Expense</label>
          <p>{hisExpense}</p>
        </div>
        <div>
          <label for="whoPays"><span>🤑</span>Who is paying the bill?</label>
  
            <select ref={whoPays} name="whoPays" id="whoPays">
              <option  value= "1">You</option>
              <option value="-1">{importantPerson.name}</option>
            </select>
        </div>
        <section className="buttonCan">
          <button onClick={splitBill}>Split Bill</button>
        </section>
      </div>
    )
  }
  
  