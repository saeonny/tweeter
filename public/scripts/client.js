/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function () {
  const $textArea = $('#tweet-text');
  const $newTweet = $('.new-tweet');
  const $alerts = $('.alert');
  const $alertDne = $('#tweet-test-dne')
  const $alertLong = $('#tweet-text-toolong')




  fetch(`http://localhost:8080/tweets`)
    .then((response) => { return response.json(); })
    .then((data) => {
      renderTweets(data)
      $textArea.val('').change();
    })





  //add an event listener to submit
  $("#submission").submit(function (event) {
    $alerts.slideUp();
    //prevent the default
    event.preventDefault();

    
    if(emptyPostCheck($textArea.val()) && $textArea.val().length > 140 ) {
      $alertDne.slideDown();
      $alertLong.slideDown();
    }

    if (emptyPostCheck($textArea.val()) || $textArea.val() === null) {
      return $alertDne.slideDown();
    }
    if ($textArea.val().length > 140) {
      return $alertLong.slideDown();
    }

    

    if (!emptyPostCheck($textArea.val()) && $textArea.val().length <= 140 && $textArea.val() !== null){

      const serializedData = $(this).serialize();
      $.ajax({
        url: `http://localhost:8080/tweets`,
        method: 'POST',
        data: serializedData
      }).then((tweets) => {
        fetch(`http://localhost:8080/tweets`)
          .then((response) => { return response.json(); })
          .then((data) => {
            renderTweets(data)
            $textArea.val('').change();
            $('.counter').text(140)
          })
  
      })
    }




  })



  })


const createTweetElement = function (tweet) {
  let tweetSection = ' <section class="prev-tweets"> <div id="tweets-top"> <div id="tweets-topleft">'
  tweetSection += `<img id="tweets-img" src = "${tweet.user.avatars}">`
  tweetSection += `<p id="tweets-username"> ${tweet.user.name}</p> </div>`
  tweetSection += `<p id ="tweets-userID">${tweet.user.handle}</p> </div>`
  tweetSection += `<p id = "tweets-text">${tweet.content.text}</p> <hr>`
  tweetSection += `<div id = "tweets-bottom"> <p id ="tweets-postedDates"> ${timeago.format(tweet.created_at)}</p> `
  tweetSection += `<div id = "tweets-bottom-icons">
  <i class="fa-solid fa-flag" id = "flag"></i>
  <i class="fa-solid fa-retweet" id ="retweet"></i>
  <i class="fa-solid fa-heart" id ="heart"></i>
</div>
</div>

</section>`

  return tweetSection

}

const renderTweets = function (tweets) {
  let results = ""
  tweets.forEach(element => {
    results = createTweetElement(element) + results;
  });
  $('.prev-tweets-container').empty()
  $('.prev-tweets-container').html(results);

}


const emptyPostCheck = function (str) {
  return str.trim().length === 0;

}

