import { Text, LinkButton } from "../atoms";
import maintext from "../../assets/maintextsvg.svg";

function SPBody(props) {
    const className = props.className;

    const textClassName =
        "w-320 text-3xl text-yellow-300 font-sans whitespace-normal";

    //TODO Change text
    // const paragraph1 =
    //     "You are bored and feel lonely? Wonder how to spend your free time?";
    // const paragraph2 = "Then welcome to FuckMarryKill!";
    // const paragraph3 =
    //     "The rules of this game are simple: You will get 3 people’s photos. Your task is to choose the person, who is the best choice for either one night stand, the regular customer or the one who has no way to get there.";
    // const paragraph4 = "What are you waiting for? Start the game!";

    const lbClassName = "mt-16";
    const btnClassName =
        "text-5xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-pink-500 hover:to-yellow-500 text-yellow-300 hover:text-white py-4 px-12 rounded-full font-sans";

    const linkTo = "/main";
    const btnText = "START";

    return (
        <div className={className}>
            <img className={textClassName} src={maintext} />
            {/* <Text
                className={textClassName}
                text1={paragraph1}
                text2={paragraph2}
                text3={paragraph3}
                text4={paragraph4}
            /> */}
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
