// Step 3 code goes here
let display = true
$('.card:nth-child(1)').click(function(){
  const style = display ? {opacity: 0.1} : {opacity: 1}
  $(this).animate(style, 400)
  display = !display
})

// Step 4 code goes here
$('.card:nth-child(2)').click(function(){
  $(this).toggleClass('hidden', 400) // Step 4: replace [css class] with an appropriate value
})

// Step 5 code goes here
$('.card:nth-child(3)').click(function(){
  $(this).transition('swing right') // Step 5: replace [effect] with an appropriate value
})


