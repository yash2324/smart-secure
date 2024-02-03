import React from "react";
import cawg from "../images/cawg.png";
import rapeGraph from "../images/rapeGraph.png";
import dowry from "../images/Dowry.png";
const CrimesAgainstWomen = () => {
  return (
    <>
      <div className="py-16">
        <h2 className="text-2xl font-bold text-red-500 text-center capitalize">
          Crimes against women in India
        </h2>
        <p className="text-gray-600">
          Crimes against women include, among others, the following: Rape, dowry
          deaths, cruelty by husbands and relatives, sexual harassment, and
          molestation of women. We have chosen particularly to highlight these
          crimes because of their serious nature.
        </p>

        <div className="my-6">
          <h3 className="text-xl font-bold text-gray-700">
            Crimes against women
          </h3>
          <p className="text-gray-600">
            The chart below shows the rate of crimes committed against women in
            the entire country. Cruelty by husband and relatives was the most
            common crime against women in India from 2010 to 2014. Sexual
            harassment and molestation of women and girls are the second-most
            common crimes women face. Rape is another common crime committed
            against women in the country.
          </p>
          <img src={cawg} alt="Crimes Against Women Graph" className="mt-4" />
          <p className="text-gray-600">
            Crimes against women include, among others, the following: Rape,
            dowry deaths, cruelty by husbands and relatives, sexual harassment,
            and molestation of women. We have chosen particularly to highlight
            these crimes because of their serious nature.
          </p>
        </div>

        <p className="text-gray-600">
          All crime rates are per 100,000. See our notes on how the data was
          recorded and how we computed the crime rates for women to correct the
          error made by the Bureau.
        </p>
      </div>
      <div className="my-6">
        <h3 className="text-xl font-bold text-gray-700">Rape</h3>
        <p className="text-gray-600">
          This chart shows the cities with the highest rape rates. All of the
          top five cities are in the northern part of the country. Gwalior,
          Jabalpur, and Bhopal — all from Madhya Pradesh — have the top three
          cities with the highest rape rates in India.
        </p>
        <img src={rapeGraph} alt="Rape Rates Graph" className="mt-4" />
        <p className="text-gray-600 mt-4">
          Notice the jump in rape rate after 2012. When the government toughened
          rape laws in 2013 and the media attention forced the police to look
          into complaints more seriously, more victims emerged and the crime
          rate shot up.
        </p>
        <p className="text-gray-600 mt-4">
          The top ten non-metro cities have a rape crime rate far higher than
          the national average. Gwalior, which has the highest rate of rapes in
          the country, is thrice the national average. Capital city Delhi also
          emerged as one of the cities with the highest rate of rape crimes in
          the country
        </p>
      </div>
      <div className="my-6">
        <h3 className="text-xl font-bold text-gray-700">Dowry Deaths</h3>
        <p className="text-gray-600">
          Again, cities in north India dominate dowry deaths. Agra has the
          highest average rate of dowry deaths from 2010 to 2014, followed by
          Patna and Gwalior.
        </p>
        <img src={dowry} alt="Rape Rates Graph" className="mt-4" />
        <p className="text-gray-600 mt-2">
          Delhi has the highest rate of dowry deaths. Two south Indian cities,
          Bengaluru and Hyderabad, follow. As for the non-metro cities, four of
          the cities are from Uttar Pradesh. As we have seen from the other
          charts, cities from Madhya Pradesh also figure high on the list of
          crimes against women. Three of them (Jabalpur, Gwalior, Indore) show
          up here as well.
        </p>
      </div>
      <div className="my-6">
        <h3 className="text-xl font-bold text-gray-700">
          Cities with Highest Rates of Sexual Harassment and Molestation
        </h3>
        <p className="text-gray-600">
          Here are the cities where women face the most sexual harassment and
          molestation in their everyday lives. Vijayawada is the top city i.e.
          the city with the highest average rate of sexual harassment and
          molestation cases. Again, note that Kollam, a city from Kerala, a
          state with a matriarchial societal structure, figures in the top five
          of the list.
        </p>
        <h4 className="text-lg font-semibold text-gray-700 mt-4">
          Notes about the data
        </h4>
        <p className="text-gray-600 mt-2">
          From 2010 to 2012, the Bureau recorded the rate of crimes against
          women using the total population. This does not reflect the true
          picture. Hence, we did our own calculations of crime rates for all
          crimes against women using the 2011 Census provisional population
          totals[xls].
        </p>
        <p className="text-gray-600 mt-2">
          We have also added a new category for crimes against women: 'Sexual
          harassment and molestation of women'. This is because of the lack of
          consistency in the way the Bureau reports sexual crimes against women
          that are not rape i.e. Section 354 and Section 509. In 2010 and 2011,
          crimes recorded under these sections were reported as 'Molestation'
          and 'Sexual harassment' respectively. The following years, they were
          reported as 'Assault on women with intent to outrage modesty' and
          'Insult to the modesty of women'.
        </p>
        <p className="text-gray-600 mt-2">
          We first standardized the nomenclature across all years. Section 354
          crimes were named 'Assault on women with intent to outrage modesty'
          and Section 509 crimes were placed under the 'Insult to the modesty of
          women' head.
        </p>
        <p className="text-gray-600 mt-2">
          We then added our new category 'Sexual harassment and molestation of
          women' by adding the number of incidences for crimes under the
          aforementioned two sections. We then calculated the crime rate for
          this new composite category using the 2011 Census population numbers.
        </p>
      </div>
    </>
  );
};

export default CrimesAgainstWomen;
