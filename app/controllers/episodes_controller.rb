class EpisodesController < ApplicationController
  def frontend_search; end

  def backend_search
    @query=params[:query]
    @episodes = Episode.search(@query, 'summary', { per_page: 5, page: params[:page] })
  end
end
