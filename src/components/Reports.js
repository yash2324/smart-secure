import React from "react";

import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <>
      <div className="mx-auto py-8">
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Crimes</h2>
          <p className="text-gray-600">
            Choose a crime for which you want to know detailed analysis of
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              <Link to="/ViolentCrimes">Violent Crimes</Link>
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-800">
              <Link to="/caw"> Crimes Against Women</Link>
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:shadow-outline-yellow active:bg-yellow-800">
              <Link to="/propertycrimes">Property Crimes</Link>
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800">
              <Link to="/economiccrimes">Economic Crimes</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="px-10 dark:bg-gray-900  py-8">
        <h1 className="text-4xl dark:text-white mt-10 font-bold mb-8">
          Crime Statistics
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <CrimeCategory
            title="Overall Crimes"
            data={[
              { city: "Kochi", rate: 1159.0 },
              { city: "Indore", rate: 799.2 },
              { city: "Gwalior", rate: 740.3 },
              { city: "Jaipur", rate: 714.2 },
              { city: "Kollam", rate: 689.1 },
            ]}
          />

          <CrimeCategory
            title="Murder"
            data={[
              { city: "Patna", rate: 8.9 },
              { city: "Ranchi", rate: 5.7 },
              { city: "Meerut", rate: 5.2 },
              { city: "Faridabad", rate: 5.0 },
              { city: "Gwalior", rate: 4.9 },
            ]}
          />
          <CrimeCategory
            title="Rape"
            data={[
              { city: "Gwalior", rate: 16.1 },
              { city: "Jabalpur", rate: 15.2 },
              { city: "Kota", rate: 13.5 },
              { city: "Bhopal", rate: 13.3 },
              { city: "Durg-Bhilainagar", rate: 12.8 },
            ]}
          />
          <CrimeCategory
            title="Sexual Harassment"
            data={[
              { city: "Vijayawada", rate: 76.5 },
              { city: "Srinagar", rate: 47.9 },
              { city: "Gwalior", rate: 40.4 },
              { city: "Kollam", rate: 40.4 },
              { city: "Durg-Bhilainagar", rate: 35.9 },
            ]}
          />
          <CrimeCategory
            title="Hurt"
            data={[
              { city: "Jabalpur", rate: 123.1 },
              { city: "Raipur", rate: 119.3 },
              { city: "Vijayawada", rate: 108.5 },
              { city: "Vishakhapatnam", rate: 82.3 },
              { city: "Patna", rate: 74.2 },
            ]}
          />
          <CrimeCategory
            title="Robbery"
            data={[
              { city: "Nagpur", rate: 15.9 },
              { city: "Aurangabad", rate: 14.8 },
              { city: "Pune", rate: 14.3 },
              { city: "Vasai-Virar", rate: 12.8 },
              { city: "Gwalior", rate: 11.2 },
            ]}
          />
          <CrimeCategory
            title="Kidnapping"
            data={[
              { city: "Delhi", rate: 34.3 },
              { city: "Indore", rate: 17.1 },
              { city: "Raipur", rate: 12.9 },
              { city: "Agra", rate: 11.3 },
              { city: "Durg-Bhilainagar", rate: 10.8 },
            ]}
          />
          <CrimeCategory
            title="Cheating"
            data={[
              { city: "Jaipur", rate: 118.3 },
              { city: "Kota", rate: 76.8 },
              { city: "Jodhpur", rate: 61.5 },
              { city: "Bengaluru", rate: 39.7 },
              { city: "Patna", rate: 32.3 },
            ]}
          />
          <CrimeCategory
            title="Deaths due to Rash Driving"
            data={[
              { city: "Jaipur", rate: 26.0 },
              { city: "Vijayawada", rate: 20.9 },
              { city: "Jodhpur", rate: 20.7 },
              { city: "Vishakhapatnam", rate: 20.4 },
              { city: "Asansol", rate: 17.0 },
            ]}
          />
          <CrimeCategory
            title="Burglary"
            data={[
              { city: "Bengaluru", rate: 35.5 },
              { city: "Delhi", rate: 30.8 },
              { city: "Lucknow", rate: 25.3 },
              { city: "Kanpur", rate: 24.7 },
              { city: "Pune", rate: 22.6 },
            ]}
          />
          <CrimeCategory
            title="Cyber Crime"
            data={[
              { city: "Bengaluru", rate: 26.4 },
              { city: "Hyderabad", rate: 18.9 },
              { city: "Pune", rate: 16.2 },
              { city: "Mumbai", rate: 14.8 },
              { city: "Chennai", rate: 12.5 },
            ]}
          />
          <CrimeCategory
            title="Drug Abuse or Sale"
            data={[
              { city: "Mumbai", rate: 17.3 },
              { city: "Delhi", rate: 15.5 },
              { city: "Chennai", rate: 14.2 },
              { city: "Bengaluru", rate: 12.8 },
              { city: "Hyderabad", rate: 11.6 },
            ]}
          />
        </div>
      </div>
    </>
  );
};

const CrimeCategory = ({ title, data }) => {
  return (
    <div className=" bg-white  p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{item.city}:</span> {item.rate} per
            100,000 people
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
