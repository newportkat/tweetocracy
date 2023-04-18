# Tweetocracy

Tweetocracy is a web application designed to provide insights into Australian political parties and their members of parliament (MPs) by analyzing their tweets and dispalying their voting records. This project was created as part of the React Developer course run by General Assembly.

The application is deployed using AWS Amplify and Elastic Beanstalk and can be accessed at [tweetocracy.com.au](https://tweetocracy.com.au).

## Features

- **Latest Tweets**: The homepage displays the latest tweets with the hashtag #auspol.
- **Parties**: A dedicated page displays the two major parties in Australia, the Labor Party and the Coalition. Clicking on a party shows their cabinet ministers.
- **MP Profiles**: Click on an MP to view their latest tweets, a frequency word cloud, sentiment analysis, and an overall engagement score.
- **Policies**: The policies page fetches data from the theyvoteforyou API and displays a list of policies voted on by the Australian parliament. You can click on a policy to see who voted, and filter voters by yes and no votes.

## Technologies

- Frontend: React and Tailwind CSS
- Backend: Node.js with Express server
- Deployment: AWS Amplify and Elastic Beanstalk
- APIs:
  - Twitter API
  - [theyvoteforyou API](https://theyvoteforyou.org.au)



