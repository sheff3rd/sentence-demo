class Api::EntitiesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @entity = sentence.entities.new(entity_params)

    if @entity.save
      render json: @entity, status: :created
    else
      render json: @entity.errors, status: :unprocessable_entity
    end
  end

  private

  def entity_params
    params.permit(:text, :type)
  end

  def sentence
    @sentence ||= Sentence.find(params[:sentence_id])
  end
end
