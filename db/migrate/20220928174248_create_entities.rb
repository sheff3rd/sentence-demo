class CreateEntities < ActiveRecord::Migration[6.1]
  def change
    create_table :entities do |t|
      t.references :sentence, foreign_key: true
      t.integer :type
      t.string :text

      t.timestamps
    end
  end
end
