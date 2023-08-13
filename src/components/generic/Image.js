
function Image({image, alt, height}){
    return (
        <img height={height} src={image} alt={alt} />
    )
}
export default Image