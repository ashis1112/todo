import PropTypes from 'prop-types'

const Button=({color,text,click})=>{
    
    return(
        <button className="btn" style={{backgroundColor:color}} onClick={click} >{text}</button>

    )
}

Button.defaultProps={
    color:'steelblue'
}

Button.propTypes={
    color:PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func,
}

export default Button