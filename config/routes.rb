Rails.application.routes.draw do
  root to: 'pages#index'

  namespace :api do
    resources :sentences, only: [:index, :show] do
      resources :entities, only: :create
    end
  end
end
