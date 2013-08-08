class CreateTimesheets < ActiveRecord::Migration
  def change
    create_table :timesheets do |t|
      t.string :name
      t.integer :user_id

      t.timestamps
    end
  end
end
