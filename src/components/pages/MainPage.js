import { NavBar } from "../molecules";
import { MPBody } from "../organisms";

function MainPage() {
    const className = "";

    const mpbClassName = "content-center justify-center";

    return (
        <div className={className}>
            <NavBar />
            <MPBody className={mpbClassName} />
        </div>
    );
}

export default MainPage;
