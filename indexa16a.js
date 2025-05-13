import {
    initJobCountModule,
    initJobModal,
    initFakeResetFilter,
    initParentFiltering,
    isOliviaOpen,
    locationTooltip
} from './jobModule.js?v=0.1.2';
import { addPrevNextBtnsClickHandlers, addDotBtnsAndClickHandlers, addPlayBtnListeners, scrollToSlide } from "./carousel.js";
import LanguageModule from './language.js?v=0.1.0';
initJobCountModule();
initJobModal();
initFakeResetFilter();
initParentFiltering();
isOliviaOpen();
locationTooltip();

const languageModuleInstance = new LanguageModule();
languageModuleInstance.init();

const siteHeader = document.querySelector('.site-header');
const hamburgerMenuIcon = document.querySelector('#mobile-btn');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavCloseButton = document.querySelectorAll('.close-mobile-nav');
const mobileNavLangButton = document.querySelector('#mobile-nav-language-button');
const mobileNavPrevButton = document.querySelector('.language .language-controls .previous__btn');
const desktopLangContainer = document.querySelector('.desktop-language-btn-container');
const desktopLangButton = document.querySelector('#desktop-language-btn');
// Home Page
const accordionButton = document.querySelectorAll('.accordion__button');
// Career Areas
const heroWithSubNav = document.querySelector('.hero.has-sub-nav');
const videoSpotlightButtons = document.querySelectorAll('.play-video-btn');
const videoModalPlayButtons = document.querySelectorAll('.video-modal-play-button');
// Video Carousel
const heroVideoPlayer = document.querySelector('#heroVideoPlayer');
const videoHeroContainer = document.querySelector('.video-hero__video-overlay');
const videoCarouselPagination = document.querySelectorAll('.video-item');
const videoHeroPlayFullVideoButton = document.querySelector('#videoHeroPlayFullButton');
const toggleBRollButton = document.querySelector('#toggleBRollVideo');
const videoDialog = document.querySelector('#videoDialog');
const videoDialogPlayer = document.querySelector('#videoDialogPlayer');
const closeDialogButton = document.querySelector('#closeDialog');
const footerNav = document.querySelector('.footer-nav');
// Sub Nav
const subNavLinks = document.querySelectorAll('.sub-nav-menu ul li a');
// Share Buttons
const shareButtons = document.querySelectorAll('.share-button');
const closeShareButtons = document.querySelectorAll('.close-share-menu');
// Image Modal Carousel
const imageButtons = document.querySelectorAll('.image__holder');
const imageCloseButton = document.querySelector('#imageCloseDialogButton');
const mobilePrevButton = document.querySelector('#ltolNextButton')
const mobileNextButton = document.querySelector('#ltolPrevButton');

const homeHeroVideos = [
    {
        'broll': 'https://d25zu39ynyitwy.cloudfront.net/oms/3891/video/2024/11/Z9G5Q_nike-how-we-do-it-b-roll/nike-how-we-do-it-b-roll.mp4',
        'full': 'https://players.brightcove.net/72451143001/q9jiKI03Z_default/index.html?videoId=6366243006112'
    },
    {
        'broll': 'https://d25zu39ynyitwy.cloudfront.net/oms/3891/video/2024/11/PD7O4_nike-victory-mode-b-roll/nike-victory-mode-b-roll.mp4',
        'full': 'https://players.brightcove.net/72451143001/q9jiKI03Z_default/index.html?videoId=6366244660112'
    },
    {
        'broll': 'https://d25zu39ynyitwy.cloudfront.net/oms/3891/video/2024/11/M37D6_nike-ctf-b-roll/nike-ctf-b-roll.mp4',
        'full': 'https://players.brightcove.net/72451143001/q9jiKI03Z_default/index.html?videoId=6366243304112'
    }
];

