import { NavBar } from "../molecules";
import { TPHeader, TPBody } from "../organisms";

function TopPage() {
    const className = "";
    const tphClassName = "content-center justify-center";
    const tpbClassName = "content-center justify-center";

    return (
        <div className={className}>
            <NavBar />
            <TPHeader className={tphClassName} />
            <TPBody className={tpbClassName} />
        </div>
    );
}

export default TopPage;
