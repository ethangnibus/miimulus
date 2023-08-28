Rails.application.routes.draw do
  get 'checkout/index'
  get 'cart/index'
  get 'home/index'
  root 'home#index'

  get '/netgain', to: 'netgain#index'
  get '/netgain/:id', to: 'netgain#show', as: 'netgain_item'

  get '/dreambreaks', to: 'dreambreaks#index'
  get '/dreambreaks/:id', to: 'dreambreaks#show', as: 'dreambreaks_item'

  get '/lka', to: 'lka#index'
  get '/lka/:id', to: 'lka#show', as: 'lka_item'

  get '/cart', to: 'cart#index'
  get '/checkout', to: 'checkout#index'
end