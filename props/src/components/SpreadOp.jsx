import React from 'react';

export default function SpreadOp() {

    // Using objects
    const first1 = { name: "Kartik" };
    const job = { job: "Software Engineer" };
    const all = { ...first1, ...job };
    console.log(all);

    // Using arrays
    const first = [1, 2, 3];
    const second = [4, 5, 6];
    const combined = [...first, ...second]; // Combine arrays using spread operator
    const clone = [...first]; // Clone the array

    return (
        <>
            <ul>
                {combined.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
            
            <ol>
                {clone.map(tag => <li key={tag}>{tag}</li>)}
            </ol>
        </>
    );
}
