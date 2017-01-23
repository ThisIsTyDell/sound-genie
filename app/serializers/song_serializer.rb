class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :complete
  belongs_to :user
end
