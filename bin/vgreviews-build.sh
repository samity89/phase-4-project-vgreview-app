set -o errexit

rm -rf public
npm install --prefix frontend && npm run build --prefix frontend
cp -a frontend/build/. public/

bundle install
bundle exec rake db:migrate
bundle exec rake db:seed