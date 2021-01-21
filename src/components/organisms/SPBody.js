import { Text, LinkButton } from "../atoms";

function SPBody(props) {
    const className = props.className;

    const textClassName = "";
    const paragraph = "";

    const lbClassName = "";
    const btnClassName = "";
    const linkTo = "";
    const btnText = "";

    return (
        <div className={className}>
            <Text className={textClassName} text={paragraph} />
            <LinkButton
                className={lbClassName}
                linkTo={linkTo}
                btnClassName={btnClassName}
                text={btnText}
            />
        </div>
    );
}

export default SPBody;
