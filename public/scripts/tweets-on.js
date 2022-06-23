$(document).ready(function () {


  const $prevTweets = $('.prev-tweets')
  const $flag = $('.fa-solid fa-flag')
  const $re = $('.fa-solid fa-retweet')
  const $heart = $('.fa-solid fa-heart')
 



  $prevTweets.mouseover(() => {
    $prevTweets.css({
      'box-shadow': '5px 5px #545149'
    })
  }
  )

  $prevTweets.mouseleave(()=> {
    $prevTweets.css({
      'box-shadow': 'none'
    })
    
  })

  $flag.mouseover(() => {
    $flag.css({
      'color' : '#4056A1'
    })
    console.log("on")
  })

  $flag.mouseleave(() => {
    $flag.css({
      'color' : '#545149'
    })
  })
  


})
