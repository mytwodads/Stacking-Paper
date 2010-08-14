var theClient = Titanium.Network.createHTTPClient(onload: function(){Ti.API.log("We just had an finished onLoad");},onerror:function(){Ti.API.log(theClient.responseXML);});

theClient.open("GET","http://www.google.com");

theClient.send();
