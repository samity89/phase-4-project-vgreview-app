class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :videogame_id, :rating, :body, :user
  belongs_to :videogame
  belongs_to :user
end
