class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :User
      t.string :email
    end
  end
end
