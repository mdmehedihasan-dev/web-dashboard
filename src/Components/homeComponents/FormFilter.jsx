import { SlLocationPin } from "react-icons/sl";

import {
    Autocomplete,
    useJsApiLoader,
} from "@react-google-maps/api";
import { useRef, useState } from "react";

export default function FormFilter() {
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
      const inputRef = useRef(null);
      const inputRef2 = useRef(null);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
         googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
        libraries: ["places"],
    });
    const onsubmit = (e) => {
        e.preventDefault();
        if (!fromclicked) {
            toast.error("Please select FROM address from Google Location!");
            return;
        }
        if (!toclicked) {
            toast.error("Please select TO address from Google Location!");
            return;
        }
        const value = {
            from,
            to,
        };
        localStorage.setItem("location", JSON.stringify(value));
        setFromClicked(false);
        setToClicked(false);
        navigate("/request/form/step/1");
    };
    const autocompleteOptions = {
        componentRestrictions: { country: "nl" }, 
        types: ["address"], 
    };
    return (
        <div
            style={{ background: "rgba(133, 226, 17, 0.13)" }}
            className="p-6 text-center"
            id="booking-section"
        >
            <div className="container mx-auto px-5 md:px-0">
                <h2 className="font-bold uppercase text-lg" data-aos="zoom-in">
                    Book your transport
                </h2>
                <form
                    onSubmit={onsubmit}
                    method="post"
                    className="border border-[#D5D5D5] py-2 px-3  mb-2 bg-white rounded-xl mt-4 flex items-center justify-between md:flex-row flex-col gap-4 md:gap-0"
                >
                    <div
                        className="flex items-center gap-3 md:w-[40%]"
                        data-aos="fade-left"
                    >
                        <SlLocationPin color="#85E211" size={18} />
                        <p className="font-semibold">FROM</p>
                        {isLoaded && (
                            <div className="w-full">
                                <Autocomplete
                                    onLoad={(ref) => (inputRef.current = ref)}
                                    onPlaceChanged={() => handlePlaceChanged("from")}
                                    options={autocompleteOptions}
                                >
                                    <input
                                        className="outline-none p-4 w-full"
                                        placeholder="Enter Locality or address"
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                    />
                                </Autocomplete>
                            </div>
                        )}
                    </div>
                    <div
                        className="flex items-center gap-3 md:w-[40%]"
                        data-aos="fade-left"
                    >
                        <SlLocationPin color="#85E211" size={18} />
                        <p className="font-semibold">TO</p>
                        {isLoaded && (
                            <div className="w-full">
                                <Autocomplete
                                    onLoad={(ref) => (inputRef2.current = ref)}
                                    onPlaceChanged={() => handlePlaceChanged("to")}
                                    options={autocompleteOptions}
                                >
                                    <input
                                        className="outline-none p-4 w-full"
                                        placeholder="Enter Locality or address"
                                        value={to}
                                        onChange={(e) => setTo(e.target.value)}
                                    />
                                </Autocomplete>
                            </div>
                        )}
                    </div>
                    <div className="md:w-[20%] w-full" data-aos="fade-right">
                        <button className="p-4 rounded-xl bg-[var(--primary-color)] hover:bg-[var(--text-color)] text-bold text-white w-full  flex items-center justify-between gap-3">
                            <span className="font-bold text-[15px]">Calculate Price</span>
                            <svg
                                width="20"
                                height="18"
                                viewBox="0 0 20 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.208008 8.99992C0.208008 8.58552 0.372628 8.1881 0.665654 7.89507C0.958679 7.60204 1.35611 7.43742 1.77051 7.43742H14.1455L10.0413 3.33326C9.76534 3.03706 9.61509 2.6453 9.62223 2.2405C9.62937 1.83571 9.79335 1.44949 10.0796 1.16321C10.3659 0.876935 10.7521 0.712952 11.1569 0.70581C11.5617 0.698668 11.9535 0.848924 12.2497 1.12492L19.0205 7.89576C19.3131 8.18873 19.4775 8.58586 19.4775 8.99992C19.4775 9.41399 19.3131 9.81112 19.0205 10.1041L12.2497 16.8749C11.9535 17.1509 11.5617 17.3012 11.1569 17.294C10.7521 17.2869 10.3659 17.1229 10.0796 16.8366C9.79335 16.5504 9.62937 16.1641 9.62223 15.7593C9.61509 15.3546 9.76534 14.9628 10.0413 14.6666L14.1455 10.5624H1.77051C1.35611 10.5624 0.958679 10.3978 0.665654 10.1048C0.372628 9.81175 0.208008 9.41432 0.208008 8.99992Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}