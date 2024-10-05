import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = () => {

    const [proof, setProof] = useState([]) ///hasta aqui vamos bien GGG
    const [inputValue, setInputValue] = useState(''); // Store the input values
    const [category, setCategory] = useState('Future Trunks')

    const getCategory = (e) => {
        e.preventDefault();
        const helper = e.target;
        setCategory(helper[0].value);
    };

    useEffect(() => {
        console.log(category);
        getGifs(category).then(result => setProof(result));
    },[]);


    return (
        <>
        <h3>{ category }</h3>
        <form onSubmit={getCategory}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update input value
                placeholder="Enter a new category"
            />
            <button style={{width:"8rem", height:"2rem", margin:"1rem"}} type="submit" > What you want boy?</button>
                
            <ol>
                {
                    proof.map((item)=>
                        <div>
                            <li key={item.id}> {item.title}</li>
                            <img src={item.url} ></img>
                        </div> 
                )
                }    
            </ol>
        </form>
            
        </>
    )

}