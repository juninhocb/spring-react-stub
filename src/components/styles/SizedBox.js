function SizedBox({width, height}){
    const boxStyle = {
        width: width || "auto",
        height: height || "auto",
    };

    return(
        <div style={boxStyle}/>
    )
}

export default SizedBox