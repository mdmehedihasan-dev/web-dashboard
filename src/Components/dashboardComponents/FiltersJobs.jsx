/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DummyLocations = [
  { id: 1, name: "Abuja" },
  { id: 2, name: "Lagos" },
  { id: 3, name: "Ibadan" },
  { id: 4, name: "Port Harcourt" },
  { id: 5, name: "Enugu" },
];

const Dates = [
  { id: 1, name: "View all days" },
  { id: 2, name: "Today" },
  { id: 3, name: "Tomorrow" },
  { id: 4, name: "Custom Date" },
];

const FiltersJobs = ({ filters, setFilters }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSortChange = (e) => {
    setFilters({ ...filters, sortByPrice: e.target.value });
  };

  const handleLocationChange = (locationName, isChecked) => {
    const newLocations = isChecked
      ? [...filters.locations, locationName]
      : filters.locations.filter((loc) => loc !== locationName);

    setFilters({ ...filters, locations: newLocations });
  };

  const handleDateChange = (dateName) => {
    if (dateName === "Custom Date") {
      setFilters({
        ...filters,
        dateFilter: "custom",
        customDate: selectedDate,
      });
    } else {
      setSelectedDate(null);
      setFilters({
        ...filters,
        dateFilter: dateName.toLowerCase().replace(" ", "-"),
        customDate: null,
      });
    }
  };

  return (
    <div className="space-y-4">
      {/* Sort By Price */}
      <div className="w-full">
        <h3 className="font-semibold text-md">Sort By</h3>
        <select
          className="mt-2 w-auto border border-[#EEEEF0] py-3 px-3 rounded-xl"
          value={filters.sortByPrice}
          onChange={handleSortChange}
        >
          <option value="">Select</option>
          <option value="low-to-high">By Price (Low to High)</option>
          <option value="high-to-low">By Price (High to Low)</option>
        </select>
      </div>

      {/* By Location */}
      <div className="w-full mt-4">
        <h3 className="font-semibold text-md mb-2">By Pickup Location</h3>

        <div className="grid grid-cols-2 gap-2">
          {DummyLocations.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.locations.includes(item.name)}
                onChange={(e) =>
                  handleLocationChange(item.name, e.target.checked)
                }
                className="h-4 w-4"
              />
              <span className="text-[#92939E] text-md">{item.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* By Date */}
      <div className="w-full mt-4">
        <h3 className="font-semibold text-md mb-2">By Date</h3>
        <div className="grid grid-cols-2 gap-2">
          {Dates.map((item) => (
            <div key={item.id}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="dateFilter"
                  checked={
                    (item.name === "Custom Date" &&
                      filters.dateFilter === "custom") ||
                    filters.dateFilter ===
                      item.name.toLowerCase().replace(" ", "-")
                  }
                  onChange={() => handleDateChange(item.name)}
                  className="h-4 w-4"
                />
                <span className="text-[#92939E] text-md">{item.name}</span>
              </label>

              {/* Custom Date Picker */}
              {item.name === "Custom Date" &&
                filters.dateFilter === "custom" && (
                  <div className="mt-2 ml-6">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date);
                        setFilters({ ...filters, customDate: date });
                      }}
                      className="border border-[#EEEEF0] py-2 px-3 rounded-xl"
                      placeholderText="Select date"
                    />
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersJobs;
