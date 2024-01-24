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
  return (
    <div className={'font-black capitalize' + props.classN}>
        {props.text}
    </div>
  )
}

export default H ;