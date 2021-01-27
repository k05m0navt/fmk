import { useEffect, useState } from "react";

function MPBody(props) {
    const className = props.className;
    const [threePhotos, setThreePhotos] = useState(null);
    const getThreePhotos = "http://0.0.0.0:8000/api/get_triplet/";

    useEffect(() => {
        fetch(getThreePhotos)
            .then((response) => response.json())
            .then((json) => {
                setThreePhotos(json[0]["triplet"]);
            });
    }, [getThreePhotos]);

    return <div className={className}></div>;
}

export default MPBody;
