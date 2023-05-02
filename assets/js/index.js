$(function(){
    // header, main visual motion 
    introMotion = gsap.timeline({})
    introMotion
    .addLabel('a')
    .from('.header .inner',{ y: -30, opacity : 1, },'a')
    .from('.sc-hero .sub-tit, .sc-hero .btn-wrap',{ x: -170 },'a')
    .from('.sc-hero .tit01, .sc-hero .tit04',{ x: 100 },'a')
    .from('.sc-hero .elem08',{ height:0 },'a')
    .from('.sc-hero .elem04, .sc-hero .elem10, .sc-hero .elem12',{ scale:0 },'a')
    .from('.sc-hero .circle01.top, .sc-hero .circle01.btm',{ rotateZ: 180 },'a')
    .from('.sc-hero .hero-elem.elem02, .sc-hero .elem13',{ y:-100 },'a')
    .from(' .sc-hero .elem14',{ width : 0 },'a')
    .from('.sc-hero .elem07 .circle-pink-top',{ rotateZ: -180 },'a')
    .from('.sc-hero .circle-right',{ rotateZ: -180 },'a')
    .to('.sc-hero .elements-area .elem03',{ x : 0, opacity : 1,},'a')
    .to('.sc-hero .elements-area .elem05',{
        y : 0,
        opacity : 1,
    },'a')
    .to('.sc-hero .elements-area .dot-square',{
        scale3d :0,
        opacity : 1,
    },'a')

    // sc-visit  
    scVisit = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-visit",
            start:"0% 60%",
            end:"100% 0%",
        },
    })
         scVisit
        .to('.sc-visit .tit-visit',{
            x: 0, opacity : 1,
        })
        .to('.sc-visit .card-list > *',{
            y: 0, opacity :1 ,
            stagger:0.1
        })

    // sc-digital 
    scDigital = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-digital",
            start:"0% 80%",
            end : "100% 0%",
            scrub : 1
        },
    })
        scDigital
        .addLabel('a')
        .to('.sc-digital .illustr-area img',{ scale : 1 },'a')
        .to('.sc-digital .border-area',{ opacity : 1, },'a')
        .to('.sc-digital .desc-wrap',{ x : 0, opacity : 1, },'a')
        .to('.sc-digital .tit-wrap .tit01, .sc-digital .tit-wrap .tit02, .sc-digital .tit-wrap .tit03',{ x : 0, opacity : 1, },'a')

    // Audio  
    scAudio = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-audio",
            start:"0% 70%",
            end : "100% 0%",
        },
    })
        scAudio 
        .addLabel('a')
        .to('.sc-audio .group-tit > * ',{
            x : 0,
            opacity : 1
        },'a')
        .to('.sc-audio .audio-list > *',{
            y : 0,
            opacity : 1,
            stagger : 0.1,
        },'a')

    audioBtm = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-audio",
            start:"50% 40%",
            end : "100% 0%",
        },
    })
     audioBtm
    .to('.sc-audio .group-more',{
        y : 0,
        opacity : 1,
    })
})

