# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

sentence = Sentence.create(text: 'Apple is looking at buying U.K. startup for $1 billion')
Entity.create(text: 'Apple', type: 'ORG', sentence: sentence)
Entity.create(text: 'U.K.', type: 'GPE', sentence: sentence)
Entity.create(text: '1 billion', type: 'MONEY', sentence: sentence)

text = 'Regional funds with exposure to United States and outperform equity market over 3 year'
sentence = Sentence.create(text: text)
Entity.create(text: 'Regional funds', type: 'THEME', sentence: sentence)
Entity.create(text: 'United States', type: 'GPE', sentence: sentence)
Entity.create(text: 'equity market', type: 'THEME', sentence: sentence)
Entity.create(text: '3 year', type: 'TIME', sentence: sentence)
