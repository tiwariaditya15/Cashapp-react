import React, { useState, useEffect } from 'react';

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

    const [ramt, setRamt] = useState(0);

    useEffect(() => {
        const arr = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];
        setRamt(retAmount);
        for (let i = arr.length - 1; i >= 0; i--) {
            console.log("here", notes, ramt, retAmount);
            // untill return amount isn't smaller than notes
            while (arr[i] <= ramt) {
                console.log(notes[arr[i]]);
                setNotes(notes[arr[i]]++);
                setRamt(ramt - arr[i]);
            }
        }
    }, [ramt, notes, retAmount]);

    return(
        <div className="grid">
            Inside Grid
        </div>
    );
}