const lifeAtNikeHeroVideos = [
    {
        'broll': 'https://d25zu39ynyitwy.cloudfront.net/oms/3891/video/2024/11/2NCHJ_nike-why-we-do-it-b-roll/nike-why-we-do-it-b-roll.mp4',
        'full': 'https://players.brightcove.net/72451143001/q9jiKI03Z_default/index.html?videoId=6366245438112'
    },
    {
        'broll': 'https://d25zu39ynyitwy.cloudfront.net/oms/3891/video/2024/11/I40VQ_nike-jdi-b-roll/nike-jdi-b-roll.mp4',
        'full': 'https://players.brightcove.net/72451143001/q9jiKI03Z_default/index.html?videoId=6366243686112'
    },
    {
        'broll': 'https://d25zu39ynyitwy.cloudfront.net/oms/3891/video/2024/11/KDSAQ_nike-cf-b-roll/nike-cf-b-roll.mp4',
        'full': 'https://players.brightcove.net/72451143001/q9jiKI03Z_default/index.html?videoId=6366245537112'
    }
]

// hamburgerMenuIcon.addEventListener('click', () => {
//     mobileMenuContainer.classList.toggle('is-open');
// });

function updateSubNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sub-nav-menu ul li a');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.pageYOffset + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const targetId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${targetId}`) {
                    link.classList.add('active');
                    // automatically moves navigation link into viewport if on mobile
                    link.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
                }
            });
        }
    });
}

hamburgerMenuIcon.addEventListener('click', () => {
    mobileMenuContainer.classList.toggle('is-open');
    hamburgerMenuIcon.setAttribute('aria-expanded', true);
    if (mobileMenuContainer.classList.contains('is-open')) {
        footerNav.style.zIndex = '0';
    }
});

mobileNavCloseButton.forEach((button) => {
    button.addEventListener('click', () => {
        mobileMenuContainer.classList.remove('is-open');
        footerNav.style.removeProperty('z-index');
        hamburgerMenuIcon.setAttribute('aria-expanded', false)
    })
})

mobileNavLangButton.addEventListener('click', () => {
    mobileNav.classList.add('language-selected');
})

mobileNavPrevButton.addEventListener('click', () => {
    mobileNav.classList.remove('language-selected');
})

desktopLangButton.addEventListener('click', () => {
    let expanded = desktopLangContainer.getAttribute('aria-expanded') === 'true';
    desktopLangContainer.classList.toggle('show');
    desktopLangContainer.setAttribute('aria-expanded', !expanded)
})

// window.addEventListener('scroll', () => {
//     const zoomAdjustedThreshold = window.devicePixelRatio >= 2 ? 25 : 250;

//     console.log(zoomAdjustedThreshold);

//     if (scrollY > zoomAdjustedThreshold) {

//         siteHeader.classList.remove('is-transparent');
//     } else {
//         siteHeader.classList.add('is-transparent');
//     }

//     if (document.body.classList.contains('career-areas') || document.body.classList.contains('purpose')) {
//         updateSubNav();
//     }
// });


window.addEventListener('scroll', () => {
    function getZoomLevel() {
        return Math.round((window.innerWidth / window.outerWidth) * 100);
    }
    const zoomLevel = getZoomLevel();

    

    const scrollThreshold = zoomLevel >= 200 ? 25 : 250;
    //console.log(scrollThreshold)

    if (scrollY > scrollThreshold) {
        siteHeader.classList.remove('is-transparent');
        
    } else {
        siteHeader.classList.add('is-transparent');
        
    }

    if (document.body.classList.contains('career-areas') || document.body.classList.contains('purpose')) {
        updateSubNav();
    }
});

if (accordionButton.length) {
    accordionButton.forEach((button) => { 
        button.addEventListener('click', (e) => {
            const target = e.currentTarget;
            if (!target.closest('.nike-maxims-card').classList.contains('open')) {
                target.closest('.nike-maxims-card').classList.add('open');
                target.setAttribute('aria-expanded', true);
                target.previousElementSibling.setAttribute('aria-hidden', false);
            } else {
                target.closest('.nike-maxims-card').classList.remove('open');
                target.setAttribute('aria-expanded', false);
                target.previousElementSibling.setAttribute('aria-hidden', true);
            }
        })
    })
}

