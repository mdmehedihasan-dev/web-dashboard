import React, { useEffect, useState } from "react";
import useFetch from "../../Components/dashboardComponents/useFetch";
import toast from "react-hot-toast";
import { List, Truck, CheckCircle, DollarSign } from "lucide-react";
import ModalPopup from "../../Components/dashboardComponents/ModalPopup";
import LineChart from "../../Components/dashboardComponents/LineChart";

const JobsData = [
  { id: 1, from: "", to: "", from_time: "", end_time: "", price: "", type: "", status: "", posted_date: "" },
  { id: 2, from: "", to: "", from_time: "", end_time: "", price: "", type: "", status: "", posted_date: "" },
  { id: 3, from: "", to: "", from_time: "", end_time: "", price: "", type: "", status: "", posted_date: "" },
  { id: 4, from: "", to: "", from_time: "", end_time: "", price: "", type: "", status: "", posted_date: "" },
  { id: 5, from: "", to: "", from_time: "", end_time: "", price: "", type: "", status: "", posted_date: "" },
  { id: 6, from: "", to: "", from_time: "", end_time: "", price: "", type: "", status: "", posted_date: "" },
];

const Dashboard = () => {
  const [jobs, setJobs] = useState(JobsData);

  // since redux is removed → demo values
  const user = { name: "Demo User", role: "user" };
  const userType = "user"; // or "courier"

  const urlPath = window.location.pathname;
  const { fetchData } = useFetch();
  const [userRequests, setUserRequests] = useState([]);
  const [tab, setTab] = useState("pending");
  const [totalJobs, setTotalJobs] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sideOpen, setSideOpen] = useState(false);

  const lastSegment = urlPath.split("/").filter(Boolean).pop();
  const [date, setDate] = useState();
  const [courierStats, setCourierStats] = useState({});

//   const getUserRequests = async () => {
//     setLoading(true);
//     try {
//       const response = await fetchData(
//         `${GET_USER_REQUESTS}?status=${tab}&date=${date}`
//       );
//       setUserRequests(response.data?.requests);
//       setTotalJobs(response.data?.totalJobs);
//     } catch (error) {
//       console.log("Error fetching user requests:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const { deleteData } = useDelete();
//   const handleDelete = async (job) => {
//     try {
//       const response = await deleteData(
//         `${DELETE_COURIER_REQUEST}/${job._id}/${job?.status}`
//       );
//       toast.success(response?.data?.message || "Job deleted successfully");
//       getUserRequests();
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const getCourierRequests = async () => {
//     setLoading(true);
//     try {
//       const response = await fetchData(GET_COURIER_STATS);
//       setCourierStats(response.data);
//     } catch (error) {
//       console.log("Error fetching user requests:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (userType === "user") getUserRequests();
//     if (userType === "courier") getCourierRequests();
//   }, [tab, date]);

  return (
    <div>
      <>
        <h1 className="font-bold text-[17px] w-full my-5">User Dashboard</h1>
        <div className="white_box w-full px-4 py-4 flex justify-between items-center mt-5">
          <div className="flex gap-5 items-center">
            <List size={20} color="#85E211" />
            <div className="uppercase text-[17px] font-bold">Total Jobs Posted</div>
          </div>
          <div className="font-bold text-4xl mr-3">50</div>
        </div>
      </>

      <>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-[17px] w-full my-5">Courier Dashboard</h1>
        </div>

        <div className="flex justify-between items-stretch gap-4 mt-4 md:flex-row flex-col">
          <div className="flex justify-between items-start flex-col gap-3 w-full md:w-[18%]">
            <div className="white_box w-full px-4 py-4 flex justify-between items-start flex-col">
              <div className="flex gap-3 items-center">
                <Truck size={18} color="#85E211" />
                <div className="text-[12px] font-normal">Active Shipments</div>
              </div>
              <div className="font-semibold text-xl mt-4">10</div>
            </div>

            <div className="white_box w-full px-4 py-4 flex justify-between items-start flex-col">
              <div className="flex gap-3 items-center">
                <CheckCircle size={18} color="#85E211" />
                <div className="text-[12px] font-normal">Success Deliveries</div>
              </div>
              <div className="font-semibold text-xl mt-4">8</div>
            </div>

            <div className="white_box w-full px-4 py-4 flex justify-between items-start flex-col">
              <div className="flex gap-3 items-center">
                <DollarSign size={18} color="#85E211" />
                <div className="text-[12px] font-normal">Revenue</div>
              </div>
              <div className="font-semibold text-xl mt-4">$200</div>
            </div>
          </div>

          <div className="white_box w-full md:w-[82%]">
            <LineChart/>
          </div>
        </div>

        <ModalPopup
          open={modalOpen}
          close={() => setModalOpen(false)}
          heading="Filter By Date"
          content="date_popup"
          subcontent="Please select a date to filter"
          setDate={setDate}
          date={date}
        />
      </>
    </div>
  );
};

export default Dashboard;
