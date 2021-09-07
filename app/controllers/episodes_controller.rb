class EpisodesController < ApplicationController
  def frontend_search; end

  def backend_search
    @results = Episode.search('jesse', 'summary', { per_page: 100 })
  end
end