if (videoSpotlightButtons.length > 0) {
    videoSpotlightButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.currentTarget;
            target.closest('.image-wrapper').classList.add('hidden');
        })
    })
}

// Home Page - Card Carousel
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelectorAll('.nike-maxims-carousel').length > 0) {
        const carouselNode = document.querySelector('.nike-maxims-carousel');
        const carouselViewport = carouselNode.querySelector('.nike-maxims-carousel--viewport');
        const nextBtn = document.querySelector('#carouselNextButton');
        const prevBtn = document.querySelector('#carouselPrevButton');
        const options = {
            loop: false,
            align: 'start',
            autoplay: false
        };
        if (document.dir === 'rtl') options.direction = 'rtl';
        const embla = EmblaCarousel(carouselViewport, options);
        const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(embla, prevBtn, nextBtn);

        embla.on('destroy', () => {
            removePrevNextBtnsClickHandlers();
        });

    }
});

// Life at Nike - Image Carousel
if (document.querySelectorAll('.nike-image-carousel').length > 0) {
    const carousel = document.querySelector('.nike-image-carousel');
    const sliderViewport = document.querySelector('.nike-image-carousel__viewport');
    const nextBtn = document.querySelector('.nike-image-carousel__button--next');
    const prevBtn = document.querySelector('.nike-image-carousel__button--prev');
    const playBtn = document.querySelector('.nike-image-carousel__button--play');
    const dotsNode = document.querySelector('.nike-image-carousel__dots');
    const options = {
        loop: true
    };
    if (document.dir === 'rtl') options.direction = 'rtl';
    const embla = EmblaCarousel(sliderViewport, options, [EmblaCarouselFade(), EmblaCarouselAutoplay({ playOnInit: true, delay: 3000 })]);
    const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(embla, prevBtn, nextBtn);
    const removePlayBtnListeners = addPlayBtnListeners(embla, playBtn);
    const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(embla, dotsNode);
    embla.on('destroy', () => {
        removePrevNextBtnsClickHandlers();
        removeDotBtnsAndClickHandlers();
        removePlayBtnListeners();
    });
}


// Purpose - Testimonial Carousel

if (document.querySelectorAll('.slider').length > 0) {
    const carousel = document.querySelector('.slider');
    const sliderViewport = document.querySelector('.slider__viewport');
    const nextBtn = document.querySelector('.nike-image-carousel__button--next');
    const prevBtn = document.querySelector('.nike-image-carousel__button--prev');
    const playBtn = document.querySelector('.nike-image-carousel__button--play');
    const dotsNode = document.querySelector('.nike-image-carousel__dots');
    const options = {
        loop: true
    };
    if (document.dir === 'rtl') options.direction = 'rtl';
    const embla = EmblaCarousel(sliderViewport, options, [EmblaCarouselFade(), EmblaCarouselAutoplay({ playOnInit: true, delay: 3000 })]);
    const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(embla, prevBtn, nextBtn);
    const removePlayBtnListeners = addPlayBtnListeners(embla, playBtn);
    const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(embla, dotsNode);
    embla.on('destroy', () => {
        removePrevNextBtnsClickHandlers();
        removeDotBtnsAndClickHandlers();
        removePlayBtnListeners();
    });
}

// Life At Nike - Through Our Lens Carousel

function initSocialSlider(slideIndex) {
    const sliderViewport = document.querySelector('.social-slider__viewport');
    const nextBtn = document.querySelector('#socialSliderNext');
    const prevBtn = document.querySelector('#socialSliderPrev');
    const options = {
        loop: true,
        startIndex: slideIndex - 1
    };
    if (document.dir === 'rtl') options.direction = 'rtl';
    const embla = EmblaCarousel(sliderViewport, options, [EmblaCarouselFade()]);
    const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(embla, prevBtn, nextBtn);
    embla.on('destroy', () => {
        removePrevNextBtnsClickHandlers();
    });
}

