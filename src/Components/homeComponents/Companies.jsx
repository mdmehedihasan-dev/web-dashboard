import Img1 from "/1.png";
import Img2 from "/2.png";
import Img3 from "/3.png";
import Img4 from "/4.png";

const Companies = () => {
    return (
        <div className="gradient_bg p-5 !bg-none mt-[40px] mb-[40px]">
            <div className="container mx-auto px-5 md:px-0 !pt-2 !pb-2">
                <div className="grid grid-cols-4" data-aos="fade-left">
                    <img src={Img1} />
                    <img src={Img2} />
                    <img src={Img3} />
                    <img src={Img4} />
                </div>
            </div>
        </div>
    );
}

export default Companies;
