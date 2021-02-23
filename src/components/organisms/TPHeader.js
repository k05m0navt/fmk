import { Text } from "../atoms";

function TPHeader(props) {
    const className = props.className;

    const textClassName = "flex justify-center text-5xl text-white mt-10";
    const text = "Leaderboard";

    return (
        <div className={className}>
            <Text className={textClassName} text={text} />
        </div>
    );
}

export default TPHeader;
