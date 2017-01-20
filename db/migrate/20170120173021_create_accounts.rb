class CreateAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.string :first_name
      t.string :last_name
      t.string :label_name
      t.integer :credits
      t.belongs_to :user, index: true

      t.timestamps
    end
  end
end
