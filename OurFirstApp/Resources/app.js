// this sets the background color of the master UIView (when there are no windows/tab groups on it)
// note: each UI element is it's own view. You must define each element
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);


var win3 = Titanium.UI.createWindow({  
    title:'Tab 3',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 3',
    window:win3
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 3',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

//win3.add(label3);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3); 


// open tab group
tabGroup.open();

//**************************

//var win = Ti.UI.currentWindow;

var smsNumbers = [];

var values = {cancel:function() {info.text = 'Cancelled';}, fields:['phone'], selectedProperty:function(e) {
			Ti.API.info('HELLO, I GOT HERE');
			/*
if (e.property == 'address') {
				Ti.API.log(e.value);
				info.text = e.value.Street
			}
			else {
				info.text = e.value;
			}
*/
			if (e.value) {
				info.text = e.value;
				smsNumbers.push(e.value);
				l4.text = smsNumbers.length;
				
				
				if (smsNumbers.length > 2) {
					info.text = '';
					for (var i = 0; i< smsNumbers.length; i++)	{
					info.text = info.text + smsNumbers[i] + ', ';
					}		
				}
			}
		}};
/* The statement below  uses the opens the address view in a tab 
win3.addEventListener('open',function() {
	Titanium.Contacts.showContacts(values);
});
*/
var show = Ti.UI.createButton({
	title:'Invite Friends',
	bottom:20,
	width:200,
	height:40
});
show.addEventListener('click', function() {
	Titanium.Contacts.showContacts(values);
});


var info = Ti.UI.createLabel({
	text:'',
	bottom:70,
	height:'auto',
	width:'auto'
});
/*
var v1 = Ti.UI.createView({
	top:20,
	width:300,
	height:40,
	left:10
});
var l1 = Ti.UI.createLabel({
	text:'Animated:',
	left:0,
});
var s1 = Ti.UI.createSwitch({
	value:true,
	right:10,
	top:5
});
s1.addEventListener('change', function() {
	if (s1.value) {
		values.animated = true;
	}
	else {
		values.animated = false;
	}
});
v1.add(l1);
v1.add(s1);

var v2 = Ti.UI.createView({
	top:70,
	width:300,
	height:40,
	left:10
});
var l2 = Ti.UI.createLabel({
	text:'Address only:',
	left:0,
});
var s2 = Ti.UI.createSwitch({
	value:false,
	right:10,
	top:5
});
s2.addEventListener('change', function() {
	if (s2.value) {
		values.fields = ['address'];
	}
	else {
		delete values.fields;
	}
});
v2.add(l2);
v2.add(s2);

var v3 = Ti.UI.createView({
	top:120,
	width:300,
	height:40,
	left:10
});
var l3 = Ti.UI.createLabel({
	text:'Stop on person:',
	left:0
});
var s3 = Ti.UI.createSwitch({
	value:false,
	right:10,
	top:5
});
s3.addEventListener('change', function() {
	if (s3.value) {
		values.selectedPerson = function(e) {
			info.text = e.person.fullName;

		}
if (s4.value) {
			s4.value = false;
		}
	}
	else {
		delete values.selectedPerson;
	}
});
v3.add(l3);
v3.add(s3);
*/
var v4 = Ti.UI.createView({
	top:170,
	width:300,
	height:40,
	left:10
});

var l4 = Ti.UI.createLabel({
	text:'',
	left:0
});
/*
var s4 = Ti.UI.createSwitch({
	value:false,
	right:10,
	top:5
});
s4.addEventListener('change', function() {
	if (s4.value) {
		values.selectedProperty = function(e) {
			if (e.property == 'address') {
				Ti.API.log(e.value);
				info.text = e.value.Street
			}
			else {
				info.text = e.value;
			}
		}
		if (s3.value) {
			s3.value = false;
		}
	}
	else {
		delete values.selectedProperty;
	}
});
v4.add(l4);
v4.add(s4);


win3.add(v1);
win3.add(v2);
win3.add(v3);
*/
win3.add(v4);
v4.add(l4);
// Comment out these views if you want the EventListener to be the tab 
 
win3.add(info);
win3.add(show);


