import mainBanner from "../../img/banner.jpg";

function MainBanner() {
    return (
        <div style={{ maxWidth: "100%", maxHeight: "300px" }}>
            <img src={mainBanner} alt="Vision Pro" style={{ width: "100%", height: "auto" }} />
        </div>
    );
}

export default MainBanner;