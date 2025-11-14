import Delivery from "/delivery.svg";


const Couriers = () => {
    return (
        <div className="mt-6" id="how-it-works" data-aos="zoom-out">
            <div className="w-full">
                <div className="">
                    <div className="container mx-auto px-5 md:px-0 pt-[30px] pb-[40px]">
                        <div className="grid grid-cols-1 md:grid-cols-2  mt-[20px] ">
                            <div className="flex flex-col justify-center gap-4 w-full md:w-[80%]">
                                <div className="bg-pills w-[90px]">COURIERS</div>
                                <h2 className="uppercase text-[#2A3342] font-bold text-[26px] mt-1 text-center md:text-left">
                                    Samen maken we impact
                                </h2>
                                <p className="text-[#556987]">
                                    Bij ons kunnen alleen goedgekeurde, professionele koeriers
                                    aan de slag die staan ingeschreven bij de Kamer van
                                    Koophandel. Elke koerier wordt zorgvuldig gescreend via
                                    een proces in vier eenvoudige stappen:
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <img src={Delivery} className="h-[240px]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-1 mt-1 md:mt-6">
                            <div
                                className="white_box px-6 md:py-10 py-1 !shadow-none"
                                data-aos="flip-left"
                            >
                                <div className="w-[34px] mb-2 h-[34px] text-white rounded-full flex items-center justify-center bg-[#22C55E] font-bold">
                                    1
                                </div>
                                <h2 className=" text-[#2A3342] font-bold text-[16px]">
                                    Registratie
                                </h2>
                                <div className="mt-2 text-[#556987]">
                                    Je schrijft je in met je KvK-gegevens en een geldig
                                    rijbewijs. Na het accepteren van onze voorwaarden, stellen
                                    we een samenwerkingsovereenkomst op tussen jou en Koerier
                                    Platform. Zodra deze ondertekend is, gaan we verder met de
                                    verificatie.
                                </div>
                            </div>

                            <div
                                className="white_box px-6 md:py-10 py-1 !shadow-none"
                                data-aos="flip-left"
                            >
                                <div className="w-[34px] mb-2 h-[34px] text-white rounded-full flex items-center justify-center bg-[#22C55E] font-bold">
                                    2
                                </div>
                                <h2 className=" text-[#2A3342] font-bold text-[16px]">
                                    Verificatie
                                </h2>
                                <div className="mt-2 text-[#556987]">
                                    We controleren je identiteit en bekijken of je voldoende
                                    ervaring hebt als koerier. Ook checken we of je beschikt
                                    over de juiste uitrusting, zoals een betrouwbare fiets of
                                    scooter, beschermende kleding en een werkende smartphone.
                                </div>
                            </div>

                            <div
                                className="white_box px-6 md:py-10 py-1 !shadow-none"
                                data-aos="flip-left"
                            >
                                <div className="w-[34px] mb-2 h-[34px] text-white rounded-full flex items-center justify-center bg-[#22C55E] font-bold">
                                    3
                                </div>
                                <h2 className=" text-[#2A3342] font-bold text-[16px]">
                                    Accountactivatie
                                </h2>
                                <div className="mt-2 text-[#556987]">
                                    Na goedkeuring wordt je account geactiveerd. Je kunt dan
                                    direct aan de slag via ons platform en profiteren van alle
                                    voordelen die we bieden.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Couriers;