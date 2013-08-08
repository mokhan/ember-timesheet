class DropUserColumnFromUsersTable < ActiveRecord::Migration
  def change
    remove_column :users, :User
  end
end
