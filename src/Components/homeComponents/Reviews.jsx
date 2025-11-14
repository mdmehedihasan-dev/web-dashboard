import Slider from "./Slider";

export default function Reviews() {
    return (
        <div className="mt-10">
            <div className="w-full">
                <div className=" !bg-none">
                    <div className="container mx-auto px-5 md:px-0 pt-[30px] pb-[40px]">
                        <div className="flex justify-center items-center flex-col">
                            <div className="bg-pills">TESTIMONIALS</div>
                            <h2 className="uppercase text-[#2A3342] font-bold text-[26px] mt-3">
                                What People Said about us
                            </h2>
                        </div>
                        <div className="mt-10 w-full">
                            <Slider/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}