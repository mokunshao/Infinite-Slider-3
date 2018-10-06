let current = 0;
let firstCopy = $('.slideshow > img').eq(0).clone(true)
let lastCopy = $('.slideshow > img').eq(length-1).clone(true)

$('.slideshow').append(firstCopy)
$('.slideshow').prepend(lastCopy)

$('.slideshow').css({transform:'translateX(-300px)'})

$('button').eq(0).on('click',function(){
	if(current === 2){
		$('.slideshow').css({transform:'translateX(-1200px)'})
			.one('transitionend',function(){
				$('.slideshow').hide().offset()
				$('.slideshow').css({transform:'translateX(-300px)'}).show()
			})
	}else{
		$('.slideshow').css({transform:'translateX(-300px)'})
	}
	current = 0;
})

$('button').eq(1).on('click',function(){
	$('.slideshow').css({transform:'translateX(-600px)'})
	current = 1;
})

$('button').eq(2).on('click',function(){
	if(current === 0){
		$('.slideshow').css({transform:'translateX(0px)'})
			.one('transitionend',function(){
				$('.slideshow').hide().offset()
				$('.slideshow').css({transform:'translateX(-900px)'}).show()
			})
	}else{
		$('.slideshow').css({transform:'translateX(-900px)'})
	}
	current = 2;
})