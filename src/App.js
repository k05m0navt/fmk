import Background from "./assets/background.png";

var backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
};

function App() {
    return <div className="App" style={backgroundStyle}></div>;
}

export default App;
