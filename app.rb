require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
  redirect 'index.html'
end