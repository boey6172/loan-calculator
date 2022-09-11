import Inputs from '../input'
import Button from '../button'
import {useState} from 'react';
import Holder from '../holder'

function App() {
  
  const details={
    debt:0,
    interest:0,
    ttl_pay:0,
  }
  const calculated={
      remBalance:0,
      amount:0
  }
  
  let [values,setValues ] =  useState(details)
  let [data,setData ] =  useState(calculated)


  
  const handleInputChange = e =>{
    var { name,value }= e.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  
  const calculate = () =>{
    let amount = Number((values.ttl_pay - values.debt * values.interest)/(1-values.interest))
    let remBalance = Number(values.debt-amount)
    setData({
      remBalance:Number(remBalance.toFixed(2)),
      amount:Number(amount.toFixed(2))
    })
  } 


  return (
    <>
      <Inputs 
        id = "debt"
        name = "debt"
        label ="Debt"
        onChange={handleInputChange}
        value={values.debt } 
        inputprops = {{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
       <br/>

      <Inputs
         id = "interest"
         name = "interest"
         label ="Interest"
         onChange={handleInputChange}
         value={values.interest }   
        inputprops = {{ inputMode: 'numeric', pattern: '[0-9]*' }}

      />   
       <br/>

      <Inputs
         id = "ttl_pay"
         name = "ttl_pay"
         label ="Total Payment"  
         onChange={handleInputChange}
         value={values.ttl_pay }  
        inputprops = {{ inputMode: 'numeric', pattern: '[0-9]*' }}

      />
       <br/>

      <Button
        onClick = {calculate}
        text = "Calculate"
      />
      <br/>
        <Holder
          data = {data}
        />
    


    </>
  );
}

export default App;