/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Location = [
  {
    id: 1,
    name: "Abuja",
  },
  {
    id: 2,
    name: "Lagos",
  },
  {
    id: 3,
    name: "Ibadan",
  },
  {
    id: 4,
    name: "Port Harcourt",
  },
  {
    id: 5,
    name: "Enugu",
  },
];
const PopularItems = [
  {
    id: 1,
    name: "3-seater sofa",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 99,
  },
  {
    id: 2,
    name: "Bike",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 19,
  },
  {
    id: 3,
    name: "Dresser",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 29,
  },
  {
    id: 4,
    name: "Double wardrobe",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 39,
  },
  {
    id: 5,
    name: "Washing Machine",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 49,
  },
];
const AllItems = [
  {
    id: 1,
    name: "3-seater sofa",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 99,
  },
  {
    id: 2,
    name: "Bike",
    length: 30,
    width: 40,
    height: 50,
    weight: 30,
    price: 19,
  },
  {
    id: 3,
    name: "Dresser",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 29,
  },
  {
    id: 4,
    name: "Double wardrobe",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 39,
  },
  {
    id: 5,
    name: "Washing Machine",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 49,
  },
  {
    id: 6,
    name: "Dining table",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 59,
  },
  {
    id: 7,
    name: "Office chair",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 69,
  },
  {
    id: 8,
    name: "Bookshelf",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 79,
  },
  {
    id: 9,
    name: "Coffee table",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 89,
  },
  {
    id: 10,
    name: "Recliner",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 109,
  },
  {
    id: 11,
    name: "Desk lamp",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 119,
  },
  {
    id: 12,
    name: "TV stand",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 129,
  },
  {
    id: 13,
    name: "ABC",
    length: 30,
    width: 30,
    height: 30,
    weight: 30,
    price: 139,
  },
];
const AddItems = ({close}) => {
  const fileInputRef = useRef(null);
  const [popularitems, setPopularItems] = useState(PopularItems);
  const [allitems, setAllItems] = useState(AllItems);

  const [searchItems, setSearchItems] = useState([]);
  const [showproduct, setShowProduct] = useState("");

  const [productname, setProductName] = useState("");
  const [prolength, setProLength] = useState("");
  const [prowidth, setProWidth] = useState("");
  const [proheight, setProHeight] = useState("");
  const [material, setMaterial] = useState("");
  const [image, setImage] = useState("");
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);

  const [addeditems, setAddedItems] = useState([]);
  // const [dates, setDates] = useState(Dates)
  useEffect(() => {
    setPopularItems(PopularItems);
    setAllItems(AllItems);
    // setDates(Dates)
  }, []);

  const filterSearchItems = (e) => {
    const searchItem = e.target.value;
    if (searchItem === "") {
      setPopularItems(PopularItems);
    } else {
      const filteredItems = allitems.filter((item) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase())
      );
      console.log(filteredItems, "filteredItems");
      setPopularItems(filteredItems);
      setSearchItems(filteredItems);
    }
  };

  const show_item_data = (item) => {
    // console.log(item, "item");
    setShowProduct(item);
    setProductName(item.name);
    setProLength(item.length);
    setProHeight(item.height);
    setProWidth(item.width);
    setMaterial(item.material);
    setImage(item.image);
    setQty(qty);
    setPrice(item.price);
  };

  const addQuantity = () => {
    setQty(qty + 1);
  };
  const subQuantity = () => {
    if (qty <= 1) {
      return;
    }
    setQty(qty - 1);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDivClick = () => {
    // Trigger the file input when the div is clicked
    fileInputRef.current.click();
  };
  const includesitems = [
    {
      id: 1,
      name: "Glass",
    },
    {
      id: 2,
      name: "Wood",
    },
    {
      id: 3,
      name: "Metal",
    },
    {
      id: 4,
      name: "Plastic",
    },
    {
      id: 5,
      name: "Ceramic",
    },
  ];

  const saveProductToLocalStorage = (product) => {
    let itemsList = JSON.parse(localStorage.getItem("itemslist")) || [];
    // const existingProductIndex = itemsList.findIndex(item => item.name === product.name);
    // if (existingProductIndex !== -1) {
    //   itemsList[existingProductIndex].qty += product.qty;
    // } else {
      itemsList.push(product);
    // }
    localStorage.setItem("itemslist", JSON.stringify(itemsList));
    setAddedItems(itemsList);
  };

  const saveItemsProductsList = () => {
    if(productname == "" || prolength == "" || prowidth == "" || proheight == "" || material == "" || qty == "") {
      toast.error("Please fill all the fields")
      return
    }
    const prolist = {
      name: productname,
      length: prolength,
      width: prowidth,
      height: proheight,
      material: material,
      image: image,
      qty: qty,
      price: price ? price : 30,
    }
    saveProductToLocalStorage(prolist);
    close()
  };
  return (
    <div>
      {showproduct == "" && (
        <div className="border border-[#f0f0f0] rounded-xl p-1 flex items-center gap-1 mb-2 cursor-pointer">
          <span className="ml-2">
            <IoSearch color="#92939E" size={20} />
          </span>
          <input
            type="text"
            onChange={filterSearchItems}
            placeholder="Search items"
            className="p-2 w-full outline-none"
          />
        </div>
      )}
      {/* <h1 className='font-normal uppercase !text-xs  border-t border-[#f0f0f0] pt-3 mt-3' >These are 8 popular items:</h1> */}
      <div
        className={`${
          showproduct == "" && "border-t pt-3 mt-3"
        } w-full border-[#f0f0f0]`}
      >
        {showproduct !== "" ? (
          <>
            <div>
              <div className="flex flex-col gap-2 mb-3">
                <label>Product Name</label>
                <input
                  type="text"
                  name=""
                  className="form-control !pl-4"
                  value={productname}
                  onChange={(e) => setProductName(e.target.value)}
                  readOnly={showproduct?.length != 0 ? true : false}
                />
              </div>

              <div className="flex flex-col gap-2 mb-3">
                <label>Check dimensions (l x w x h):</label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name=""
                      className="form-control !pl-4 !w-full"
                      value={prolength}
                      placeholder="L"
                      onChange={(e) => setProLength(e.target.value)}
                    />
                    <span className="absolute right-3 top-[12px]">cm</span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name=""
                      className="form-control !pl-4 !w-full"
                      value={prowidth}
                      placeholder="W"
                      onChange={(e) => setProWidth(e.target.value)}
                    />
                    <span className="absolute  right-3 top-[12px]">cm</span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name=""
                      className="form-control !pl-4 !w-full"
                      value={proheight}
                      placeholder="H"
                      onChange={(e) => setProHeight(e.target.value)}
                    />
                    <span className="absolute  right-3 top-[12px]">cm</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-3 mt-3">
                <label>Does it contain any of these materials?</label>
                <div className="grid grid-cols-5 gap-4">
                  {includesitems.map((item, index) => (
                    <>
                      <div
                        onClick={() => setMaterial(item.name)}
                        key={index}
                        className={`${
                          material === item.name
                            ? "bg-[var(--primary-color)] text-white"
                            : "bg-white"
                        } p-3 rounded-full shadow-md flex justify-center text-[#616164] cursor-pointer`}
                      >
                        {item?.name}
                      </div>
                    </>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className="flex flex-row p-3 border items-center hover:border-[var(--primary-color)] cursor-pointer border-[#f0f0f0] rounded-lg gap-5 mb-3 mt-6"
                onClick={handleDivClick}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
                <div>
                  {!image ? (
                    <>
                      <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.125 20.3749L25.1102 15.3602C24.5008 14.7509 23.6743 14.4086 22.8125 14.4086C21.9507 14.4086 21.1242 14.7509 20.5148 15.3602L5.75 30.1249M4.125 0.875H26.875C28.6699 0.875 30.125 2.33007 30.125 4.125V26.875C30.125 28.6699 28.6699 30.125 26.875 30.125H4.125C2.33007 30.125 0.875 28.6699 0.875 26.875V4.125C0.875 2.33007 2.33007 0.875 4.125 0.875ZM13.875 10.625C13.875 12.4199 12.4199 13.875 10.625 13.875C8.83007 13.875 7.375 12.4199 7.375 10.625C7.375 8.83007 8.83007 7.375 10.625 7.375C12.4199 7.375 13.875 8.83007 13.875 10.625Z"
                          stroke="#92939E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  ) : (
                    <>
                      <img src={image} alt="Selected" className="h-[31px] w-[31px] object-fit-cover" />
                    </>
                  )}
                </div>
                <div>
                  <p className="uppercase text-[11px] text-[var(--primary-color)] font-semibold">
                    Upload a picture
                  </p>
                  <span className="text-[#616164]">
                    I will be a visual Representation of the furniture
                  </span>
                </div>
              </div>

              {/* QUANTITY */}
              <div className="flex flex-col gap-2 mb-3 mt-3 ">
                <label>Quantity</label>
                <div className="flex justify-between gap-4 p-2 px-4 border items-center  border-[#f0f0f0] rounded-lg">
                  <div className="cursor-pointer" onClick={() => subQuantity()}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="18" height="18" rx="5" fill="#85E211" />
                      <path
                        d="M3.75 9H14.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="font-bold text-lg text-[#4f4f4f]">{qty}</div>
                  <div className="cursor-pointer" onClick={() => addQuantity()}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="18" height="18" rx="5" fill="#85E211" />
                      <path
                        d="M3.75 9H14.25M9 3.75V14.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="website_button w-full justify-center !px-8 hover:bg-[#202020] bg-[var(--primary-color)] uppercase flex items-center gap-3 mt-2"
                  onClick={() => saveItemsProductsList()}
                >
                  Add
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-1 flex flex-col w-full">
              {popularitems.map((item, index) => (
                <>
                  <div
                    className="flex w-full items-center justify-between gap-3 bg-white shadow-lg py-3 px-5 rounded-lg mb-2 cursor-pointer border border-transparent hover:border-[#f0f0f0]"
                    onClick={() => show_item_data(item)}
                  >
                    <span className="text-[14px] capitalize text-[#92939E]">
                      {item.name}
                    </span>
                    <MdKeyboardArrowRight size={20} color="#92939E" />
                  </div>
                </>
              ))}
            </div>
            <div
              className="flex w-full items-center justify-between gap-3 bg-white shadow-lg py-3 px-5 rounded-lg mb-2 cursor-pointer border border-transparent hover:border-[#f0f0f0]"
              onClick={() => show_item_data([])}
            >
              <span className="text-[14px] capitalize text-[#92939E]">
                Or add your item manually
              </span>
              <MdKeyboardArrowRight size={20} color="#92939E" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddItems;
