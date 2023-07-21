class VideogameSerializer < ActiveModel::Serializer
  attributes :id, :name, :developer, :release_date, :genre, :image_url, :platform, :reviews
  has_many :reviews, serializer: VideogameReviewSerializer
end
