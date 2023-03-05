import React from "react";
type Props = {
    title:string,
    content:string,
    confirmFn:(isOk:boolean)=>void;
    open:boolean;    
}