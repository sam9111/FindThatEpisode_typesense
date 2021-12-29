# README

Ruby version: 2.7.2
Node version: 16.13.0
Rails version: 6.1.4.1

Run the server with CORS enabled in the browser to allow access to the Typesense host

# FindThatEpisode Using Typesense Rails Client

This is a simple webapp to demo the Rails client built for Typesense. 

http://localhost:3000/backend allows the user to search for any keyword in the summary of an episode.

`Episode.search(@query, 'summary', { per_page: 5, page: params[:page] })`

These arguements can be edited(check https://github.com/typesense/typesense-rails/tree/adaptation) to get the required search specifics needed.

http://localhost:3000/ demos the search with the `react-instantsearch-dom` and `TypesenseInstantSearchAdapter`
 

