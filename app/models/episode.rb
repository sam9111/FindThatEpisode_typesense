class Episode < ApplicationRecord
  belongs_to :show
  include Typesense
  typesense  do
    predefined_fields [
      { name: 'name', type: 'string' },
      { name: 'summary', type: 'string' },
      { name: 'show_id', type: 'int32', facet: true },
      {name: 'number',type: 'int32'}
    ]
    default_sorting_field 'number'
  end
end
