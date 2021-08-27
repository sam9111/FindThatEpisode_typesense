class Episode < ApplicationRecord
  belongs_to :show
  include Typesense
  typesense per_environment: true do
  end
end