if (subNavLinks) {
    subNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const target = e.currentTarget;
            // console.log(target)
            if (!target.classList.contains('active')) {
                subNavLinks.forEach(link => { 
                    if (link.classList.contains('active')) link.classList.remove('active');
                })
                target.classList.add('active');
            }
        })
    })
}

if (videoCarouselPagination.length) {
    videoCarouselPagination.forEach((button) => {
        button.addEventListener('click', (e) => {
            const videoID = e.currentTarget.dataset.video;
            // update pagination
            if (!e.currentTarget.classList.contains('active')) {
                videoCarouselPagination.forEach((link) => {
                    link.classList.remove('active');
                })
                e.currentTarget.classList.add('active');
                // change video
                heroVideoPlayer.dataset.started = true;
                toggleBRollButton.classList.remove('paused');
                if (document.body.classList.contains('home')) {
                    heroVideoPlayer.setAttribute('src', homeHeroVideos[`${videoID - 1}`]['broll']);
                } else if (document.body.classList.contains('life-at-nike')) {
                    heroVideoPlayer.setAttribute('src', lifeAtNikeHeroVideos[`${videoID - 1}`]['broll']);
                }
                document.querySelector('.video-hero').dataset.videoindex = videoID;
            }
        })
    })
}

if (heroVideoPlayer) {
    heroVideoPlayer.addEventListener('ended', () => {
        let nextVideo = Number(document.querySelector('.video-hero').dataset.videoindex);
        if (nextVideo === 3) {
            document.querySelector(`[data-video="1"]`).click();
        } else {
            document.querySelector(`[data-video="${nextVideo + 1}"]`).click();
        }
    })
}

if (toggleBRollButton) {
    toggleBRollButton.addEventListener('click', () => {
        let isPlaying = heroVideoPlayer.dataset.started === 'true';
        heroVideoPlayer.dataset.started = !isPlaying;
        if (isPlaying) {
            toggleBRollButton.classList.add('paused');
            toggleBRollButton.setAttribute('aria-label', 'Play hero video');
            heroVideoPlayer.pause();
        } else {
            toggleBRollButton.classList.remove('paused');
            toggleBRollButton.setAttribute('aria-label', 'Pause hero video')
            heroVideoPlayer.play();
        }
    })
}

if (videoModalPlayButtons.length) {
    videoModalPlayButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const iframe = document.querySelector('#videoDialogIframe');
            dialogPolyfill.registerDialog(videoDialog);
            videoDialog.showModal();
            iframe.setAttribute('src', e.currentTarget.dataset.src);
        })
    });
}

if (videoHeroPlayFullVideoButton) {
    videoHeroPlayFullVideoButton.addEventListener('click', () => {
        let lang = document.documentElement.lang;
        const heroNavItems = document.querySelectorAll('.hero-video-nav li');
        const iframe = document.querySelector('#videoDialogIframe');
        let index = 0;
        heroNavItems.forEach(item => {
            if (item.classList.contains('active')) {
                index = Number(item.dataset.video) - 1;
            };
        })
        if (document.querySelector('body').classList.contains('home')) {
            if (lang === 'en') {
                iframe.setAttribute('src', homeHeroVideos[`${index}`]['full']);
            } else {
                iframe.setAttribute('src', homeHeroVideos[`${index}`]['full'] + '&language=' + lang);
            }
        } else if (document.querySelector('body').classList.contains('life-at-nike')) {
            if (lang === 'en') {
                iframe.setAttribute('src', lifeAtNikeHeroVideos[`${index}`]['full']);
            } else {
                iframe.setAttribute('src', lifeAtNikeHeroVideos[`${index}`]['full'] + '&language=' + lang);
            }
        }
        dialogPolyfill.registerDialog(videoDialog);
        videoDialog.showModal();
    })
}

