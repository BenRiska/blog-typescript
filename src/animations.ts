import gsap from "gsap"

let tl = gsap.timeline();

export const homeAnimation = (f: () => void) => {
    tl.to(".landing", {
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      zIndex: -5,
      onComplete: f
    })
  }

  export const easeBlogs = () => {
    tl.to(".blogList", {
      opacity: 1,
      duration: .5,
      y: 0,
      ease: "power4.out",
    })
  }
  
  export const prepBlogAnimation = (showBlog: () => void) => {
    tl.to(".blogList__topics-container, .blogList__layout, .blogList__container", {
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
  
  
  export const showBlogAnimation = () => {
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
  
  export const removeBlogAnimation = (f: () => void) => {
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


export const openDropdownAnimation = () => {tl.to(".blogList__underline", {
    duration: .3,
    width: "100px",
    height: "2px",
    ease: "power1.out"
}).to(".blogList__topics", {
    duration: .5,
    height: "160px",
    ease: "power1.out"
})}

export const closeDropdownAnimation = () => {tl.to(".blogList__topics", {
    duration: .5,
    height: "0",
    ease: "expo.inout"
}).to(".blogList__underline", {
    duration: .3,
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

export const removeGridItems = (setList: () => void) => {tl.to(".grid-item", {
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

export const removeListItems = (setGrid: () => void) => {tl.to(".list-item", {
    duration: 1,
    opacity: 0,
    y: -30,
    ease: "power4.out",
    stagger: {
        amount: 1
      },
      onComplete: setGrid
})}