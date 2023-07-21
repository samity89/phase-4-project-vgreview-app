class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id, :videogame_id, :rating, :body
  belongs_to :videogame
  belongs_to :user
end