if (closeDialogButton) {
    closeDialogButton.addEventListener('click', () => {
        const iframe = document.querySelector('#videoDialogIframe');
        if (iframe) {
            const src = "";
            iframe.src = src;
        }
        videoDialog.close();
    })
}

if (imageCloseButton) {
    imageCloseButton.addEventListener('click', function () {
        imageDialog.close();
    })
}

if (imageButtons.length) {
    imageButtons.forEach(button => button.addEventListener('click', (e) => {
        let target = e.currentTarget;
        let targetSlide = Number(target.dataset.image);
        initSocialSlider(targetSlide);
        imageDialog.showModal();
    }))
}

function updateSocialGridPage() {
    const grid = document.querySelector('.social-grid');
    if (grid.classList.contains('page-1')) {
        grid.classList.remove('page-1');
        grid.classList.add('page-2');  
    } else {
        grid.classList.remove('page-2');
        grid.classList.add('page-1'); 
    }
}

if (mobileNextButton || mobilePrevButton) {
    mobileNextButton.addEventListener('click', updateSocialGridPage)
    mobilePrevButton.addEventListener('click', updateSocialGridPage)
}

document.addEventListener("DOMContentLoaded", () => {
    // Create a MutationObserver to monitor changes to the DOM
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            // Check for added widget node
            if (mutation.target.tagName === "DIV" && mutation.target.id === "chat-widget") {
                const shadowHost = document.querySelector("apply-widget");
                // Check if the shadow host exists and has a shadow root
                if (shadowHost && shadowHost.shadowRoot) {
                    //Show desktop widget footer if widget is loaded
                    const footerNav = document.querySelector('.footer-nav');
                    if (footerNav) { footerNav.classList.add('show'); }
                    //Show mobile chat button if widget is loaded
                    const chatBtns = document.querySelectorAll('.js-chat-btn');
                    if (chatBtns) {
                        chatBtns.forEach((chatBtn) => {
                            chatBtn.classList.add('show');
                        })
                    }

                    // Modify widget element
                    const shadowRoot = shadowHost.shadowRoot;
                    const maxWidgetElement = shadowRoot.querySelector(
                        ".el-popover__reference-wrapper"
                    );
                    maxWidgetElement.style.display = "none";
                    observer.disconnect();
                        

                    // } else {
                    //     console.log('max is not here');

                    //     // const chatButtons = document.querySelectorAll('.js-chat-btn, .footer-nav');
                    //     // chatButtons.forEach((x) => {
                    //     //     if (x.classList.contains('footer-nav')) {
                    //     //         const checkScreenSize = () => {
                    //     //             if (window.innerWidth >= 960) {
                    //     //                 x.style.display = 'none';
                    //     //             } else {
                    //     //                 x.style.display = '';
                    //     //             }
                    //     //         };

                    //     //         checkScreenSize();
                    //     //         window.addEventListener('resize', checkScreenSize);
                    //     //     } else if (x.classList.contains('js-chat-btn')) {
                    //     //         x.style.display = 'none';
                    //     //     }
                    //     // });


                    // }

                }
            }
        });
    });

    // Start observing the body for child additions
    observer.observe(document.body, { childList: true, subtree: true });
});



// removed importing function to handle chat click

// const chatButtons = document.querySelectorAll('.js-chat-btn');

// const openOlivia = () => {
//     document.querySelector('.apply-messenger-launcher').click();
// }

// chatButtons.forEach((button) => {
//     button.addEventListener('click', openOlivia);
// });

