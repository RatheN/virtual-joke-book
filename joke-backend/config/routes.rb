Rails.application.routes.draw do
      get '/jokes/jokelist',  to: 'jokes#jokelist'

      resources :jokes, :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
