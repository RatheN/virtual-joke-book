class GifSerializer < ApplicationModel::Serializer
    attributes :id, :name, :user_id
    belongs_to :user