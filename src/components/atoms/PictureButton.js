function PictureButton(props) {
    const className = props.className;
    const image = props.image;
    const onClick = props.onClick;

    return (
        <div className={className}>
            <button>
                <img
                    className="hidden lg:block h-28 w-auto"
                    src={image}
                    alt="Workflow"
                    onClick={onClick}
                />
            </button>
        </div>
    );
}

export default PictureButton;
