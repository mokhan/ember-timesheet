class AddPasswordDigestAndAuthTokenToUsers < ActiveRecord::Migration
  def change
    add_column :users, :password_digest, :string
    add_column :users, :authentication_token, :string
  end
end
