function heroAnimation(){
  let tl = gsap.timeline();

  tl.from('.nav1',{
    y: -80,
    duration: 1,
    opacity: 0,
    stagger : 0.25
  })
  tl.from('.nav i',{
    x: 50,
    opacity: 0,
  })
  tl.from('.nav2 h2',{
    y: -80,
    duration: 0.5,
    opacity: 0,
    stagger : 0.25
  })

  

  // tl.from('.tech-stack h1',{
  //   y : 490,
  // })

  // tl.from('.frontend img',{
  //   opacity: 0,
  //   x: -100,
  //   opacity: 0,
  //   duration: 1,
  //   stagger : 0.23,
  //   ease: "elastic.out(1, 0.6)"
  // })
  
  
  
  tl.from('.hero-img',{
    opacity: 0,
    })
    
    
    tl.from('.hero-content h1',{
      y: 30,
      opacity: 0,
      duration: 1,
    })
    tl.from('.hero-content h3',{
      y: 30,
      opacity: 0,
      duration: 1,
    })

    tl.from('.hero-icons a',{
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.6)"
    })
    
    
  }


  function about(){
    let vid = document.querySelector(".about-art video")
    gsap.from('.about-art',{
      scrollTrigger:{
        trigger: ".page2",
        scroller : "body",
      start : "top 25%",
      end: "top 30%",
      onEnter : function(){
        vid.play();
      },      
    }
  })
}


function gooeyEffect(){
  Shery.imageEffect(".project-img", {
        style: 6,
        gooey: true,
      });
}



heroAnimation();
about();
gooeyEffect();

