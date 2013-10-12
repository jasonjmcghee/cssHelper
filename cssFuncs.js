function fluidChange ( element, sliderElement, attribute, maxVal, defaultSize ) {
  $(function() {
    $( "<div id='"+sliderElement+"' class='sliders'></div>" ).insertAfter('#'+element);
    $('#'+sliderElement).slider({ value: defaultSize });
    $('#'+sliderElement).on( "slide", function( event, ui) {
      var sliderVal = $('#'+sliderElement).slider("option", "value");
      $('#'+element).css(attribute, maxVal * (sliderVal/100)+'px');
    });
  });
}
