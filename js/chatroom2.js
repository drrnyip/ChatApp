    	<script type="text/javascript">
		(function() { 
			var publish_key = 'pub-c-e898feca-a5e0-44b7-844f-3c82a8282ba9';
			var subscribe_key = 'sub-c-5bef3f50-9d41-11e5-a5d0-0619f8945a4f';
			channel = 'channel_1';
			var username = window.location.search.substring(1).split('=')[1];
			pubnub =PUBNUB.init({
				publish_key : publish_key,
				subscribe_key : subscribe_key,
				uuid : username
			});

			pubnub.subscribe({
				channel : channel,
				callback : function(message) { 
				var oldMsg = chatHistory.value;
					$('#chatHistory')[0].innerHTML = oldMsg + message + "&#13;&#10;"; 
					document.getElementById("message").value='';
                    var textScroll = document.getElementById("chatHistory");
                    chatHistory.scrollTop = chatHistory.scrollHeight;
				},
				presence : function(state) { 
					if (state.action == 'join') {
						if ($('#userList').text().indexOf(state.uuid) == -1) {
							$('#userList')[0].innerHTML = state.uuid + '<br>' + $('#userList')[0].innerHTML;
						}
					} else if (state.action == 'leave' || state.action == 'timeout') { 
						var index = $('#userList')[0].innerHTML.indexOf(state.uuid);
						if ( index !== -1) {
							$('#userList')[0].innerHTML = 
								$('#userList')[0].innerHTML.substring(0,index) + 
								$('#userList')[0].innerHTML.substring(index+state.uuid.length+4);
						}
					}
					
				}
			});
			pubnub.bind('click', pubnub.$('sendButton'), function(e) { 
				pubnub.publish({
					channel : channel, 
					message : pubnub.get_uuid() + ' : '  + $('#message').val() + ' '
				});
				$('#message').val('');
			});
		})();
	</script>

	<script type="text/javascript">
		function leave() { 
			pubnub.unsubscribe({
				channel : channel,
				callback : function() {
					window.location = 'index.html';
				}
			});
		}
		
		function clickSend2() {
			if (document.getElementById("message").value != '') {
			document.getElementById("sendButton").click(); }
		}
		
		
		
function filter() {
	if (document.getElementById("message").value != '') {
        
        
        var str = document.getElementById("message").value;
        var re = new RegExp("fuck", 'gi');
        var res = str.replace(re, "fluff");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("fuk", 'gi');
        res = str.replace(re, "fluff");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("heck", 'gi');
        res = str.replace(re, "scones");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("shit", 'gi');
        res = str.replace(re, "poop");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("stupid", 'gi');
        res = str.replace(re, "brilliant");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("idiot", 'gi');
        res = str.replace(re, "genius");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("bitch", 'gi');
        res = str.replace(re, "beachball");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("whore", 'gi');
        res = str.replace(re, "lady");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("ass", 'gi');
        res = str.replace(re, "bottom");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("douche", 'gi');
        res = str.replace(re, "peach");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("damn", 'gi');
        res = str.replace(re, "bless");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("dumb", 'gi');
        res = str.replace(re, "smart");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("dick", 'gi');
        res = str.replace(re, "private part");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("vagina", 'gi');
        res = str.replace(re, "private part");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("sex", 'gi');
        res = str.replace(re, "something scary");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("penis", 'gi');
        res = str.replace(re, "private part");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("fluffing", 'gi');
        res = str.replace(re, "kidding");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("poopty", 'gi');
        res = str.replace(re, "poopy");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("hate", 'gi');
        res = str.replace(re, "don't like");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("arse", 'gi');
        res = str.replace(re, "bottom");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("butt", 'gi');
        res = str.replace(re, "bottom");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("piss", 'gi');
        res = str.replace(re, "peepee");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("retard", 'gi');
        res = str.replace(re, "doofus");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("cunt", 'gi');
        res = str.replace(re, "scary stuff");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("blowjob", 'gi');
        res = str.replace(re, "scary stuff");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("blow-job", 'gi');
        res = str.replace(re, "scary stuff");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("cock", 'gi');
        res = str.replace(re, "unspeakable");
        document.getElementById("message").value = res;
        str = document.getElementById("message").value;
        re = new RegExp("tits", 'gi');
        res = str.replace(re, "pillows");
        document.getElementById("message").value = res;
        

	clickSend2();
	}
}
          </script>