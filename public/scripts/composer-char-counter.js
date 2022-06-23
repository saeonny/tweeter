$(document).ready(function() {
  const $textArea = $('#tweet-text');
  const $counter = $('.counter');

  $textArea.on("input",(event)=>{
    const textLength = $textArea.val().length
    const avalLength = 140 - textLength;

    if(avalLength < 0) {
      $counter.css({
        'color' : 'red'
      })
      $counter.text(avalLength);
    }
    else {
      $counter.css({
        'color' : '#545149'
      })
      $counter.text(avalLength);
    }


  })
});