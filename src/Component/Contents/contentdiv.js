import React from "react";
import Card from "./content";
import Content_db from "./contentData";
import { useSelector } from 'react-redux';

function ContentDiv(){
    const Cdata=Content_db;
    const contentfil=useSelector((state)=>state.contentfil.value)
    const catefilter=useSelector((state)=>state.catefil.value);
    const locafilter=useSelector((state)=>state.locafil.value)

    const filContent=Cdata.filter(Cdata=>Cdata.titlee.toLowerCase().includes(contentfil.toLowerCase()))
    const fiContent=filContent.filter(filContent=>filContent.type.toLowerCase().includes(catefilter.toLowerCase()))
    const fContent=fiContent.filter(fiContent=>fiContent.address.toLowerCase().includes(locafilter.toLowerCase()))
    
    function checkEmpty(){
        if(fContent.length===0){
            console.log("hello")
            return(
                <div>
                empty
                </div>
            )
        }
    }
    return(
        <>
        {checkEmpty}
        <Card props={fContent}/>
        </>
    )
}
export default ContentDiv;