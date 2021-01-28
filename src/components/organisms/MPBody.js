import { useEffect, useState } from "react";

function MPBody(props) {
    const className = props.className;

    const imgsClassName = "flex flex-row justify-evenly mt-16";
    const imClassName = "object-fill h-full w-88";

    const [threePhotos, setThreePhotos] = useState(null);
    const serverAddr = "http://0.0.0.0:8000/";
    const getThreePhotos = "api/get_triplet/";

    useEffect(() => {
        fetch(serverAddr + getThreePhotos)
            .then((response) => response.json())
            .then((json) => {
                setThreePhotos(json[0]["triplet"]);
            });
    }, [serverAddr, getThreePhotos]);

    console.log(threePhotos);
    return (
        <div className={className}>
            <div className={imgsClassName}>
                {threePhotos
                    ? threePhotos.map((person) => {
                          return (
                              <img
                                  className={imClassName}
                                  key={person["id"]}
                                  src={serverAddr + person["photo_m"]}
                                  alt={person["first_name"]}
                              />
                          );
                      })
                    : null}
            </div>
        </div>
    );
}

export default MPBody;
