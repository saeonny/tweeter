$(document).ready(function () {


  const $prevTweets = $('.prev-tweets')
  const $flag = $('#flag')
  const $re = $('#retweet')
  const $heart = $('#heart')

  const img = $('#tweets-img')
 



  $prevTweets.mouseover(() => {
    $prevTweets.css({
      'box-shadow': '5px 5px #4056A1'
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
    
  })

  $flag.mouseleave(() => {
    $flag.css({
      'color' : '#545149'
    })
  })

  $re.mouseover(() => {
    $re.css({
      'color' : '#4056A1'
    })
    
  })

  $re.mouseleave(() => {
    $re.css({
      'color' : '#545149'
    })
  })

  $heart.mouseover(() => {
    $heart.css({
      'color' : '#4056A1'
    })
    
  })

  $heart.mouseleave(() => {
    $heart.css({
      'color' : '#545149'
    })
  })
  


})
