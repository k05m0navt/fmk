import { useEffect, useState } from "react";
import { PictureButton } from "../atoms";
import condom from "../../assets/buttons/png/condom.png";
import ring from "../../assets/buttons/png/ring.png";
import gibbet from "../../assets/buttons/png/gibbet.png";

function MPBody(props) {
    const className = props.className;

    const imgsClassName = "flex flex-row justify-evenly mt-16 mx-64";
    const imClassName = "w-88 rounded-lg";

    const btnsClassName = "flex flex-row justify-evenly mt-5";
    const btnClassName = "";

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

    return (
        <div className={className}>
            <div className={imgsClassName}>
                {threePhotos
                    ? threePhotos.map((person) => {
                          return (
                              <div>
                                  <img
                                      className={imClassName}
                                      key={person["id"]}
                                      src={serverAddr + person["photo_m"]}
                                      alt={person["first_name"]}
                                  />
                                  <div className={btnsClassName}>et
                                      <PictureButton
                                          className={btnClassName}
                                          image={condom}
                                      />
                                      <PictureButton
                                          className={btnClassName}
                                          image={ring}
                                      />
                                      <PictureButton
                                          className={btnClassName}
                                          image={gibbet}
                                      />
                                  </div>
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
    );
}

export default MPBody;
