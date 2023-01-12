import React from 'react'

function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
        color: props.mode ==='dark'?'white':'#212a2d',
        backgroundColor: props.mode ==='dark'?'rgb(33, 42, 45)':'white',
    }
     return (
         <div className="container">
             <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'#212a2d'}}>About Us</h1>
             <div className="accordion" id="accordionExample">
                 <div className="accordion-item">
                     <h2 className="accordion-header" id="headingOne">
                         <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                             <strong>About Developer</strong>
                         </button>
                     </h2>
                     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                         <div className="accordion-body" style={myStyle}>
                             <p> I'm Subham Maity who developed this website using ReactJS. If you would like to contribute some functionality or add more features to this, please take a look at this repository and if you have any issues, please let me know.  </p>

                             <li><strong><a href=" https://github.com/Subham-Maity/textutils ">Github Repository Of TextUtils</a></strong>  </li>

                         </div>
                     </div>
                 </div>
                 <div className="accordion-item">
                     <h2 className="accordion-header" id="headingTwo">
                         <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                             <strong>Features </strong>
                         </button>
                     </h2>
                     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                         <div className="accordion-body" style={myStyle}>
                             TextUtils is a React-based application that provides seamless text editing with many useful features
                             Features :
                             <li>1. Dark theme features that make the app appear more appealing to the user</li>
                             <li> 2. Convert to Uppercase</li>
                                 <li>3. Convert to Lowercase</li>
                                     <li>3. Speak</li>
                                         <li>4. Reverse</li>
                                             <li> 5. Remove all the symbols</li>
                                                 <li> 6. Extract all numbers</li>
                                                     <li> 7. Capitalize</li>
                                                         <li>  8. Remove Duplicate</li>
                                                             <li>  9. Copy Text</li>
                                                                 <li>  10. Remove Extra Space</li>
                                                                     <li>  11. Words and Characters Count</li>
                                                                         <li>   12. Your Average Read Speed Count</li>
                                                                             <li>   13. Preview</li>
                                                                              <li>   14. Clear text</li>
                         </div>
                     </div>
                 </div>
                 <div className="accordion-item">
                     <h2 className="accordion-header" id="headingThree">
                         <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                             <strong>Browser Compatible </strong>
                         </button>
                     </h2>
                     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                         <div className="accordion-body" style={myStyle}>
                             Using this tool you can count characters in any web browser, such as Chrome, Firefox, Explorer, Safari, or Opera, and it is suitable for counting characters in Facebook, blogs, books, excel spreadsheets, PDFs, essays, etc.

                         </div>
                     </div>
                 </div>
             </div>

         </div>
     )
 }


export default About;