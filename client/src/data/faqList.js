export const faqList = [
    {
        question: "Where does your data come from?",
        answer: "We source our data from two different APIs. For tweets, we use the Twitter API to fetch the latest tweets from Australian politicians. For data about politicians and policies, we use the They Vote For You API, which can be found at https://theyvoteforyou.org.au/. This allows us to provide up-to-date and accurate information about politicians and their voting history, as well as the latest tweets from their official Twitter accounts.",
    },
    {
        question: "What is the average sentiment score?",
        answer: "The average sentiment score is a numerical representation of the overall sentiment of a politician's tweets. We analyze each tweet for sentiment, which ranges from -5 to +5. A score of -5 represents extremely negative sentiment, while a score of +5 represents extremely positive sentiment. A score of 0 represents neutral sentiment. We calculate the average score across all of the politician's tweets to provide insight into their general emotional tone.",
    },
    {
        question: "What is the engagement score?",
        answer: "The engagement score is a measure of the interaction that a politician's tweets receive. We take into account the number of likes, retweets, and replies to calculate a score that reflects their overall engagement on Twitter. The score is calculated by assigning weights to each type of engagement: likes have a weight of 1, retweets have a weight of 2, and replies have a weight of 3. The total engagement score provides an indication of how successful a politician is in using social media to communicate their message and engage with their audience.",
    },
    {
        question: "What does the word cloud represent?",
        answer: "The word cloud represents the most frequently used words in a politician's tweets. It provides insight into the topics that they frequently discuss and the language that they use to communicate their message. We remove common stop words to focus on the most meaningful words in their tweets.",
    },
    {
        question: "Where is the artwork from?",
        answer: "The artwork on our website is created using midjourney, a digital design tool. We use midjourney to create the initial designs, which are then edited to fit our specific needs and style.",
    },
]
