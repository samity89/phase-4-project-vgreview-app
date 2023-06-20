class VideogameSerializer < ActiveModel::Serializer
  attributes :id, :name, :developer, :release_date, :genre, :image_url, :platform
  has_many :reviews
end
