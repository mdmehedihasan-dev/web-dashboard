import OP1 from "/op1.svg";
import OP2 from "/op2.svg";
import OP3 from "/op3.svg";
import BOTTOM from "/bottom.png";


const WhyChooseUs = ()  => {
    return (
        <div className="mb-[40px]" id="why-us">
            <div className="gradient_bg p-5 !bg-none mt-[40px]">
                <div className="container mx-auto px-5 md:px-0 !pt-8">
                    <h1
                        className="text-center text-3xl font-bold mb-10 uppercase"
                        data-aos="fade-left"
                    >
                        Waarom kiezen voor ons?
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4">
                        <div className="white_box px-6 py-10" data-aos="flip-left">
                            <img src={OP1} className="h-10" />
                            <div className="mt-8 font-bold mb-3">
                                Gratis annuleren tot 72 uur van tevoren
                            </div>
                            <p>
                                Plannen veranderd? Geen probleem. Je kunt je boeking tot 72
                                uur van tevoren kosteloos wijzigen of annuleren. Volledig
                                zonder risico.
                            </p>
                        </div>
                        <div className="white_box px-6 py-10" data-aos="flip-left">
                            <img src={OP2} className="h-10" />
                            <div className="mt-8 font-bold mb-3">
                                Kies zelf wanneer we komen
                            </div>
                            <p>
                                Jij bepaalt wanneer we je spullen ophalen en bezorgen.
                                Overdag, ’s avonds of in het weekend — wij passen ons aan
                                jouw agenda aan.
                            </p>
                        </div>
                        <div className="white_box px-6 py-10" data-aos="flip-left">
                            <img src={OP3} className="h-10" />
                            <div className="mt-8 font-bold mb-3">
                                Altijd hulp en betrouwbare koeriers
                            </div>
                            <p>
                                Onze klantenservice staat voor je klaar en onze koeriers
                                zijn ervaren, zorgvuldig en professioneel. Zo ben jij altijd
                                verzekerd van een veilige levering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={BOTTOM} />
        </div>
    );
}

export default WhyChooseUs;