$(document).ready(function () {


  const $prevTweets = $('.prev-tweets')
  const $flag = $(".fa-flag")
  const $re = $('.fa-retweet')
  const $heart = $('.fa-heart')

  const img = $('#tweets-img')




  $prevTweets.on({
    mouseenter: function () {
      $(this).css("box-shadow", '5px 5px #4056A1')
    },
    mouseleave : function () {
      $(this).css("box-shadow", 'none')
    }
  })


 

  $flag.on({
    mouseenter: function () {
      
      $(this).css("color", '#4056A1')
    },
    mouseleave : function () {
      $(this).css("color", '#545149')
    }
  })

  $re.on({
    mouseenter: function () {
      
      $(this).css("color", '#4056A1')
    },
    mouseleave : function () {
      $(this).css("color", '#545149')
    }
  })

  $heart.on({
    mouseenter: function () {
      
      $(this).css("color", '#4056A1')
    },
    mouseleave : function () {
      $(this).css("color", '#545149')
    }
  })



})
