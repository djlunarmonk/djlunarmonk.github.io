import React from 'react';
import './Television.css';
import { useState, useEffect } from 'react';


const Television = () => {

    let [pixels, setPixels] = useState([]);

    useEffect( () => {

        const makePixels = () => {
            let pixarr = new Array();
            
            for (let y = 0; y < 150; y++) {
                pixarr.push(new Array());
                
                for (let x = 0; x < 200; x++) {
                    pixarr[y].push(Math.round(Math.random()));
                    pixarr[y,x];
                }
                console.log(pixarr.length, pixarr[y].length);
            }
            setPixels(pixarr);
        }
        setTimeout(makePixels(), 1000/24);

    }, [pixels]);

    return (<div className='tv-outer-frame'>
                <div className='tv-screen-frame'>
                    { pixels == [] ? <></> :
                    
                        pixels.map((row, i) => (
                        <div className='tv-pixel-line' key={i}>
                            { row.map( (cell, j) => (
                                cell === 1 ? <span key={j} className='tv-white-dot'></span> : <span key={j} className='tv-black-dot'></span>
                            ))}
                            </div>
                    ))
                    }
                </div>
            </div>
            );
}
 
export default Television;