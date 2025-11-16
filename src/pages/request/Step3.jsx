import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import toast from "react-hot-toast";

// import ModalPopup from "../../Components/Modal";
import { RiDeleteBin5Line } from "react-icons/ri";
import ModalPopup from "../../Components/dashboardComponents/ModalPopup";

const getDateSlots = () => {
  const today = new Date();
  const timeslot = [];

  for (let i = 0; i < 10; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${month}/${day}`;

    let price;
    if (i === 0) price = "102.50";
    else if (i === 1) price = "75";
    else if (i === 2) price = "35";
    else if (i === 3) price = "15";
    else price = "0";

    timeslot.push({
      id: i + 1,
      name: date.toISOString().split("T")[0],
      price: price,
    });
  }

  return timeslot;
};

const timeslot = getDateSlots();

const pickuptimeslot = [
  {
    id: 1,
    name: "12:00 - 16:00",
    price: "17.50",
  },
  {
    id: 2,
    name: "13:00 - 17:00",
    price: "7.50",
  },
  {
    id: 3,
    name: "14:00 - 18:00",
    price: "7",
  },
  {
    id: 4,
    name: "15:00 - 19:00",
    price: "0",
  },
];

const deliverytimeslot = [
  {
    id: 1,
    name: "8:00 - 12:00",
    price: "33.50",
  },
  {
    id: 2,
    name: "13:00 - 17:00",
    price: "17.50",
  },
  {
    id: 3,
    name: "15:00 - 19:00",
    price: "7",
  },
  {
    id: 4,
    name: "19:00 - 23:00",
    price: "0",
  },
];

const Step3 = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [show, setShow] = useState("");
  const [qty, setQty] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [itemsdata, setItemData] = useState(timeslot);
  const [pickuptime, setPickupTime] = useState(pickuptimeslot);
  const [deliverytime, setDeliveryTime] = useState(deliverytimeslot);
  const [pickup, setPickup] = useState(null);
  const [pickuptimeopt, setPickupTimeOpt] = useState(null);
  const [deliverytimeopt, setDeliveryTimeOpt] = useState(null);
  const [currentStep, setCurrentStep] = useState(1); // 1: date, 2: pickup time, 3: delivery time

  useEffect(() => {
    // Load saved selections from localStorage
    const savedPickupDate = localStorage.getItem("pickup");
    const savedPickupTime = localStorage.getItem("pickuptimename");
    const savedDeliveryTime = localStorage.getItem("deliverytimename");

    if (savedPickupDate) {
      const selectedDate = timeslot.find((t) => t.name === savedPickupDate);
      if (selectedDate) {
        setPickup(selectedDate);
        
        if (savedPickupTime) {
          const selectedPickupTime = pickuptimeslot.find((t) => t.name === savedPickupTime);
          if (selectedPickupTime) {
            setPickupTimeOpt(selectedPickupTime);
            
            if (savedDeliveryTime) {
              const selectedDeliveryTime = deliverytimeslot.find((t) => t.name === savedDeliveryTime);
              if (selectedDeliveryTime) {
                setDeliveryTimeOpt(selectedDeliveryTime);
                setCurrentStep(3);
              } else {
                setCurrentStep(2);
              }
            } else {
              setCurrentStep(2);
            }
          } else {
            setCurrentStep(1);
          }
        } else {
          setCurrentStep(1);
        }
      }
    }
  }, []);

  const transportOption = (val = "") => {
    if (!val) {
      toast.error("Please select pickup date!");
      return;
    }
    setPickup(val);
    localStorage.setItem("pickup", val.name);
    localStorage.setItem("pickupprice", val.price);
    setCurrentStep(2); // Move to pickup time selection
  };

  const transportOptionPickup = (val = "") => {
    if (!val) {
      toast.error("Please select pickup time slot!");
      return;
    }
    setPickupTimeOpt(val);
    localStorage.setItem("pickuptimename", val.name);
    localStorage.setItem("pickuptimeprice", val.price);
    setCurrentStep(3); // Move to delivery time selection
  };

  const transportOptionDelivery = (val = "") => {
    if (!val) {
      toast.error("Please select delivery time slot!");
      return;
    }
    setDeliveryTimeOpt(val);
    localStorage.setItem("deliverytimename", val.name);
    localStorage.setItem("deliverytimeprice", val.price);
    navigate("/request/form/step/4");
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1: // Date selection
        return (
          <>
            <p className="mt-2">Pick-up: select a date</p>
            <div className="mt-6">
              {itemsdata?.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-row p-3 border items-center justify-between hover:border-primary cursor-pointer border-[#f0f0f0] rounded-lg gap-5 mt-3 ${
                    pickup?.name === item.name ? "border-primary" : ""
                  }`}
                  onClick={() => transportOption(item)}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="uppercase text-[14px] text-primary font-semibold">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-lg font-semibold">${item.price}</div>
                </div>
              ))}
            </div>
          </>
        );
      
      case 2: // Pickup time selection
        return (
          <>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-primary">Selected date:</p>
              <p>{pickup?.name}</p>
            </div>
            <p className="mt-2">Pick-up: select a timeslot</p>
            <div className="mt-6">
              {pickuptime?.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-row p-3 border items-center justify-between hover:border-primary cursor-pointer border-[#f0f0f0] rounded-lg gap-5 mt-3 ${
                    pickuptimeopt?.name === item.name ? "border-primary" : ""
                  }`}
                  onClick={() => transportOptionPickup(item)}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="uppercase text-[14px] text-primary font-semibold">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-lg font-semibold">${item.price}</div>
                </div>
              ))}
            </div>
          </>
        );
      
      case 3: // Delivery time selection
        return (
          <>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-primary">Selected date:</p>
              <p>{pickup?.name}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <p className="font-semibold text-primary">Selected pickup time:</p>
              <p>{pickuptimeopt?.name}</p>
            </div>
            <p className="mt-2">Delivery: select a timeslot</p>
            <div className="mt-6">
              {deliverytime?.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-row p-3 border items-center justify-between hover:border-primarycursor-pointer border-[#f0f0f0] rounded-lg gap-5 mt-3 ${
                    deliverytimeopt?.name === item.name ? "border-primary" : ""
                  }`}
                  onClick={() => transportOptionDelivery(item)}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="uppercase text-[14px] text-primary font-semibold">
                        {item.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-lg font-semibold">${item.price}</div>
                </div>
              ))}
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="container px-5 py-10 mx-auto">
      <div>
        <h2 className="font-bold text-[18px] text-primary uppercase">
          Date & Time
        </h2>
        
        {renderCurrentStep()}
        
        <div className="flex justify-end mt-6">
          {currentStep > 1 && (
            <button 
              className="px-4 py-2 mr-2 bg-gray-200 rounded-md"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </button>
          )}
        </div>
      </div>

      <ModalPopup
        open={modalOpen}
        close={closeModal}
        heading="Add your item(s)"
        content="additems"
        show_buttons={false}
        show_buttons_not={false}
      />
    </div>
  );
};

export default Step3;