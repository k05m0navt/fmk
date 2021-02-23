import { Text } from "../atoms";

function MPHeader(props) {
    const className = props.className;

    const textClassName = "flex justify-center text-5xl text-white mt-5";
    const text = "Make your choice";

    return (
        <div className={className}>
            <Text className={textClassName} text={text} />
        </div>
    );
}

export default MPHeader;
