import React, { useEffect, useState } from 'react';

export default function Grid({ retAmount }){
    const [notes, setNotes] = useState({
        1: 0,
        2: 0,
        5: 0,
        10: 0,
        20: 0,
        50: 0,
        100: 0,
        200: 0,
        500: 0,
        2000: 0
    }); 
    

    useEffect(() => {
        console.log("Did Mount");
        let intial = retAmount; 
        console.log(intial);
        const arr = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];
        for (let i = arr.length - 1; i >= 0; i--) {
            // untill return amount isn't smaller than notes
            while (arr[i] <= intial) {
                if(arr[i] === 2000){
                    setNotes({
                        ...notes,
                        2000: notes[2000] + 1
                    });
                }else if(arr[i] === 500){
                    setNotes({
                        ...notes,
                        500: notes[500] + 1
                    });
                }else if(arr[i] === 200){
                    setNotes({
                        ...notes,
                        200: notes[200] + 1
                    });
                }else if(arr[i] === 100){
                    setNotes({
                        ...notes,
                        100: notes[100] + 1
                    });
                }else if(arr[i] === 50){
                    setNotes({
                        ...notes,
                        50: notes[50] + 1
                    });
                }else if(arr[i] === 20){
                    setNotes({
                        ...notes,
                        20: notes[20] + 1
                    });
                }else if(arr[i] === 10){
                    setNotes({
                        ...notes,
                        10: notes[10] + 1
                    });
                }else if(arr[i] === 5){
                    setNotes({
                        ...notes,
                        5: notes[5] + 1
                    });
                    console.log("here", notes, notes[5]);
                }else if(arr[i] === 2){
                    setNotes({
                        ...notes,
                        2: notes[2] + 1
                    });
                }else{
                    setNotes({
                        ...notes,
                        1: notes[1] + 1
                    });
                }
                console.log("initial", intial, "notes", notes);
                intial = intial - arr[i];
            }
          }
              return () => {
                
              }
    }, [retAmount, notes]);

    return(
        <div className="grid">
           {
               Object.keys(notes).map( (key, index) => {
                   return(
                        <>
                            <div className="key">
                                {key}
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
    );
}