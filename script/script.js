gsap.registerPlugin(ScrollTrigger);

/*animation de call to action*/

var animation = gsap.to('.mouse', {
    duration: 0.5,
    repeat: '-1',
    scale: '1.2',
    yoyo: 'true'
  });


/* animation ch2*/

let timelinech2 = gsap.timeline({repeat: -1})

timelinech2.to('.walk1', {
  x: '130vw',
  delay:1,
  ease: 'none',
  duration:12
},);


/*animation ch3*/

let timelinech3 = gsap.timeline({})

timelinech3.from('.monstre1', {
  opacity: 0,
  delay: 1,
  duration:2
});

timelinech3.to('.monstre1', {
  opacity: 0,
  duration:2
}, '<1');

timelinech3.from('.monstre2', {
  opacity: 0,
  duration:2
}, '<2');

timelinech3.to('.monstre2', {
  opacity: 0,
  duration:2
}, '<1');


timelinech3.from('.monstre3', {
  x: '100vw',
  ease: 'ease in',
  duration:0.08
}, '<1');

/*animation ch4*/ 

let timelinech4 = gsap.timeline({repeat: -1})
timelinech4.from('.creepy1', {
  opacity: 0,
  delay: 2,
  duration:3
});

timelinech4.to('.creepy1', {
  opacity: 0,
  duration:1
}, '<2');

timelinech4.from('.creepy2', {
  opacity: 0,
  duration:3
}, '<4');

timelinech4.to('.creepy2', {
  opacity: 0,
  duration:1
}, '<2');

timelinech4.from('.creepy3', {
  opacity: 0,
  duration:3
}, '<6');

timelinech4.to('.creepy3', {
  opacity: 0,
  duration:1
}, '<2');

/*animation ch5*/

let timelinech5 = gsap.timeline({})
timelinech5.from('.fillep', {
  opacity: 0,
  duration:5
 });

timelinech5.from('.grrr', {
   opacity: 0,
   duration:4
  }, 1);

  timelinech5.to('.grrr',{
  scale:0.5,
  y: '18vh',
  ease:'ease out',
  duration: 4
}, '<1')


/*animation ch6*/
let timelinech6girl = gsap.timeline({})

timelinech6girl.from('.fille', {
  opacity: 0,
  delay:1,
  duration:4
 });

 timelinech6girl.from('.fille', {
  x: '4.9999999999999999999999999999999999999999999999vw',
  yoyo: 'true',
  duration: 0.0009,
  repeat: -1
 },1);

 timelinech6girl.from('.main', {
 y:'100vh',
 opacity:0,
 delay: 2,
 duration: 3
},1);

/*animation ch6 suite*/

let timelinech6suite = gsap.timeline({})

timelinech6suite.from('.wake',{
opacity:0,
delay:2,
duration:0.005
})

timelinech6suite.to('.wake',{
  scale: 0.135,
  rotation: 0,
  x: '-50.8vw',
  y: '-88vh',
  duration:3
  }, '<3')

timelinech6suite.from('#ch6-5',{
  opacity:0,
  duration:0.05
})

timelinech6suite.to('.wake',{
  x: '-90vw',
  duration:3
  }, '<1')

timelinech6suite.to('.no1',{
  x: '-30vw',
  duration:2.9
  }, '>-2.9')

timelinech6suite.to('.no2',{
  x: '-22vw',
  duration:2.9
  }, '>-2.9')

timelinech6suite.to('.no3',{
  x: '-14vw',
  duration:2.9
  }, '>-2.9')

  
timelinech6suite.to('.no4',{
  x: '-6vw',
  duration:2.9
  }, '>-2.9')

timelinech6suite.to('.no5',{
  x: '2vw',
  duration:2.95
  }, '>-2.95')

  timelinech6suite.to('.no6',{
    x: '10vw',
    duration:2.95
    }, '>-2.95')

    timelinech6suite.to('.no7',{
      x: '18vw',
      duration:2.95
      }, '>-2.95')