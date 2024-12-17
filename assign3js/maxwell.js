function $(id) {

    return document.getElementById(id)

};


function activate() {

    let dimensions1 = window.matchMedia("(max-width: 655px) and (max-height: 960px)")

    let dimensions2 = window.matchMedia("(max-width: 655px)")


    if (dimensions1.matches || dimensions2.matches) {

        $("offcanvasExample").classList.add('offcanvas', 'offcanvas-start');

        $("offcanvasExample").setAttribute('tabindex', '-1');

        $("offcanvasExample").setAttribute('aria-labelledby', 'offcanvasExampleLabel');

    }

    else {

        $("offcanvasExample").classList.remove('offcanvas','offcanvas-start' )

    }

}


window.addEventListener('resize',activate)