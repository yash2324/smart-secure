import React from "react";
import violentgraph from "../images/violentCrimes.png";
import kidnap from "../images/kidnapping.png";
import murder from "../images/murdergraph.png";
const ViolentCrimes = () => {
  return (
    <>
      <div className="container mx-auto max-w-4xl">
        <div className="py-16">
          <h2 className="text-3xl font-bold text-red-500 text-center">
            Violent Crimes in India
          </h2>
          <p className="text-gray-600">
            We have classified the following crimes as violent crimes: murder,
            attempt to commit murder, culpable homicide not amounting to murder,
            kidnapping & abduction, and riots. Rape, attempt to rape, dowry
            deaths have been categorized into crimes against women. Dowry deaths
            are counted separately in the Indian Penal Code, and we have decided
            to follow the same nomenclature. <br />
            Please note that all rates are per 100,000 people.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800">
            The chart below shows the rate of violent crimes in the entire
            country
          </h3>
          <img
            src={violentgraph}
            alt="Violent Crimes Chart"
            className="w-full lg:w-1/2 mx-auto mt-4"
          />
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800">
            Highest murder & attempt to murder rates
          </h3>
          <p className="text-gray-600">
            Patna has the highest murder rate — more than thrice the national
            average. Ranchi and Meerut follow suit, with rates double the
            national average.
          </p>
          <img
            src={murder}
            alt="Murder Rates Chart"
            className="w-full lg:w-1/2 mx-auto mt-4"
          />
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800">
            Highest kidnapping rates
          </h3>
          <p className="text-gray-600">
            This chart shows the cities with the highest kidnapping rates. You
            can also compare the rate of kidnapping in the cities with the
            national average. All of the top ten cities on the list are from
            north India.
            <br />
            Capital city Delhi tops the list. According to the latest recorded
            data i.e. 2014, Delhi's kidnapping rate was six times the national
            average. Patna and Agra are second and third on this list.
          </p>
          <img
            src={kidnap}
            alt="Kidnapping Rates Chart"
            className="w-full lg:w-1/2 mx-auto mt-4"
          />
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Notes about the data
          </h2>
          <p className="text-gray-600">
            Here is how these crimes have been defined.
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>
              <strong>Attempt to murder:</strong> This is defined as an act that
              is committed knowing that if the act caused death, you would be
              guilty of murder. Indian Kanoon defines an example where person A
              purchases poison and mixes it in food intending to murder Z. If A
              places this food on Z's table or delivers it through a servant,
              this offence has been committed.
            </li>
            <li>
              <strong>Culpable homicide not amounting to murder:</strong> This
              has been defined in the Indian Penal Code as an act done with the
              intention of causing death or of causing such bodily injury as is
              likely to cause death. Here is an explanation of the section by
              The Times of India. The most famous case of people having been
              charged under this section is Bollywood actor Salman Khan's
              hit-and-run incident.
            </li>
            <li>
              <strong>Riot:</strong> Rioting has been defined as the use of
              violence or force by an unlawful assembly, i.e., assembling
              together without valid permission.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ViolentCrimes;
