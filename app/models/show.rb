class Show < ApplicationRecord
  serialize :metadata, JSON
  has_many :episodes

  include Typesense

  typesense per_environment: true do
  end

  def about
    m = metadata
    { name: m['name'], genre: m['genres'], website: m['officialSite'], rating: m['rating']['average'], image: m['image']['original'], summary: m['summary'] }
  end

  def create_episodes
    episodes = metadata['_embedded']['episodes']
    episodes.each do |epi|
      Episode.create(show_id: id, showname: metadata['name'], name: epi['name'], season: epi['season'], number: epi['number'], image: epi['image'], summary: epi['summary'])
    end
  end

  def self.create_show(url)
    require 'httparty'
    response = HTTParty.get(url)
    metadata = response.parsed_response
    new_show = Show.create(metadata: metadata)
    new_show.create_episodes
  end
end
