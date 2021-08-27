// import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
// const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
//   server: {
//     apiKey: "xyz",
//     nodes: [
//       {
//         host: "localhost",
//         port: "8108",
//         protocol: "http",
//       },
//     ],
//   },
//   additionalSearchParameters: {
//     queryBy: "name,summary",
//   },
// });
// const searchClient = typesenseInstantsearchAdapter.searchClient;

// const search = instantsearch({
//   searchClient,
//   indexName: "Episode_development",
// });

// search.addWidgets([
//   instantsearch.widgets.searchBox({
//     container: "#searchbox",
//   }),

//   instantsearch.widgets.hits({
//     container: "#hits",
//     templates: {
//       empty: "No results for <q>{{ query }}</q>",
//       item:
//         '<div class="d-flex flex-row justify-content-between mb-3">' +
//         '<div class="details d-flex flex-column p-3 ">' +
//         '<h2 class="mb-1">{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h2>' +
//         '<div class="text">' +
//         '{{#helpers.highlight}}{ "attribute": "summary" }{{/helpers.highlight}}' +
//         "</div>" +
//         "</div>" +
//         '<div class="show pt-3 pl-3">' +
//         '<h3 class="mb-2" >{{show_name}}</h4>' +
//         '<h4 class="mb-2" >S{{season}}</h4>' +
//         "<h5>Epi {{number}}</h5>" +
//         "</div>" +
//         "</div>",
//     },
//     escapeHTML: false,
//   }),

//   instantsearch.widgets.stats({
//     container: "#stats",
//     templates: {
//       text:
//         "{{#hasNoResults}}No results{{/hasNoResults}}" +
//         "{{#hasOneResult}}1 result{{/hasOneResult}}" +
//         "{{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results{{/hasManyResults}} found in {{processingTimeMS}}ms",
//     },
//   }),
// ]);
// search.start();


