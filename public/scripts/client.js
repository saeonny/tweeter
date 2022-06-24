/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function () {
  const $textArea = $('#tweet-text');
  fetch(`http://localhost:8080/tweets`)
          .then((response) => { return response.json(); })
          .then((data) => {
            renderTweets(data)
            $textArea.val('').change() ;
          })





  //add an event listener to submit
  $("#submission").submit(function (event) {
    //prevent the default
    event.preventDefault();
    if ($textArea.val() === "" || $textArea.val() === null) {
      alert("You need a word to post")
    }
    if (  $textArea.val().length > 140) {
      alert (`Your word counts should be less than or equal to 140 \n current word counts : ${$textArea.val().length}`)
    }

    else {
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
            $textArea.val('').change() ;
          })

      })
    }



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

})