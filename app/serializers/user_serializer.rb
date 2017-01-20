class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_one :account
  has_many :songs
end
