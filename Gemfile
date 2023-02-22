# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll", "~> 4.3", ">=4.3.2"

gem "jekyll-theme-chirpy", "~> 5.5", ">= 5.5.2"

# Security Update
gem "nokogiri", "~>1.14.2", ">=1.12.5"

group :test do
  gem "html-proofer", "~> 3.19"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

# Add sitemap
gem 'jekyll-sitemap'
