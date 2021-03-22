import React from   "react";
import NavButton from  "./Button";
import NavDropCard from  "./NavDropCard";

const  ButtonDropDown=  ()  =>{
    const   [open,setOpen]=React.useState(false);

function handleClick(e){
if(!e.target.closest("#drop-down-wrapper")  && open){
    setOpen(false);
}
}
React.useEffect(() =>{
    document.addEventListener("click",handleClick);
    return()=>{
        document.removeEventListener("click",handleClick)
    }
});
    return(
        <div className="relative" >
            <NavButton  onClick={() =>  setOpen(open => !open)}/>
            {open && <NavDropCard/>}
        </div>
    )
    }
export  default ButtonDropDown;