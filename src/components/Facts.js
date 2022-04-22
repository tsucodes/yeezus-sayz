function Facts(props) {
    console.log(props.fact)
    return (
        <div className="facts">
            {props.fact.fact}
        </div>
    )
}
export default Facts

