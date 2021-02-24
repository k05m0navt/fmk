import { LinkButton } from "../atoms";
import maintext from "../../assets/maintextsvg.svg";

function SPBody(props) {
    const className = props.className;

    const textClassName = "w-3/5";

    const lbClassName = "mt-16";
    const btnClassName =
        "text-5xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-pink-500 hover:to-yellow-500 text-yellow-300 hover:text-white py-4 px-12 rounded-full font-sans";

    const linkTo = "/main";
    const btnText = "START";

    return (
        <div className={className}>
            <img className={textClassName} src={maintext} alt="" />
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
