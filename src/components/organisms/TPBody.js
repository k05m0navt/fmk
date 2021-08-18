import { useEffect, useState } from "react";
import { PictureButton } from "../atoms";
import condom from "../../assets/buttons/png/condom.png";
import ring from "../../assets/buttons/png/ring.png";
import gibbet from "../../assets/buttons/png/gibbet.png";

function TPBody(props) {
    const className = props.className;

    const imClassName = "w-88 rounded-lg";
    const imgsClassName = "flex flex-row justify-evenly mt-12 mx-64";

    const btnClassName = "flex justify-center mt-5";

    const [threePhotos, setThreePhotos] = useState(null);
    const serverAddr = "http://0.0.0.0:8000/";
    const getThreePhotos = "api/dashboard/";

    useEffect(() => {
        fetch(serverAddr + getThreePhotos)
            .then((response) => response.json())
            .then((json) => {
                setThreePhotos(json[0]);
            });
    }, [serverAddr, getThreePhotos]);

    console.log(threePhotos);

    return (
        <div className={className}>
            {threePhotos ? (
                <div className={imgsClassName}>
                    <div>
                        <img
                            className={imClassName}
                            key={threePhotos["f_top"]["id"]}
                            src={threePhotos["f_top"]["photo_m"]}
                            alt={threePhotos["f_top"]["first_name"]}
                        />
                        <PictureButton
                            className={btnClassName}
                            image={condom}
                        />
                    </div>
                    <div>
                        <img
                            className={imClassName}
                            key={threePhotos["m_top"]["id"]}
                            src={threePhotos["m_top"]["photo_m"]}
                            alt={threePhotos["m_top"]["first_name"]}
                        />
                        <PictureButton className={btnClassName} image={ring} />
                    </div>
                    <div>
                        <img
                            className={imClassName}
                            key={threePhotos["k_top"]["id"]}
                            src={threePhotos["k_top"]["photo_m"]}
                            alt={threePhotos["k_top"]["first_name"]}
                        />
                        <PictureButton
                            className={btnClassName}
                            image={gibbet}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default TPBody;
