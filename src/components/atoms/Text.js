function Text(props) {
    const className = props.className;
    const text = props.text;

    return (
        <div className={className}>
            <p>{text}</p>
        </div>
    );
}

export default Text;
