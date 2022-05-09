import React from 'react';

         function Alert(props) {
        const capitalize = (word)=>{
            const lower = word.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
    return (
        //alert && is used to check if the alert is true or not
        // If props.alert is null then the code written after "&&" won’t be shown otherwise the code inside <div></div> tag will be displayed.
       props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
       </div>
    );
}

export default Alert;