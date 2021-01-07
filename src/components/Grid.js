import React, { useEffect, useState } from 'react';

export default function Grid({ retAmount }){
    const [notes, setNotes] = useState({});
    const [cash, setCash] = useState([2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]);
    
    const getNotesCount = (amount) => {
        let currAmount = amount;
        const NOTES = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        return NOTES.reduce((countMap, currNote, index) => {
            if (currAmount >= currNote) {
                const currAmountCopy = currAmount;
                const count = Math.floor(currAmountCopy / currNote);
                currAmount -= currNote * count;
                return {
                    ...countMap,
                    [index]: count
                };
            }

            return countMap;
        }, {});
    };

    useEffect(() => {
        setNotes(getNotesCount(retAmount));
    }, [retAmount]);

    
    return(
       
       <div className="grid">
           {
               Object.keys(notes).map( (key, index) => {
                   return(
                        <>
                            <div className="key">
                                {cash[key]}₹
                            </div>
                            <div className="dash">
                               {`⇄`}
                            </div>
                            <div className="quantity">
                               {notes[key]}
                            </div>    
                        </>      
                   );
               })
               
           }

           </div>
        )
    ;
}