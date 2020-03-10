class User < ApplicationRecord
    has_many :jokes

    validates :name, presence: true
    validates :name, uniqueness: true
end
