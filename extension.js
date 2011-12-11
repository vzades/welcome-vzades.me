const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const GLib = imports.gi.GLib;

let text,text1, text2,text3,text4,text5,text6,text7,button;

function _hideHello() {
    Main.uiGroup.remove_actor(text);
    text = null;
 Main.uiGroup.remove_actor(text1);
    text1 = null;
Main.uiGroup.remove_actor(text2);
    text2 = null;
Main.uiGroup.remove_actor(text3);
    text3 = null;
Main.uiGroup.remove_actor(text4);
    text4 = null;
Main.uiGroup.remove_actor(text5);
    text5 = null;
Main.uiGroup.remove_actor(text6);
    text6 = null;
_show1Hello()
}
function _hide1Hello(){
Main.uiGroup.remove_actor(text7);
    text7 = null;

}

function _show1Hello() {
    if (!text) {
        text= new St.Label({ style_class: 'welcome', text:GLib.get_user_name() });
        Main.uiGroup.add_actor(text);
    }
    text.opacity = 255;
    let monitor = Main.layoutManager.primaryMonitor;
// text.set_position(Math.floor(monitor.width / 2 - text.width / 2),
  //               Math.floor(monitor.height / 2 - text.height / 2));
    Tweener.addTween(text,
                     {
			x:Math.floor(monitor.width),
			y: Math.floor(monitor.height),
                       time: 3,
      transition: 'easeInOutBounce',
	onComplete: _hide1Hello,
	
      
    
});

}


function _showHello() {
    if (!text) {
        text = new St.Label({ style_class: 'helloworld-label', text: 'w' });
        Main.uiGroup.add_actor(text);
    }
   if (!text1) {
        text1 = new St.Label({ style_class: 'helloworld-label', text: 'e' });
        Main.uiGroup.add_actor(text1);
    }
if (!text2) {
        text2 = new St.Label({ style_class: 'helloworld-label', text: 'l' });
        Main.uiGroup.add_actor(text2);
    }
if (!text3) {
        text3 = new St.Label({ style_class: 'helloworld-label', text: 'c' });
        Main.uiGroup.add_actor(text3);
    }
if (!text4) {
        text4= new St.Label({ style_class: 'helloworld-label', text: 'o' });
        Main.uiGroup.add_actor(text4);
    }
if (!text5) {
        text5 = new St.Label({ style_class: 'helloworld-label', text: 'm' });
        Main.uiGroup.add_actor(text5);
    }
if (!text6) {
        text6= new St.Label({ style_class: 'helloworld-label', text: 'e' });
        Main.uiGroup.add_actor(text6);
    }



    text.opacity = 255;
   

    let monitor = Main.layoutManager.primaryMonitor;

   // text.set_position(Math.floor(monitor.width / 2 - text.width / 2),
     //                 Math.floor(monitor.height / 2 - text.height / 2));

    Tweener.addTween(text,
                     {
			x: Math.floor(monitor.width / 2 - text.width / 2)-200,
			y: Math.floor(monitor.height / 2 - text.height / 2),
                       time: 2,
      transition: 'easeOutElastic',
    
});
Tweener.addTween(text1,
                     {
			x:Math.floor(monitor.width / 2 - text.width / 2)+text.width/2-200+20,
			y: Math.floor(monitor.height / 2 - text.height / 2),
                       time: 3,
      transition: 'easeOutElastic',
	//onComplete: _hideHello,
	
      
    
});
Tweener.addTween(text2,
                     {
			x:Math.floor(monitor.width / 2 - text.width / 2)+text1.width/2+text.width/2-200+20 ,
			y: Math.floor(monitor.height / 2 - text.height / 2),
                       time: 5,
      transition: 'easeOutElastic',
	//onComplete: _hideHello,
     
    
});
Tweener.addTween(text3,
                     {
			x:Math.floor(monitor.width / 2 - text.width / 2)+text2.width/2 +text1.width/2+text.width/2-200+20,
			y: Math.floor(monitor.height / 2 - text.height / 2),
                       time: 6,
      transition: 'easeOutElastic',
      
    
});
Tweener.addTween(text4,
                     {
			x:Math.floor(monitor.width / 2 - text.width / 2)+text3.width/2+text2.width/2 +text1.width/2+text.width/2-200+20 ,
			y: Math.floor(monitor.height / 2 - text.height / 2),
                       time: 7,
      transition: 'easeOutElastic',
     onComplete: _hideHello,
    
});
Tweener.addTween(text5,
                     {
			x:Math.floor(monitor.width / 2 - text.width / 2)+text4.width/2+text3.width/2+text2.width/2 +text1.width/2+text.width/2-200+20 ,
			y: Math.floor(monitor.height / 2 - text.height / 2),
                       time: 8,
      transition: 'easeOutElastic',
      
    
});
Tweener.addTween(text6,
                     {
			x:Math.floor(monitor.width / 2 - text.width / 2)+text5.width/2+text4.width/2+text3.width/2+text2.width/2 +text1.width/2+text.width/2-200+40 ,
			y: Math.floor(monitor.height / 2 - text.height / 2),
                       time: 9,
      transition: 'easeOutElastic',
      onComplete: _hideHello,
    
});
}
 

function init() {
 button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });
    let icon = new St.Icon({ icon_name: 'system-run',
                             icon_type: St.IconType.SYMBOLIC,
                             style_class: 'system-status-icon' });

    
    button.connect('button-press-event', _showHello);
_showHello()
    
}

function enable() {
    Main.panel._rightBox.insert_actor(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_actor(button);
}
