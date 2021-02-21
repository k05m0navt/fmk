function Text(props) {
    const className = props.className;
    const text1 = props.text1;
    const text2 = props.text2;
    const text3 = props.text3;
    const text4 = props.text4;

    return (
        <div className={className}>
            <p>{text1}</p>
            <p>{text2}</p>
            <br />
            <p>{text3}</p>
            <br />
            <p>{text4}</p>
        </div>
    );
}

export default Text;
