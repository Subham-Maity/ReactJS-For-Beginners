import Comp from "./Comp"

const Student = (props) => {
  return (
    <>
    <h1> {props.name} </h1>
    <h2> {props.age} </h2>
    <Comp name={props.name}/>
    </>
  )
}


export default Student

