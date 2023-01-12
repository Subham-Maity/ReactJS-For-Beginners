import React from 'react';

function ColorPallet(props) {
    return (
        <>
        {/*< className= "container" style={{color: props.mode==='dark'?'white':'#182429'}}>*/}

            <div className="mb-8"style={{color: props.mode==='dark'?'white':'#182429'}}>

            {/*<fieldset className="border border-200 p-3">*/}
                <h5 className="mt-5">{props.heading}  </h5>
                  <p className="mb-3">{props.subHeading}</p>
        <div className="d-flex " >

            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode2('primary')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode2('danger')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode2('success')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode2('warning')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
            <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode2('light')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
            <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode2('dark')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>

        </div>
            {/*</fieldset>*/}
        </div>
        </>
            );

}

export default ColorPallet;
