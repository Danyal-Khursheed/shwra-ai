"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const countries = [
  {
    code: "+966",
    value: "sa",
  },
  // Easily add more countries later
];

const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = countries.find((c) => c.code === e.target.value);
    if (selected) {
      setSelectedCountry(selected);
    }
  };

  return (
    <div className="flex items-center gap-1 relative">
      <select
        value={selectedCountry.code}
        onChange={handleChange}
        className="appearance-none pr-5 bg-transparent text-black font-semibold focus:outline-none cursor-pointer"
      >
        {countries.map((country) => (
          <option key={country.value} value={country.code}>
            {country.code}
          </option>
        ))}
      </select>
      <FiChevronDown className="absolute right-0 text-gray-500 pointer-events-none" />
    </div>
  );
};

export default CountryDropdown;
