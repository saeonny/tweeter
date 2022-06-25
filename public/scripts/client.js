/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function() {
  const $textArea = $('#tweet-text');
  const $alerts = $('.alert');
  const $alertDne = $('#tweet-test-dne');
  const $alertLong = $('#tweet-text-toolong');



  // Initializing the first page (or when refreshed) 
  fetch(`http://localhost:8080/tweets`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderTweets(data);
      $textArea.val('').change();
    });





  $("#submission").submit(function(event) {
    $alerts.slideUp();
    event.preventDefault();

    // alerts are hided as default
    // when textarea is filled with spaces and character counts over 140 show two warnings
    if (emptyPostCheck($textArea.val()) && $textArea.val().length > 140 ) {
      $alertDne.slideDown();
      $alertLong.slideDown();
    }
    // when textarea has nothing or only contains space
    if (emptyPostCheck($textArea.val()) || $textArea.val() === null) {
      return $alertDne.slideDown();
    }
    // when textarea has more than 140 characters 
    if ($textArea.val().length > 140) {
      return $alertLong.slideDown();
    }


    // proceed to post when textarea 1.is not null 2.not contains only spaces 3.has less than 140 characters
    if (!emptyPostCheck($textArea.val()) && $textArea.val().length <= 140 && $textArea.val() !== null) {

      const serializedData = $(this).serialize();
      $.ajax({
        url: `http://localhost:8080/tweets`,
        method: 'POST',
        data: serializedData
      }).then((tweets) => {
        fetch(`http://localhost:8080/tweets`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            renderTweets(data);
            $textArea.val('').change();
            $('.counter').text(140);
          });

      });
    }

  });

});


// creating html elements using single tweet
const createTweetElement = function(tweet) {
  let tweetSection = ' <section class="prev-tweets"> <div id="tweets-top"> <div id="tweets-topleft">';
  tweetSection += `<img id="tweets-img" src = "${tweet.user.avatars}">`;
  tweetSection += `<p id="tweets-username"> ${tweet.user.name}</p> </div>`;
  tweetSection += `<p id ="tweets-userID">${tweet.user.handle}</p> </div>`;
  tweetSection += `<p id = "tweets-text">${tweet.content.text}</p> <hr>`;
  tweetSection += `<div id = "tweets-bottom"> <p id ="tweets-postedDates"> ${timeago.format(tweet.created_at)}</p> `;
  tweetSection += `<div id = "tweets-bottom-icons"> <i class="fa-solid fa-flag" id = "flag"></i> <i class="fa-solid fa-retweet" id ="retweet"></i> <i class="fa-solid fa-heart" id ="heart"></i> </div> </div> </section>`;

  return tweetSection;

};

// adding tweets to container 
const renderTweets = function(tweets) {
  let results = "";
  tweets.forEach(element => {
    results = createTweetElement(element) + results;
  });
  $('.prev-tweets-container').empty();
  $('.prev-tweets-container').html(results);

};


// checking str only contains space
const emptyPostCheck = function(str) {
  return str.trim().length === 0;

};

