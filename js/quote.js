let showresult =document.getElementById("result");
let maincolor = document.getElementById("main");
let mybutton = document.getElementById("mybtn")
mybutton.addEventListener("click", show);
function show(){
let coloR=['The miracle is not that we do this work, but that we are happy to do it – Mother Teresa',
 'Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway – Earl Nightingale',
'If you work on something a little bit every day, you end up with something that is massive – Kenneth Goldsmith',
'The big secret in life is that there is no secret. Whatever your goal, you can get there if you’re willing to work. – Oprah Winfrey',
'If you cannot do great things, do small things in a great way. – Napoleon Hill',
'Never allow a person to tell you no, if they don’t have the power to say yes. – Eleanor Roosevelt',
'At any given moment you have the power to say: this is not how the story is going to end. – Unknown',
'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.” – Steve Jobs',
'Nothing will work unless you do.” – Maya Angelou',
'Sometimes when you’re in a dark place you think you’ve been buried but you’ve actually been planted. – Christine Caine',
'Don’t limit your challenges. Challenge your limits. – Unknown',
'Whenever you find yourself doubting how far you can go, just remember how far you have come. – Unknown',
'Everyone has inside them a piece of good news. The good news is you don’t know how great you can be! How much you can love! What you can accomplish! And what your potential is. – Anne Frank',
'Some luck lies in not getting what you thought you wanted but getting what you have, which once you have got it you may be smart enough to see is what you would have wanted had you known. – Garrison Keillor',
'Don’t quit yet, the worst moments are usually followed by the most beautiful silver linings. You have to stay strong, remember to keep your head up and remain hopeful. – Unknown',
'When written in Chinese the word “crisis” is composed of two characters – one represents danger and the other represents opportunity. – John F Kennedy',
'Good. Better. Best. Never let it rest. ‘Til your good is better and your better is best.” – St. Jerome.',
'In the middle of every difficulty lies opportunity.– Albert Einstein',
'Start where you are. Use what you have. Do what you can. – Arthur Ashe',
'“Dreams don’t work unless you do.” – John C. Maxwell',
'“Go the extra mile. It’s never crowded there.” – Dr. Wayne D. Dyer',
'“Keep your face always toward the sunshine – and shadows will fall behind you.” – Walt Whitman',
'“What defines us is how well we rise after falling.” – Lionel from Maid in Manhattan Movie',
'H.O.P.E. = Hold On. Pain Ends.',
'Make each day your masterpiece. – John Wooden',
'“Wherever you go, go with all your heart” – Confucius',
'“Turn your wounds into wisdom” – Oprah',
'“Begin anywhere.” – John Cage',
'“We can do anything we want to if we stick to it long enough.” – Helen Keller'
    ];
let quote =Math.floor(Math.random()* coloR.length);
let mycoLorShow = coloR[quote];
showresult.innerHTML = mycoLorShow;
maincolor.style.backgroundColor = mycoLorShow; 
console.log(mycoLorShow);
console.log(quote);
}