if (shareButtons.length) {
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('share-button-aside')) {
                if (!document.querySelector('.share-menu-aside').classList.contains('open')) {
                    document.querySelector('.share-menu-aside').classList.add('open');
                    document.querySelector('.share-menu-aside').setAttribute('aria-hidden', false);
                } else {
                    document.querySelector('.share-menu-aside').classList.remove('open');
                    document.querySelector('.share-menu-aside').setAttribute('aria-hidden', true);
                }
            } else {
                if (!document.querySelector('.share-menu-main').classList.contains('open')) {
                    document.querySelector('.share-menu-main').classList.add('open');
                    document.querySelector('.share-menu-main').setAttribute('aria-hidden', false);
                } else {
                    document.querySelector('.share-menu-main').classList.remove('open');
                    document.querySelector('.share-menu-main').setAttribute('aria-hidden', true);
                }
            }
        })
    })

    closeShareButtons.forEach(closeButton => {
        closeButton.addEventListener('click', (e) => {
            const shareMenus = document.querySelectorAll('.share-menu');
            shareMenus.forEach(menu => menu.classList.remove('open'));
        })
    })
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (key === "Escape") {
        const shareMenus = document.querySelectorAll('.share-menu');
        if (shareMenus.length) {
            shareMenus.forEach(menu => {
                if (menu.classList.contains('open')) menu.classList.remove('open');
            })
        }
    }
});

// Code needed to let users drag and scroll job filters on job search page
const slider = document.querySelector('.main-jobs__options-list');
let isDown = false;
let startX;
let scrollLeft;

if (slider) {
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
}


(function () { 
    if (scrollY > 250) {
        siteHeader.classList.remove('is-transparent');
    }

    const currentUrl = window.location.pathname;

    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.setAttribute('aria-current', 'page');
        }
    })
    if (imageButtons.length) {
        dialogPolyfill.registerDialog(imageDialog);
    }
})()




function initJobsAnimation() {
    const pinElement = "#pin";
    const leftElement = ".main-jobs__left";
    const isDesktop = window.innerWidth > 1024;

    // Initialize ScrollTrigger for desktop
    if (isDesktop) {
        gsap.to(pinElement, {
            y: 0,
            ease: "none",
            scrollTrigger: {
                trigger: pinElement,
                start: "top-=60 top",
                end: () => `+=${document.querySelector(leftElement).offsetHeight - document.querySelector(pinElement).clientHeight}`,
                pin: true,
                pinSpacing: false,
                markers: false,
                invalidateOnRefresh: true
            }
        });
    } else {
        // Reset properties on mobile
        gsap.set(pinElement, { clearProps: "y", position: "static", top: "auto" });
    }

    const targetElement = document.documentElement;
    let lastHeight = targetElement.offsetHeight;
    let wasBelow2000 = lastHeight <= 2000;

    const observer = new ResizeObserver(() => {
        const currentHeight = targetElement.offsetHeight;

        
        if (currentHeight <= 2000) {
            if (!wasBelow2000) {
                
                ScrollTrigger.refresh();
                wasBelow2000 = true; 
            }
        } else {
            if (wasBelow2000) {
                
                ScrollTrigger.refresh();
                wasBelow2000 = false; 
            }
        }

    });

    
    observer.observe(targetElement);
}




function initJobDetailsAnimation() {
    const pinElement = "#pin";

    if (window.innerWidth > 1024) {
        // console.log('greater thn 1024')
        gsap.to(pinElement, {
            y: 0,
            ease: "none",
            scrollTrigger: {
                trigger: pinElement,
                start: "top-=60 top",
                end: () => `+=${document.querySelector('.job-post-summary').offsetHeight - document.querySelector(pinElement).clientHeight}`,
                pin: true,
                pinSpacing: false
            }
        });
    } else {
        // console.log('not greater thn 1024')
        gsap.set(pinElement, { clearProps: "y", position: "static", top: "auto" });
    }

    window.addEventListener("resize", function () {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(initJobDetailsAnimation, 300);
    });


}

if (document.body.classList.contains("page-jobs")) {
    initJobsAnimation();
} else if (document.body.classList.contains("page-job-details")) {
    initJobDetailsAnimation();
}
