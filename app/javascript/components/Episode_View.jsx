import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Highlight,
} from "react-instantsearch-dom";

import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "xyz",
    nodes: [
      {
        host: "localhost",
        port: "8108",
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    queryBy: "name,summary",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

const Hit = ({ hit }) => (
  <div>
    <p>{hit.number}</p>

    <Highlight attribute="name" hit={hit} tagName="mark" />
    <Highlight attribute="summary" hit={hit} tagName="mark" />
  </div>
);

const Episode_View = (props) => {
  return (
    <div className="ais-InstantSearch">
      <h1>Find That Episode</h1>
      <InstantSearch
        indexName="Episode_development"
        searchClient={searchClient}
      >
        <div className="right-panel">
          <SearchBox />
          <Hits hitComponent={Hit} />
        </div>
      </InstantSearch>
    </div>
  );
};

export default Episode_View;
