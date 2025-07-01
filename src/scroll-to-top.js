const btnScrollToTop = document.getElementById( 'scroll-to-top' );

if ( btnScrollToTop ) {
  // OnClick: Scroll to top
  btnScrollToTop.addEventListener( 'click', () => {
    window.scrollTo( {
      top: 0,
      behavior: 'smooth',
    } );
  } );

  // OnScroll: Update visibility.
  document.addEventListener( 'scroll', () => {
    btnVisibility();
  } );
}

/**
 * Controls the visibility of a scroll button based on the user's scroll position.
 *
 * @return {void} No return value.
 */
function btnVisibility() {
  if ( window.scrollY > 100 ) {
    btnScrollToTop.classList.add( 'opacity-100' );
    btnScrollToTop.classList.remove( 'opacity-0', 'pointer-events-none' );
  } else {
    btnScrollToTop.classList.add( 'opacity-0', 'pointer-events-none' );
    btnScrollToTop.classList.remove( 'opacity-100' );
  }
}
