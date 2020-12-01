import gsap from "gsap"

let tl = gsap.timeline();

export const homeAnimation = (f: any) => {
    tl.to(".landing", {
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      zIndex: -5,
      onComplete: f
    })
  }

  export const easeBlogs = () => {
    tl.to(".blogs", {
      opacity: 1,
      duration: .5,
      y: 0,
      ease: "power4.out",
    })
  }
  
  export const prepBlogAnimation = (showBlog: any) => {
    tl.to(".blog-topics, .blog-layout, .layout-container", {
      y: -10,
      duration: 1,
      opacity: 0,
      ease: "power4.out",
      transformOrigin: "top center",
      stagger: {
        amount: 0.3
      },
      onComplete: showBlog
    })
  }
  
  
  export const showBlogAnimation = (blog: any) => {
    tl.to(`.options > p, .option-controls, .header, .blog-body, .blog-footer`, {
      duration: 0.7,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      stagger: {
        amount: 1
      },
    })
  }
  
  export const removeBlogAnimation = (blog: any, f: any) => {
    tl.to(`.back, .option-controls, .header, .blog-body, .blog-footer`, {
      duration: 0.5,
      opacity: 0,
      y: -10,
      ease: "power4.out",
      stagger: {
        amount: .5
      },
      onComplete: f
    })
  }
  
  export const removeContactText = (f: any) => {
    tl.to(`.blogs, .say-hi, .share`, {
      duration: 1,
      opacity: 0,
      onComplete: f
    })
  }
  
  export const removeContactSection = (f: any) => {
    tl.to(`.contact, .contact-exit, .share`, {
      duration: 1,
      opacity: 0,
      onComplete: f
    })
  }
  
  
  export const removeContactBlogText = (blog: any, f: any) => {
    tl.to(`.blog-${blog}, .say-hi, .share`, {
      duration: 1,
      opacity: 0,
      onComplete: f
    })
  }

export const showContents = () => {
    tl.to(".contact, .contact-exit > img", {
        duration: 3,
        opacity: 1,
    })
}


export const openDropdownAnimation = () => {tl.to(".underline", {
    duration: .7,
    width: "100px",
    height: "2px",
    ease: "power1.out"
}).to(".topics", {
    duration: .7,
    height: "160px",
    ease: "power1.out"
})}

export const closeDropdownAnimation = () => {tl.to(".topics", {
    duration: .5,
    height: "0",
    ease: "expo.inout"
}).to(".underline", {
    duration: .4,
    height: "1px",
    width: "100%",
    ease: "expo.inOut"
})}


export const showGridItems = () => {tl.to(".grid-item", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power4.out",
    stagger: {
        amount: 1
      }
})}

export const removeGridItems = (setList: any) => {tl.to(".grid-item", {
    duration: 1,
    opacity: 0,
    y: -30,
    ease: "power4.out",
    stagger: {
        amount: 1
      },
      onComplete: setList
})}

export const showListItems = () => {tl.to(".list-item", {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power4.out",
    stagger: {
        amount: 1
      }
})}

export const removeListItems = (setGrid: any) => {tl.to(".list-item", {
    duration: 1,
    opacity: 0,
    y: -30,
    ease: "power4.out",
    stagger: {
        amount: 1
      },
      onComplete: setGrid
})}