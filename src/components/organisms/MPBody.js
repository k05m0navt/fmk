import { useEffect, useState } from "react";
import { PictureButton, SubmitButton } from "../atoms";
import condom from "../../assets/buttons/png/condom.png";
import ring from "../../assets/buttons/png/ring.png";
import gibbet from "../../assets/buttons/png/gibbet.png";

function MPBody(props) {
    const className = props.className;

    const imgsClassName = "flex flex-row justify-evenly mt-12 mx-64";
    const imClassName = "w-88 rounded-lg";

    const btnsClassName = "flex flex-row justify-evenly mt-5";
    const btnClassName = "";

    const btn2ClassName =
        "text-3xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-pink-500 hover:to-yellow-500 text-yellow-300 hover:text-white py-4 px-12 rounded-full font-sans";
    const sbClassName = "flex justify-center mt-6";
    const btn2Text = "Submit";

    const [threePhotos, setThreePhotos] = useState(null);
    const serverAddr = "http://0.0.0.0:8000/";
    const getThreePhotos = "api/get_triplet/";

    useEffect(() => {
        fetch(serverAddr + getThreePhotos)
            .then((response) => response.json())
            .then((json) => {
                json[0]["triplet"][0]["number"] = 1;
                json[0]["triplet"][1]["number"] = 2;
                json[0]["triplet"][2]["number"] = 3;
                setThreePhotos(json[0]["triplet"]);
            });
    }, [serverAddr, getThreePhotos]);

    return (
        <div className={className}>
            <div className={imgsClassName}>
                {threePhotos
                    ? threePhotos.map((person) => {
                          return (
                              <div key={person["id"]}>
                                  <img
                                      className={imClassName}
                                      key={person["id"]}
                                      src={person["photo_m"]}
                                      alt={person["first_name"]}
                                  />
                                  <div className={btnsClassName}>
                                      <PictureButton
                                          className={btnClassName}
                                          image={condom}
                                          number={person.number}
                                      />
                                      <PictureButton
                                          className={btnClassName}
                                          image={ring}
                                          number={person.number}
                                      />
                                      <PictureButton
                                          className={btnClassName}
                                          image={gibbet}
                                          number={person.number}
                                      />
                                  </div>
                              </div>
                          );
                      })
                    : null}
            </div>
            <SubmitButton
                className={sbClassName}
                btnClassName={btn2ClassName}
                text={btn2Text}
            />
        </div>
    );
}

export default MPBody;
