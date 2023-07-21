class VideogameReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :rating, :body
  belongs_to :user, serializer: VideogameReviewUserSerializer
  # belongs_to :videogame
end
