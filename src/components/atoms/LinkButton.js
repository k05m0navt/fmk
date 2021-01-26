import { Link } from "react-router-dom";

function LinkButton(props) {
    const className = props.className;
    const linkTo = props.linkTo;
    const btnClassName = props.btnClassName;
    const text = props.text;

    return (
        <div className={className}>
            <Link to={linkTo}>
                <button className={btnClassName}>{text}</button>
            </Link>
        </div>
    );
}

export default LinkButton;
