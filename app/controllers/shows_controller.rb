class ShowsController < ApplicationController
  def index
    @shows = Show.paginate(page: params[:page])
  end
end
