jQuery(document).ready(function ($) {

    var _CaptionTransitions = [
      //CLIP|LR
      {$Duration: 900, $Clip: 3, $Easing: $JssorEasing$.$EaseInOutCubic }
    ];

    var options = {
        $AutoPlay: false,                                    
        $AutoPlaySteps: 1,                                  
        $AutoPlayInterval: 8000,                            
        $PauseOnHover: 1,

        $ArrowKeyNavigation: true,
        $SlideDuration: 500,                                
        $MinDragOffsetToSlide: 20,
        $SlideSpacing: 0,
        $DisplayPieces: 1,                                  
        $ParkingPosition: 0,                                
        $UISearchMode: 1,                                   
        $PlayOrientation: 1,                                
        $DragOrientation: 3,                                

        $CaptionSliderOptions: {                            
            $Class: $JssorCaptionSlider$,                   
            $CaptionTransitions: _CaptionTransitions,       
            $PlayInMode: 1,                                 
            $PlayOutMode: 3                                 
        },

        $BulletNavigatorOptions: {                                
            $Class: $JssorBulletNavigator$,                       
            $ChanceToShow: 2,                               
            $AutoCenter: 0,                                 
            $Steps: 1,                                      
            $Lanes: 1,                                      
            $SpacingX: 10,                                  
            $SpacingY: 10,                                   
            $Orientation: 1                                 
        },

        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $ChanceToShow: 1,                              
            $AutoCenter: 2,                                 
            $Steps: 1                                       
        }
    };
    var jssor_slider1 = new $JssorSlider$("slider1_container", options);
    function ScaleSlider() {
        var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
        if (parentWidth)
            jssor_slider1.$ScaleWidth(Math.min(parentWidth, 600));
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});