//Author: Ing. Edsel Serrano Montiel
//Require BlockUI.js

function messageSuccess(message, tiempo){
	 $.blockUI({ 
            message: message, 
            fadeIn: 700, 
            fadeOut: 700, 
            timeout: tiempo, 
            showOverlay: false, 
            centerY: false, 
            css: { 
            	size: '50px',
                width: '350px', 
                top: '90px', 
                left: '', 
                right: '70px', 
                border: 'none', 
                padding: '5px', 
                backgroundColor: 'rgb(31, 178, 48)', 
                '-webkit-border-radius': '0px', 
                '-moz-border-radius': '0px', 
                opacity: .8, 
                color: '#fff'
            } 
        });
}