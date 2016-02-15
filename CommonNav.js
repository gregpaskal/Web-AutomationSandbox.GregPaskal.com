function menu_goto( menuform )
{
  selecteditem = menuform.url.selectedIndex ;
  newurl = menuform.url.options[ selecteditem ].value ;
  if (newurl.length != 0) {
    top.top.location.href = newurl ;
  }
}
document.writeln( '<form action="chgoto" method="get" target="_top">' );
document.writeln( ' <select name="url" onchange="menu_goto(this.form)">' );
document.writeln( '   <option value="#">Where do you want to go</option>' );
document.writeln( '   <option value="http://automationsandbox.gregpaskal.com">Home</option>' );
document.writeln( '   <option value="http://www.google.com">Google</option>' );
document.writeln( '   <option value="http://www.MissionWares.com">MissionWares</option>' );
document.writeln( '   <option value="http://www.DaveRamsey.com">Dave Ramsey</option>' );
document.writeln( ' </select>' );
document.writeln( '</form>' );
