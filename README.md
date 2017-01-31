# SoundGenie README

## Description
Mix and Mastering Management, Payment, and Delivery App

For more detail, check this blog post. http://tydellmiller.com/2017/01/24/creating_a_single_page_app_rails_api_for_angularjs/

## Walkthrough Video
https://www.youtube.com/watch?v=v7KFJxBXt-Y

## Installation
  To install a copy of this project fork and clone this repository.

  In your terminal run `bundle install` to install gems.

  Next run `rake db:migrate` to create the database.

  Finally run `rails s` to start up the server and visit localhost:3000 in your browser.

  This project utilizes 
     "angular": "v1.5.8", 
     "angular-ui-router": "latest",
     "angular-devise": "latest"

## Requirements
  Payments
  
  This app uses the Stripe API to allow payments, you will need to use your own Stripe development account and API Auth Key in order to use the payment feature. (Optionally, you may use a different payment provider - but this app comes with Stripe built in!)

## Contributions
Contributions to this project are welcome. To contribute to this project, please fork and clone this repository. Then open a pull request once you are ready to submit changes or improvements. 

## License
https://github.com/ThisIsTyDell/sound-genie/blob/master/LICENSE