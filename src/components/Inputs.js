import { useState } from 'react';
import '../App.css';
import Grid from './Grid';
import Warn from './Warn';


export default function Inputs(){


        const [bill, setBill] = useState();
        const [cash, setCash] = useState();
        const [ret, setRet] = useState(0);
        const [message, setMessage] = useState('');

        const lessThanZero = `Bill or cash is less than zero.`;
        const billGreater = `Bill amount ${bill} is greater than ${cash} cash given.`;
        const equalToZero = `Bill or cash is equal to zero.`;
        const equal = `Bill and cash are equal nothing to return.`;
        
        const handleChange = e => {
            if(e.target.name === 'bill') setBill(parseInt(e.target.value));
            if(e.target.name === 'cash') setCash(parseInt(e.target.value));
        };

        const handleCheck = (e) => {
    
            if(bill < 0 || cash < 0){
                setMessage(lessThanZero);
                return;
            }else if(bill === 0 || cash === 0){
                setMessage(equalToZero);
                return;
            }else if(bill > cash){
                setMessage(billGreater);
                return;
            }else if(bill === cash){
                setMessage(equal);
            }else{
                setMessage('');
            }
            setRet(cash - bill);
            // console.log(message);
        };

        const handleReset = () => {
            setCash(0);
            setBill(0);
            setRet(0);
            setMessage('');
        };
        

        return(
            <div className="container flex">
                <div className="input">
                    <div className="flex">
                        <input type="number" value={bill} name="bill" id="bill" onChange={handleChange} placeholder="Bill amount" /> 
                        <input type="number" value={cash} name="cash" id="cash" onChange={handleChange} placeholder="Cash Given" />
                    </div>
                    <div className="btn">
                        <div className="flex">
                            <button onClick={handleCheck}>Check</button>
                            <button onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                </div>
                <div className="error">
                    { (message !== '') ? <Warn msg={message}/>  : null }
                </div>
                <div className="">
                    <Grid retAmount={ret}/>
                </div>
            </div>
        );
} 