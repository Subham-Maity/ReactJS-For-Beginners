import Comp from "./Comp"
import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <>
    <h1> {props.name} </h1>
    <h2> {props.age} </h2>
    <Comp name={props.name}/>
    </>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

Student.defaultProps = {
  name: "John",
  age: 20
}


export default Student

