class Api::SentencesController < ApplicationController
  def index
    @sentences = Sentence.all
    render json: @sentences
  end

  def show
    @sentence = Sentence.find(params[:id])
    render json: @sentence
  end
end
