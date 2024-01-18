import React from 'react'

const object = {
    1 : "monospace",
    2 : "",
    3 : "",
    4 : "",
    5 : "",
};
const H = (props) => {
    if ( props.classN === undefined ) {
        props.classN = "" ;
    }
    const l = props.level ;
  return (
    <div className={'font-black text-8xl capitalize' + props.classN} style={{ fontFamily : object.l}}>
        {props.text}
    </div>
  )
}

export default H ;