class EpisodesController < ApplicationController
  def frontend_search; end

  def backend_search
    @episodes = Episode.search('jesse', 'summary', { per_page: 5, page: params[:page] })
  end
end
