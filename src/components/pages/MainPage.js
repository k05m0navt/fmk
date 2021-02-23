import { NavBar } from "../molecules";
import { MPHeader, MPBody } from "../organisms";

function MainPage() {
    const className = "";

    const mpbClassName = "content-center justify-center";
    const mphClassName = "";

    return (
        <div className={className}>
            <NavBar />
            <MPHeader className={mphClassName} />
            <MPBody className={mpbClassName} />
        </div>
    );
}

export default MainPage;
