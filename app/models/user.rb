class User < ActiveRecord::Base
  has_secure_password
  validates :email, presence: true, uniqueness: true
  after_create :create_auth_token

  private

  def create_auth_token
    self.update_attribute(:authentication_token, SecureRandom.hex)
  end
end
