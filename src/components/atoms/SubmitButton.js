function SubmitButton(props) {
    const className = props.className;
    const btnClassName = props.btnClassName;
    const text = props.text;

    return (
        <div className={className}>
            <button className={btnClassName}>{text}</button>
        </div>
    );
}

export default SubmitButton;
