function PictureButton(props) {
    const className = props.className;
    const image = props.image;
    const handleClick = props.handleClick;
    const number = props.number;

    return (
        <div className={className}>
            <button>
                <img
                    className="hidden lg:block h-24 w-auto"
                    src={image}
                    alt="Workflow"
                    onClick={() => {
                        handleClick((prev) => {
                            const jsonObj = { ...prev };
                            jsonObj[number] = props.action;
                            return jsonObj;
                        });
                    }}
                />
            </button>
        </div>
    );
}

export default PictureButton;
