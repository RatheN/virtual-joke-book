Rails.application.routes.draw do
  resources :jokes
  resources :users

  Rails.application.routes.draw do
    get '/test', to: 'application#test'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
