import React from "react";

const EmployeeCard = ({ imageUrl, name, position }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
      <img src={imageUrl} alt={name} className="rounded-full w-32 h-32 mb-2" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{position}</p>
    </div>
  );
};

const EmployeeList = () => {
  const employees = [
    { imageUrl: "https://imgs.search.brave.com/bFF8_xQy_-cBA55VIKAy68h8rgyZDOyvB5FXxL1xR5g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1LzEwLzQ3/LzM2MF9GXzY1MTA0/NzE4X3gxN2E3Nnd6/V0tJbTNCbGhBNnV5/WVZrRHM5OTgyYzZx/LmpwZw", name: "Himanshu", position: "Employee" },
    { imageUrl: "https://imgs.search.brave.com/bFF8_xQy_-cBA55VIKAy68h8rgyZDOyvB5FXxL1xR5g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1LzEwLzQ3/LzM2MF9GXzY1MTA0/NzE4X3gxN2E3Nnd6/V0tJbTNCbGhBNnV5/WVZrRHM5OTgyYzZx/LmpwZw", name: "Devang", position: "Employee" },
    { imageUrl: "https://imgs.search.brave.com/bFF8_xQy_-cBA55VIKAy68h8rgyZDOyvB5FXxL1xR5g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1LzEwLzQ3/LzM2MF9GXzY1MTA0/NzE4X3gxN2E3Nnd6/V0tJbTNCbGhBNnV5/WVZrRHM5OTgyYzZx/LmpwZw", name: "Anjali", position: "Employee" },
    { imageUrl: "https://imgs.search.brave.com/bFF8_xQy_-cBA55VIKAy68h8rgyZDOyvB5FXxL1xR5g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1LzEwLzQ3/LzM2MF9GXzY1MTA0/NzE4X3gxN2E3Nnd6/V0tJbTNCbGhBNnV5/WVZrRHM5OTgyYzZx/LmpwZw", name: "Prashant", position: "Employee" },
    { imageUrl: "https://imgs.search.brave.com/bFF8_xQy_-cBA55VIKAy68h8rgyZDOyvB5FXxL1xR5g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1LzEwLzQ3/LzM2MF9GXzY1MTA0/NzE4X3gxN2E3Nnd6/V0tJbTNCbGhBNnV5/WVZrRHM5OTgyYzZx/LmpwZw", name: "Nitin", position: "Employee" }
    // Add more employees as needed
  ];

  return (
    <div style={{background: "url(https://imgs.search.brave.com/-xL-ih1rlnTFtJTJ7S7XUi5zJxIdBFm-IdrT8vXN_S0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5pbWFrZXIuY29t/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTYvMDIvUGl4/YWJheS1pbWFnZS5q/cGc)" , backgroundSize:"cover", backgroundPosition:"1000"}} className="grid p-10 rounded-lg md:flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 m-10 items-center justify-center">
      {employees.map((employee, index) => (
        <EmployeeCard key={index} imageUrl={employee.imageUrl} name={employee.name} position={employee.position} />
      ))}
    </div>
  );
};

export default EmployeeList;
