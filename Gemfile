source 'http://rubygems.org'

gem 'rails', '~> 3.2.2'
gem 'mysql2'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails', "  ~> 3.2.0"
  gem 'uglifier'
  gem 'compass-rails'
  gem 'ejs'
end

gem 'jquery-rails'

gem 'devise'
gem 'cancan'
gem 'transitions', '0.0.9', :require => ["transitions", "active_record/transitions"]
gem 'i18n-js'

gem 'fastercsv', '1.5.3', :platforms => :ruby_18
# (using standard csv lib if ruby version is 1.9)
gem 'therubyracer'
# gem 'puma'
gem 'thin'

group :production do
  gem 'pg'
end

group :development, :test do
  gem 'sqlite3'
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'jasmine', '1.1.0'
  gem 'capybara'
  gem 'capybara-webkit'
  gem 'database_cleaner'
end
