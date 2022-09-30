class CreateSentences < ActiveRecord::Migration[6.1]
  def change
    create_table :sentences do |t|
      t.string :text, null: false

      t.timestamps
    end
  end
end
