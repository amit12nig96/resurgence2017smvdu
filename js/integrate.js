var PushAlertCo = new function() {
    this.mobilePos = 'mobileBottom';
    this.isMobile = false;
    this.seg_id = 0;
    this.method = 2;
    this.pa_id = 115;
    this.subdomain = "resurgencesmvdu.pushalert.co";
    this.subdomain_url = "https://resurgencesmvdu.pushalert.co";
    this.domain = "resurgence.smvdu.ac.in";
    this.pa_subdomain = "https://resurgencesmvdu.pushalert.co";
    this.pa_domain_id = 1;
    this.subs_id = "";
    
    this.ringingAnimation = false;
    this.frameRateMS = 400;
    this.ringCount = 0;
    
    this.enableWidget = 1;
    this.widgetTheme = 'round';
    this.widgetColor = '#337ab7';
    this.widgetText = 'Get notifications in real-time for staying up to date with content that matters to you.';
    
    this.isListening = false;
    this.isCSSEmbeded = false;
    this.enableAutoSubs = true;
    this.enableUnsubs = true;
    
    this.enableContentRecommendation = false;
    this.PARecContentHide = false;
    this.PAContentRecScrollPosition = 0.5;
    this.PARecTheme = "pa-rec-light";
    this.PARecShowOnHomepage = true;
    this.PARecHideOn = [];

    this.appendFrame = function (){
        var iframe = document.createElement('iframe');
        iframe.src = this.subdomain_url + "?action=frame-subscribe";
        iframe.height = '0';
        iframe.width = '0';
        iframe.style.visibility = 'hidden';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        this.registerMessageListener();
    }
        
    this.appendPACSS = function() {
        if(!this.isCSSEmbeded){
            pa_head = document.head || document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            //link.id   = cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://cdn.pushalert.co/integrate-v2.css';
            link.media = 'all';
            pa_head.appendChild(link);
            
            this.isCSSEmbeded = true;
        }
    }
        
    this.confirmPushAlert = function (){
        this.appendPACSS();


        pa_alert = '<div class="pa-push-notification-confirm" style="position:fixed">\
                <img src="http://resurgence.smvdu.ac.in/images/logo.png?1483946665" height="64" width="64" class="pa-logo">\
                <h2>Thanks for Subscribing!</h2>\
                <p>Press close to continue.</p>\
                <p class="pa-actions clearfix">\
                        <button onclick="PushAlertCo.PA_OK()" class="allow">Close</button>\
                </p>\
                <a rel="nofollow" href="https://pushalert.co/" class="powered_by" target="_blank">Powered by PushAlert</a>\
                <div id="pa-close-confirm">\
                    <svg viewBox="0 0 40 40">\
                        <path class="pa-close-x" d="M 10,10 L 30,30 M 30,10 L 10,30"></path>\
                    </svg>\
                </div>\
        </div>';

        //var paDivContainer = document.getElementById('pa-push-notification');
        var paDivContainer = document.createElement('div');
        paDivContainer.id = 'pa-push-notification-confirm';
        paDivContainer.innerHTML = pa_alert;
        paDivContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';
        paDivContainer.style.zIndex = '2147483647';
        paDivContainer.style.position = 'absolute';
        document.body.appendChild(paDivContainer);

        var paDiv = document.getElementById('pa-push-notification-confirm').getElementsByTagName("div")[0];
        //paDivContainer.style.height = (document.body.clientHeight-paDiv.clientHeight) + 'px';
        var body = document.body,
            html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight, 
                               html.clientHeight, html.scrollHeight, html.offsetHeight );
        paDivContainer.style.height = height + 'px';

        margin_left = (300 + 30)/2;
        paDiv.style.marginLeft = '-'+margin_left+'px';

        margin_top = (paDiv.clientHeight + 34)/2;
        paDiv.style.marginTop = '-'+margin_top+'px';

        if(this.isMobile && this.mobilePos==='mobileCenter'){
            paDiv.style.setProperty('margin-top', '-'+margin_top+'px', 'important');
        }
        else{
            paDiv.style.setProperty('margin-top', '-'+margin_top+'px');
        }
        
        var paConfirmClose = document.getElementById("pa-close-confirm");
        if(this.getCookie("pushalert_subs_status")!==""){
            paConfirmClose.style.display = 'block';
        }
        paConfirmClose.addEventListener("click", function(){
            PushAlertCo.hidePushAlertConfirm();
        });
    }
    
    this.unsubscribe = function (){
        this.confirmUnsubscribe();
    }
        
    this.confirmUnsubscribe = function (){
        this.appendPACSS();


        pa_alert = '<div class="pa-push-notification-confirm">\
                <img src="http://resurgence.smvdu.ac.in/images/logo.png?1483946665" height="64" width="64" class="pa-logo">\
                <h2>Are you sure you want to unsubscribe?</h2>\
                <p class="pa-actions clearfix">\
                        <button onclick="PushAlertCo.PA_UNSUBS_OK()" class="deny">Yes</button> <button onclick="PushAlertCo.hidePushAlertConfirm()" class="allow">No</button>\
                </p>\
                <a rel="nofollow" href="https://pushalert.co/" class="powered_by" target="_blank">Powered by PushAlert</a>\
        </div>';

        //var paDivContainer = document.getElementById('pa-push-notification');
        var paDivContainer = document.createElement('div');
        paDivContainer.id = 'pa-push-notification-confirm';
        paDivContainer.innerHTML = pa_alert;
        paDivContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';
        paDivContainer.style.zIndex = '2147483647';		
        document.body.appendChild(paDivContainer);

        var paDiv = document.getElementById('pa-push-notification-confirm').getElementsByTagName("div")[0];
        //paDivContainer.style.height = (document.body.clientHeight-paDiv.clientHeight) + 'px';
        var body = document.body,
            html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight, 
                               html.clientHeight, html.scrollHeight, html.offsetHeight );
        paDivContainer.style.height = height + 'px';

        margin_left = (300 + 30)/2;
        paDiv.style.marginLeft = '-'+margin_left+'px';

        margin_top = (paDiv.clientHeight + 34)/2;
        paDiv.style.marginTop = '-'+margin_top+'px';

        if(this.isMobile && this.mobilePos==='mobileCenter'){
            paDiv.style.setProperty('margin-top', '-'+margin_top+'px', 'important');
        }
        else{
            paDiv.style.setProperty('margin-top', '-'+margin_top+'px');
        }
    }
    
    this.confirmUnblock = function (){
        this.appendPACSS();


        pa_alert = '<div class="pa-push-notification-confirm">\
                <img src="https://cdn.pushalert.co/icons/logo.png?1483946665" height="64" width="64" class="pa-logo">\
                <h2>Please unblock notification in order to subscribe us.</h2>\
                <p class="pa-actions clearfix">\
                        <button onclick="PushAlertCo.PA_Unblock()" class="allow">Unblock</button> <button onclick="PushAlertCo.hidePushAlertConfirm()" class="deny">Cancel</button>\
                </p>\
                <a rel="nofollow" href="https://pushalert.co/" class="powered_by" target="_blank">Powered by PushAlert</a>\
        </div>';

        //var paDivContainer = document.getElementById('pa-push-notification');
        var paDivContainer = document.createElement('div');
        paDivContainer.id = 'pa-push-notification-confirm';
        paDivContainer.innerHTML = pa_alert;
        paDivContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';
        paDivContainer.style.zIndex = '2147483647';		
        document.body.appendChild(paDivContainer);

        var paDiv = document.getElementById('pa-push-notification-confirm').getElementsByTagName("div")[0];
        //paDivContainer.style.height = (document.body.clientHeight-paDiv.clientHeight) + 'px';
        var body = document.body,
            html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight, 
                               html.clientHeight, html.scrollHeight, html.offsetHeight );
        paDivContainer.style.height = height + 'px';

        margin_left = (300 + 30)/2;
        paDiv.style.marginLeft = '-'+margin_left+'px';

        margin_top = (paDiv.clientHeight + 34)/2;
        paDiv.style.marginTop = '-'+margin_top+'px';

        if(this.isMobile && this.mobilePos==='mobileCenter'){
            paDiv.style.setProperty('margin-top', '-'+margin_top+'px', 'important');
        }
        else{
            paDiv.style.setProperty('margin-top', '-'+margin_top+'px');
        }
    }

    this.PA_OK = function (){
        this.seg_id = this.checkSegmentIDValue();
        this.PopupCenter(this.subdomain_url + '?action=frame-subscribed&segment='+this.seg_id, "PushAlert Confirmation", 300, 250);
        this.hidePushAlertConfirm();
    }
    
    this.PA_Unblock = function (){
        this.seg_id = this.checkSegmentIDValue();
        window.open(this.subdomain_url + '?segment='+this.seg_id);
        this.hidePushAlertConfirm();
        this.registerMessageListener();
    }
    
    this.PA_UNSUBS_OK = function (){
        this.PopupCenter(this.subdomain_url + '?action=unsubscribe', "PushAlert Confirmation", 300, 250);
        this.registerMessageListener();
        this.hidePushAlertConfirm();
    }

    this.PopupCenter = function(url, title, w, h) {
        // Fixes dual-screen position                         Most browsers      Firefox
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, title, 'menubar=no,location=no,resizable=no,scrollbars=no,status=no,location=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
    }
    
    this.showSubscribeWidget = function (){
        var testId = document.getElementById('pushalert-ticker');
        if(this.enableWidget==0 || (typeof testId!== 'undefined' && testId!==null)){
            return;
        }
        this.appendPACSS();


        if(this.widgetTheme==='round'){
            pa_alert = '<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="32" height="32"/>\
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="16" height="16" class="pa-close"/>'
            //var paDivContainer = document.getElementById('pa-push-notification');
            var paDivContainer = document.createElement('div');
            paDivContainer.id = 'pushalert-ticker';
            paDivContainer.className = 'pa-subscribe-widget-round';
            if(!this.isMobile){
                paDivContainer.className = paDivContainer.className + ' pa-desktop';
            }
            if(this.getCookie("pushalert_subs_status")==="subscribed"){
                paDivContainer.className = paDivContainer.className + ' pa-unsubscribe';
            }
            paDivContainer.innerHTML = pa_alert;
            paDivContainer.style.backgroundColor = this.widgetColor;
            paDivContainer.style.height = "0px";
            
            paDivContainer.addEventListener("click", function(){
                if(PushAlertCo.getCookie('pushalert_subs_status')==='subscribed'){
                    PushAlertCo.PA_NOTIFICATION_INFO_TOGGLE();
                }
                else if(PushAlertCo.getCookie('pushalert_subs_status')==='' && !PushAlertCo.enableAutoSubs && PushAlertCo.getCookie('pushalert_subs_dialog')===''){
                    PushAlertCo.clearPAFirstTime(true);
                }
                else{
                    PushAlertCo.forceSubscribe();
                }
            });
            document.body.appendChild(paDivContainer);

        }
        else{
            pa_alert = '<span class="pa-sep"></span>\
            <img src="https://cdn.pushalert.co/img/pushalert-widget-side.svg?a=1" width="30" height="136">';

            //var paDivContainer = document.getElementById('pa-push-notification');
            var paDivContainer = document.createElement('div');
            paDivContainer.id = 'pushalert-ticker';
            paDivContainer.className = 'pa-subscribe-widget-side';
            if(!this.isMobile){
                paDivContainer.className = paDivContainer.className + ' pa-desktop';
            }
            if(this.getCookie("pushalert_subs_status")==="subscribed"){
                paDivContainer.className = paDivContainer.className + ' pa-unsubscribe';
            }
            paDivContainer.innerHTML = pa_alert;
            paDivContainer.style.backgroundColor = this.widgetColor;
            paDivContainer.style.height = "0px";
            paDivContainer.style.zIndex = '2147483647';	
            
            paDivContainer.addEventListener("click", function(){
                if(PushAlertCo.getCookie('pushalert_subs_status')==='subscribed'){
                    PushAlertCo.PA_NOTIFICATION_INFO_TOGGLE();
                }
                else if(PushAlertCo.getCookie('pushalert_subs_status')==='' && !PushAlertCo.enableAutoSubs && PushAlertCo.getCookie('pushalert_subs_dialog')===''){
                    PushAlertCo.clearPAFirstTime(true);
                }
                else{
                    PushAlertCo.forceSubscribe();
                }
            });
            
            document.body.appendChild(paDivContainer);

            if(this.isMobile){
            }
            else{
            }
        }
        
        this.addPANotificationInfo(!(this.widgetTheme==='round'));
    }
    
    this.addPANotificationInfo = function(isSideWidget){
        if(document.getElementsByClassName("pushalert-notification-info").length==0){
            var more_opts_text  = 'Mouseover for more options';
            if(this.isMobile){
                var more_opts_text  = 'Tap for more options';
            }
        var elem = '\
            <h2 style="background:'+this.widgetColor+'">Website Notifications</h2>\
            <div class="pushalert-notification-info-why">\
                <div class="pushalert-notification-info-container">\
                    <div>\
                        <img src="http://resurgence.smvdu.ac.in/images/logo.png?1483946665" height="48" width="48"/>\
                        <p>\
                            '+this.widgetText+'\
                        </p>\
                    </div>\
                    <p id="pa-for-more-options">'+ more_opts_text +'</p>\
                    <p class="pa-notification-info-actions">\
                        <button onclick="PushAlertCo.PA_NOTIFICATION_INFO_TOGGLE();PushAlertCo.PA_UNSUBS_OK()" class="pa-unsubscribe">Unsubscribe</button>\
                        <button onclick="PushAlertCo.PA_NOTIFICATION_INFO_TOGGLE()">Cancel</button>      \
                        <span>Notifications by <a rel="nofollow" href="https://pushalert.co" target="_blank">PushAlert</a></span>\
                    </p>\
                    <p class="pa-notification-info-actions pa-first-time">\
                        <button onclick="PushAlertCo.clearPAFirstTime(false);PushAlertCo.forceSubscribe()">Subscribe</button> \
                        <button onclick="PushAlertCo.clearPAFirstTime(true)" class="pa-unsubscribe">Not Now</button>\
                        <span>Notifications by <a rel="nofollow" href="https://pushalert.co" target="_blank">PushAlert</a></span>\
                    </p>\
                </div>\
            </div>\
        ';
            var paNotificationInfo = document.createElement('div');
            paNotificationInfo.className = 'pushalert-notification-info';
            if(isSideWidget){
                paNotificationInfo.className =  paNotificationInfo.className  + ' pa-side-widget';
            }
            paNotificationInfo.innerHTML = elem;
            paNotificationInfo.style.opacity = "0";
            paNotificationInfo.style.transform = "scale(0) translateZ(0)";
            document.body.appendChild(paNotificationInfo);
            
            if(isSideWidget){
                //var paNotfInfo = document.getElementsByClassName("pushalert-notification-info")[0]
                //paNotfInfo.style.marginTop = -paNotfInfo.clientHeight/2 + 'px';
                paNotificationInfo.style.marginTop = -paNotificationInfo.clientHeight/2 + 'px';
            }
        }
    }
    
    this.paToggleClassName = function(elem, className) {
        if(typeof elem !== 'undefined' && elem!==null){       
            if (elem.className.indexOf(className) > 0) {
                elem.className = elem.className.replace(new RegExp(className, 'g'), "");
            } else {
                elem.className = elem.className + " " + className;
            }
        }
    }

    this.PA_NOTIFICATION_INFO_TOGGLE = function() {
        var paNotificationInfo = document.getElementsByClassName("pushalert-notification-info")[0];
        var paDivContainer = document.getElementById("pushalert-ticker");
        this.paToggleClassName(paNotificationInfo, "pa-opened");
        this.paToggleClassName(paDivContainer, "pa-opened");
    }
    
    this.clearPAFirstTime = function(shouldCancel) {
        var paNotificationInfo = document.getElementsByClassName("pushalert-notification-info")[0];
        var paDivContainer = document.getElementById("pushalert-ticker");
        this.paToggleClassName(paNotificationInfo, "pa-opened");
        this.paToggleClassName(paDivContainer, "pa-opened");
        paNotificationInfo.className = paNotificationInfo.className.replace("pa-first-time", "");
        this.setCookie('pushalert_subs_dialog', '1', 9999);
        if(shouldCancel){
            this.setCookie('pushalert_subs_status', 'canceled', 9999);
        }
    }
    
    this.removeSubscribeWidget = function(){
        var elem = document.getElementById('pushalert-ticker');
        if(elem != undefined && elem!==null){
            elem.remove();
        }
    };
    
    this.startRingingAnimation = function (){
        if (this.ringingAnimation) {
            this.ringCount++;
            if(this.ringCount>2){
                this.ringCount = 0;
            }
            document.getElementById('pushalert-ticker').children[0].style.backgroundPosition = "-"+ 32*this.ringCount +"px 0";//Firefox
            document.getElementById('pushalert-ticker').children[0].style.backgroundPositionX = "-"+ 31*this.ringCount +"px";
            if(this.ringCount==0){
                setTimeout(function(){PushAlertCo.startRingingAnimation()}, this.frameRateMS*2);
            }
            else{
                setTimeout(function(){PushAlertCo.startRingingAnimation()}, this.frameRateMS);
            }
        }
        
    }

    this.appendPushAlert = function (){
        this.appendPACSS();

        appendMobileClass = '';
        if(this.isMobile){
            appendMobileClass = this.mobilePos;
        }

        pa_alert = '<div class="pa-push-notification topCenter ' + appendMobileClass  + '">\
                <img src="http://resurgence.smvdu.ac.in/images/logo.png?1483946665" height="64" width="64" class="pa-logo">\
                <p class="pa-promo-text">Want to get the latest news and stay up-to-date? Then click Allow to get notifications.</p>\
                <p class="pa-actions clearfix">\
                        <button onclick="PushAlertCo.PA_Deny()" class="deny">Deny</button> \
                        <button onclick="PushAlertCo.PA_Allow()" class="allow">Allow</button>\
                </p>\
                <p style="margin-top:5px;"></p><a rel="nofollow" href="https://pushalert.co/" class="powered_by" target="_blank">Powered by PushAlert</a>\
        </div>';

        //var paDivContainer = document.getElementById('pa-push-notification');
        var paDivContainer = document.createElement('div');
        paDivContainer.id = 'pa-push-notification';
        paDivContainer.innerHTML = pa_alert;
        paDivContainer.style.backgroundColor = 'rgba(0,0,0,0)';
        
        document.body.appendChild(paDivContainer);

        var paDiv = document.getElementById('pa-push-notification').getElementsByTagName("div")[0];
        //paDivContainer.style.height = (document.body.clientHeight-paDiv.clientHeight) + 'px';
        var body = document.body,
            html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight, 
                               html.clientHeight, html.scrollHeight, html.offsetHeight );
        paDivContainer.style.height = height + 'px';

        margin_left = (400 + 30)/2;
        paDiv.style.marginLeft = '-'+margin_left+'px';

        margin_top = (paDiv.clientHeight + 34)/2;
        paDiv.style.marginTop = '-'+margin_top+'px';

        if(this.isMobile && this.mobilePos==='mobileCenter'){
            paDiv.style.setProperty('margin-top', '-'+margin_top+'px', 'important');
        }
        else{
            paDiv.style.setProperty('margin-top', '-'+margin_top+'px');
        }
    }

    this.PA_Allow = function (){
        this.seg_id = this.checkSegmentIDValue();
        if(this.seg_id==0){
            window.open(this.subdomain_url);
        }
        else{
            window.open(this.subdomain_url + "?segment="+this.seg_id);
        }

        this.registerMessageListener();
        this.hidePushAlert();
    }

    this.PA_Deny = function(){
        this.setCookie("deny","1",7);
        this.hidePushAlert();
    }

    this.hidePushAlert = function(){
        if(document.getElementById('pa-push-notification')!==null){
            //document.getElementById('pa-push-notification').style.display = 'none';
            document.getElementById('pa-push-notification').remove();
        }
    }

    this.hidePushAlertConfirm = function(){
        //document.getElementById('pa-push-notification-confirm').style.display = 'none';
        var paConfirm = document.getElementById('pa-push-notification-confirm');
        if(typeof paConfirm !== 'undefined' && paConfirm!==null){
           paConfirm.remove();
        }
    }

    this. setCookie = function(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        //d.setTime(d.getTime() + 60*1000);
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires + ";domain=." + this.domain + ";path=/";
        //";domain=.phonebunch.com;path=/";
    }

    this.getCookie = function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
        }
        return "";
    }

    this.checkCookie = function() {
        var username=this.getCookie("username");
        if (username!="") {
            alert("Welcome again " + username);
        }else{
            username = prompt("Please enter your name:", "");
            if (username != "" && username != null) {
                this.setCookie("username", username, 365);
            }
        }
    }
    
    this.getCurrentActualUrl = function(){
        var url = document.location.href;
        var social_url = '';
        var canonical_url = document.head.querySelector('link[rel="canonical"]');
        if(canonical_url!==null){
            url  = canonical_url.getAttribute("href");
        }
        else if(social_url!==''){
            var meta = document.head.querySelector('meta[property="og:url"]');
            if (meta!==null) { 
                url = meta.getAttribute("content"); 
            }
            else{
                meta = document.head.querySelector('meta[name="twitter:url"]');
                if (meta!==null) { 
                    url = meta.getAttribute("content"); 
                }
            }
        }
        
        return url;
    }
    
    this.requestAnalytics = function(){
        var url = this.getCurrentActualUrl();
        var md5 = this.md5(url);
        var check = this.getCookie(md5);
        if(check & check!=""){
            return;
        }
        else{
            this.setCookie(md5, 1, (1/288));
        }
        
        var title = document.title;
        var metas = document.getElementsByTagName("meta");
        var desc = "";
        var keywords = "";
        var image = "";
        var referrer = "";
        if(document.referrer!==""){
            referrer = this.getCookie("pa_last_url");
            if(referrer===""){
                referrer = document.referrer;
            }
        }
        var params = "[]";
        var mcount = 0;
        for (var i=0; i<metas.length; i++) { 
            if (metas[i].getAttribute("name") == "description") { 
                desc = metas[i].getAttribute("content"); 
                mcount++;
            }
            else if (metas[i].getAttribute("name") == "keywords") { 
                keywords = metas[i].getAttribute("content"); 
                mcount++;
            }
            
            else if ((metas[i].getAttribute("property") == "og:image") || (metas[i].getAttribute("name") == "twitter:image") || (metas[i].getAttribute("itemprop") == "image")) { 
                image = metas[i].getAttribute("content"); 
                mcount++;
            }
            
            if(mcount==3){
                break;
            }
        }
        
        if(typeof pushalertConfig!=="undefined"){
            params = JSON.stringify(pushalertConfig);
        }
        
        fetch("https://api.pushalert.co/analytics", {  
            method: 'post',  
            headers: {  
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
            },  
            body: 'pa_id='+PushAlertCo.pa_id
                    +'&pa_subdomain='+encodeURIComponent(PushAlertCo.pa_subdomain)
                    +'&subs_id='+encodeURIComponent(PushAlertCo.subs_id)
                    +'&url='+encodeURIComponent(url)
                    +'&title='+encodeURIComponent(title)
                    +'&desc='+encodeURIComponent(desc)
                    +'&keywords='+encodeURIComponent(keywords)
                    +'&image='+encodeURIComponent(image)
                    +'&referrer='+encodeURIComponent(referrer)
                    +'&domain='+encodeURIComponent(PushAlertCo.domain)
                    +'&domain_id='+encodeURIComponent(PushAlertCo.pa_domain_id)
                    +'&params='+encodeURIComponent(params)
        }).then(function(response) {
            PushAlertCo.setCookie('pa_last_url', url, 999);
        }).catch(function(err) {
            // Error :(
        });
        
    }
    
    this.PAGenerateContentRec = function(data){
        if(!data.result){
            return;
        }

        if(data.image==="" || data.image===null){
            data.image ="http://resurgence.smvdu.ac.in/images/logo.png";
        }
        
        if(data.title.length>80){
            data.title = data.title.substr(0, data.title.lastIndexOf(" ",80)) + '...';
        }

        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = '.pushalert-content-recommended{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;position:fixed;right:0;background:#fafafa;width:390px;overflow:hidden;height:110px;border:1px solid #ccc;transition:bottom .5s cubic-bezier(.87,0,.19,1.21);bottom:-112px;z-index:9999999999}.pushalert-content-recommended.pa-rec-opened{bottom:0}.pushalert-content-recommended-img{position:absolute;width:155px;height:110px}.pushalert-content-recommended-img img{height:100%;width:100%;background-size:cover;background-position:center center}.pushalert-content-recommended-text{margin-left:155px;padding:8px 12px}.pushalert-rec-heading{font-size:11px;color:#777}.pushalert-rec-title{display:flex;height:52px;align-items:center;line-height:1.25;font-size:14px;margin-top:5px;margin-bottom:5px;overflow:hidden}.pushalert-rec-title a{font-size:14px;color:#333;text-decoration:none;line-height:1.25}.pushalert-rec-website{font-size:11px;color:#888;position:absolute;bottom:8px;line-height:1}.pushalert-rec-branding{position:absolute;right:10px;bottom:7px;line-height:1}.pushalert-rec-branding a{color:#999;text-decoration:none;font-size:10px;line-height:1;background-position:left center;background-size:contain;padding-left:15px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAA5FBMVEUzerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerczerfPWb4IAAAAS3RSTlMAAQIDBQYHCwwOFB4fISIkJSYtLzE2OTxGSlBRVVpcYWdscHJzdHh8fZGTlJebp6utsrO2v8HDyszNz9PV19rc4eLr7PH09/j5/P6BP9L0AAAAuklEQVR4AaXK107DQBhE4UMMhF4WMBBCLxB6h9AJ3fP+78NuZK3+FZZA4rucM/zB4MpynQpZ+/zyoodEfuIHp4EhjUF2Nk1pptMAZnV4JAcsdhxd9adm2G/kXeXA0kMfwdZxuH2p63MBOF0luM9h4l2lt2GYu8Xrb9XgQNGun/YySs+KHrEKRR9YMv4XemXUTJiUMWLCtowNovFXGS+jMdwp0Y5h/zrRItFoevP8tFNIxSYVptbXHL/7Bh7TPKaTlMktAAAAAElFTkSuQmCC);background-repeat:no-repeat}#pushalert-rec-action-hide,#pushalert-rec-action-show{right:4px;font-size:10px;line-height:normal;width:14px;height:14px;background-image:url(https://cdn.pushalert.co/img/content-rec-arrows.svg);background-repeat:no-repeat;background-size:cover;overflow:hidden;text-indent:-99px;transition:opacity .3s ease-in;cursor:pointer}.pushalert-rec-branding a:hover{color:#337ab7}#pushalert-rec-action-hide{position:absolute;top:3px;background-position:-14px 0;opacity:0}.isMobile #pushalert-rec-action-hide,.pushalert-content-recommended:hover #pushalert-rec-action-hide{opacity:.3}#pushalert-rec-action-show{position:fixed;bottom:3px;background-position:0 0;opacity:0;transition-delay:0s}#pushalert-rec-action-show.pa-show-me{opacity:.3;transition-delay:.5s}@media only screen and (max-width:480px){.pushalert-content-recommended{left:0;right:0;width:100%}.pushalert-content-recommended-img{width:120px}.pushalert-content-recommended-text{margin-left:120px}}.pushalert-content-recommended.pa-rec-dark{background:#252525}.pa-rec-dark .pushalert-rec-title a{color:#fafafa}.pa-rec-dark #pushalert-rec-action-hide,.pa-rec-dark#pushalert-rec-action-show{background-image:url(https://cdn.pushalert.co/img/content-rec-arrows-dark.svg)}.pa-rec-dark .pushalert-content-recommended-img img{background-color:#eee}.pa-rec-dark .pushalert-rec-heading{color:#aaa;}';
        document.head.appendChild(css);

        var contentRecDiv = document.createElement("div");
        contentRecDiv.id = "pushalert-content-recommended";
        if(this.isMobile){
            contentRecDiv.className = "pushalert-content-recommended isMobile";
        }
        else{
            contentRecDiv.className = "pushalert-content-recommended";
        }
        contentRecDiv.className = contentRecDiv.className + " " +this.PARecTheme;

        contentRecDiv.innerHTML = '<div class="pushalert-content-recommended-img">\
                <a href="'+data.url+'">\
                    <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="'+data.title+'" title="'+data.title+'" style="background-image:url(\''+data.image+'\');" />\
                </a>\
            </div>\
\
            <div class="pushalert-content-recommended-text">\
                <div class="pushalert-rec-heading">Recommended for you</div>\
                <div class="pushalert-rec-title">\
                    <a href="'+data.url+'" title="'+data.title+'">\
                        '+data.title+'\
                    </a>\
                </div>\
                <div class="pushalert-rec-website">'+data.domain+'</div>\
                <div class="pushalert-rec-branding">\
                    <a href="https://pushalert.co" target="_blank">\
                        PushAlert\
                    </a>\
                </div>\
                <div id="pushalert-rec-action-hide">\
                    hide\
                </div>\
            </div>';
        document.body.appendChild(contentRecDiv);

        var contentShowDiv = document.createElement("div");
        contentShowDiv.id = 'pushalert-rec-action-show';
        contentShowDiv.innerHTML = 'show';
        contentShowDiv.class = this.PARecTheme;
        document.body.appendChild(contentShowDiv);
        contentShowDiv.addEventListener("click", function(){
           var paContentRec = document.getElementById("pushalert-content-recommended");
           paContentRec.className = paContentRec.className +" pa-rec-opened";

            this.className = "";

            PushAlertCo.PARecContentHide = false;
        });


        window.addEventListener("scroll", function(){
            if(PushAlertCo.PARecContentHide){
                return;
            }
            var paContentRec = document.getElementById("pushalert-content-recommended");
            var top = (document.documentElement && document.documentElement.scrollTop) || 
          document.body.scrollTop;
            var showPosition = PushAlertCo.PAContentRecScrollPosition*(document.body.scrollHeight-window.innerHeight);
            if(typeof paContentRec !== 'undefined' && paContentRec!==null){
                if((top) >= showPosition && paContentRec.className.indexOf("pa-rec-opened")===-1){
                    paContentRec.className = paContentRec.className + " pa-rec-opened";
                }
                else if((top) < showPosition && paContentRec.className.indexOf("pa-rec-opened")>-1){
                    paContentRec.className = paContentRec.className.replace(/ pa-rec-opened/g, "");
                }
            }
        });

        document.getElementById("pushalert-rec-action-hide").addEventListener("click", function(){
           var paContentRec = document.getElementById("pushalert-content-recommended");
           paContentRec.className = paContentRec.className.replace(/ pa-rec-opened/g, "");

           document.getElementById("pushalert-rec-action-show").className = "pa-show-me " + PushAlertCo.PARecTheme;

           PushAlertCo.PARecContentHide = true;
        });
    }

    this.PARequestContentRec = function(){
        var script = document.createElement('script');
        script.src = 'https://api.pushalert.co/recommend-content.json?callback=PushAlertCo.PAGenerateContentRec&site_id='+this.pa_id+'&domain_id='+PushAlertCo.pa_domain_id+'&url='+encodeURIComponent(this.getCurrentActualUrl());
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    this.PushAlertAddLoadEvent = function(func){
        /*var pa_oldonload = window.onload;

        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                pa_oldonload();
                func();
            }
        }*/
        
        window.addEventListener("load", function(){
            func();
        });
    }

    this.PA_AddEvent = function(element, eventName, fn) {
        if (element.addEventListener)
            element.addEventListener(eventName, fn, false);
        else if (element.attachEvent)
            element.attachEvent('on' + eventName, fn);
    }

    this.checkSubscription = function() {
        checkBrowser = this.PAcheckBrowser();
        if ('serviceWorker' in navigator && checkBrowser) {
            var isSubscribed = this.getCookie("pushalert_subs_status");
            this.subs_id = this.getCookie("pushalert_subs_id");
            if(isSubscribed=="subscribed" && this.subs_id!=""){
                var result = [];
                result.success = true;
                result.subscriber_id = this.getCookie('pushalert_subs_id');
                result.alreadySubscribed = true;
                PushAlertCo.callbackOnSuccess(result);
                PushAlertCo.requestAnalytics();
                if(PushAlertCo.enableUnsubs){
                    PushAlertCo.showSubscribeWidget();
                    PushAlertCo.PAAddUnsubscribeClass();
                }
            }
            else if(isSubscribed=="denied"){
                var result = [];
                result.status = -1;
                PushAlertCo.callbackOnFailure(result);
                PushAlertCo.showSubscribeWidget();
            }
            else if(isSubscribed=="unsubscribed"){
                var result = [];
                result.status = 1;
                PushAlertCo.callbackOnFailure(result);
                PushAlertCo.showSubscribeWidget();
            }
            else if(isSubscribed=="canceled"){
                var result = [];
                result.status = 0;
                PushAlertCo.callbackOnFailure(result);
                PushAlertCo.showSubscribeWidget();
            }
            else{
                if(checkBrowser=='chrome'){
                    this.checkIncognito(false);
                }
                else{
                    if(this.method==1){
                        this.appendPushAlert();
                    }
                    else if(this.method==2){
                        if(this.enableAutoSubs || this.getCookie("pushalert_subs_dialog")!==""){
                            PushAlertCo.showSubscribeWidget();
                            this.appendFrame();
                        }
                        else{
                            //Show dialog with pa-first-time
                            this.PAShowFirstTime();
                        }
                    }
                }			
            }
        }
    }
    
    this.PAShowFirstTime = function(){
        this.showSubscribeWidget();
        var paNotificationInfo = document.getElementsByClassName("pushalert-notification-info")[0];
        var paDivContainer = document.getElementById("pushalert-ticker");
        this.paToggleClassName(paNotificationInfo, "pa-first-time pa-opened");
        this.paToggleClassName(paDivContainer, "pa-opened");
    }
    
    this.PAAddUnsubscribeClass = function(){
         var paDivContainer = document.getElementById("pushalert-ticker");
         if(typeof paDivContainer !== 'undefined' && paDivContainer!==null){
             paDivContainer.className = paDivContainer.className + ' pa-unsubscribe'; 
         }
    }
    
    this.PARemoveUnsubscribeClass = function(){
         var paDivContainer = document.getElementById("pushalert-ticker");
         if(typeof paDivContainer !== 'undefined' && paDivContainer!==null){
             paDivContainer.className = paDivContainer.className.replace(/pa-unsubscribe/g, ''); 
         }
    }

    this.PAcheckBrowser = function(){
        var userAgent = navigator.userAgent.toLocaleLowerCase();

        if(userAgent.indexOf('mobile')<0){
            this.isMobile = false;
        }
        else{
            this.isMobile = true;
        }

        if(userAgent.indexOf('chrome')>=0 && userAgent.indexOf('opr')<0){
            var version = userAgent.match(/chrom(e|ium)\/([0-9]+)\./);
            version = version ? parseInt(version[2], 10) : false;
            if(version && version>=42){
                return "chrome";
            }
            else{
                return false;
            }
        }
        else if(userAgent.indexOf('firefox')>=0){
            var version = userAgent.match(/firefox\/([0-9]+)\./);
            version = version ? parseInt(version[1], 10) : false;
            if(version && version>=44 && !this.isMobile){
                return "firefox";
            }
            else if(version && version>=48 && this.isMobile){
                return "firefox";
            }
            else{
                return false;
            }
        }
        else if(userAgent.indexOf('opr')>=0){
            var version = userAgent.match(/opr\/([0-9]+)\./);
            version = version ? parseInt(version[1], 10) : false;
            if(version && version>=42 && !this.isMobile){
                return "opera";
            }
            else if(version && version>=37 && this.isMobile){
                return "opera";
            }
            else{
                return false;
            }
        }
        return false;
    }

    this.init = function(){
        var hostname = location.hostname.replace(/^www./,'');

        if(hostname.indexOf(this.domain)==(hostname.length - this.domain.length)){
            //if(this.getCookie("pushalert_subs_status")!=="denied"){
                this.PushAlertAddLoadEvent(function(){
                    PushAlertCo.checkSubscription();
                });
                /*PA_AddEvent(window, 'load', function(){
                    checkSubscription();
                });*/
            /*}
            else{
                var result = [];
                result.status = -1;
                PushAlertCo.callbackOnFailure(result);
            }*/
        }
        
        if(this.enableWidget!==1){
            this.enableAutoSubs = true;
        }
    }

    this.checkIncognito = function(isForced) {
        var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
        if (!fs) {
            if(this.method==1){
                this.appendPushAlert();
            }
            else if(this.method==2){
                if((this.enableAutoSubs || this.getCookie("pushalert_subs_dialog")!=="") || isForced){
                    PushAlertCo.showSubscribeWidget();
                    this.appendFrame();
                }
                else{
                    //Show dialog with pa-first-time
                    this.PAShowFirstTime();
                }
            }
            return;
        }
        fs(window.TEMPORARY, 100, function(fs) {
            if(PushAlertCo.method==1){
                PushAlertCo.appendPushAlert();
            }
            else if(PushAlertCo.method==2){
                if((PushAlertCo.enableAutoSubs || PushAlertCo.getCookie("pushalert_subs_dialog")!=="") || isForced){
                    PushAlertCo.showSubscribeWidget();
                    PushAlertCo.appendFrame();
                }
                else{
                    //Show dialog with pa-first-time
                    PushAlertCo.PAShowFirstTime();
                }
            }
        }, function(err) {
            //incognito mode";
            //console.log("incognito mode");
        });
    }

    this.listener = function(event){
        //console.log("event.origin: " + event.origin);
        if ( event.origin !== "https://" + PushAlertCo.subdomain && event.origin !== "https://www." + PushAlertCo.subdomain )
                return;

        if(event.data=="closed"){
            //console.log("Popup closed");
            //Success Callback
            var pa_status = PushAlertCo.getCookie('pushalert_subs_status');
            if(pa_status=='subscribed'){
                var result = [];
                result.success = true;
                result.subscriber_id = PushAlertCo.getCookie('pushalert_subs_id');
                var alreadySubscribed = PushAlertCo.getCookie('pushalert_already_subscribed');
                if(alreadySubscribed==="true"){
                    result.alreadySubscribed = true;
                }
                else{
                    result.alreadySubscribed = false;
                }
                PushAlertCo.callbackOnSuccess(result);
                
                if(PushAlertCo.seg_id!=0){
                    PushAlertCo.addSegmentID(PushAlertCo.seg_id);
                }
                if(!PushAlertCo.enableUnsubs){
                    PushAlertCo.removeSubscribeWidget();
                }
                else{
                    PushAlertCo.PAAddUnsubscribeClass();
                }
                PushAlertCo.setCookie('pa_last_url', PushAlertCo.getCurrentActualUrl(), 999);
            }
            else if(pa_status=='denied'){
                //Failure Callback
                var result = [];
                result.status = -1;
                PushAlertCo.callbackOnFailure(result);
            }
            else if(pa_status=='unsubscribed'){
                //Failure Callback
                var result = [];
                result.status = 1;
                PushAlertCo.callbackOnFailure(result);
                PushAlertCo.PARemoveUnsubscribeClass();
            }
            else{
                //Failure Callback
                var result = [];
                result.status = 0;
                PushAlertCo.callbackOnFailure(result);
            }
        }
        else{
            var data_sent = event.data.split("|");
            if(data_sent[0]=='pushalert_frame'){
                //Possible permissions - granted, denied, default
                if(data_sent[1]=='granted'){
                    PushAlertCo.confirmPushAlert();
                    if(!PushAlertCo.enableUnsubs){
                        PushAlertCo.removeSubscribeWidget();
                    }
                }
                else if(data_sent[1]=='denied'){
                    //Failure Callback
                    var result = [];
                    result.status = -1;
                    PushAlertCo.callbackOnFailure(result);
                    PushAlertCo.setCookie('pushalert_subs_status', 'denied', 9999);
                }
                else if(data_sent[1]=='default'){//Canceled
                    //Failure Callback
                    var result = [];
                    result.status = 0;
                    PushAlertCo.callbackOnFailure(result);
                    PushAlertCo.setCookie('pushalert_subs_status', 'canceled', 9999);
                }
                /*else if(data_sent[1]=='unsubscribed'){//Unsubscribed
                    //Failure Callback
                    var result = [];
                    result.status = 1;
                    PushAlertCo.callbackOnFailure(result);
                }*/
            }
            else if(data_sent[0]=='log'){
                //console.log("Popup: " + data_sent[1]);
            }
            else{
                PushAlertCo.setCookie(data_sent[0],data_sent[1],9999);
            }
        }

        /*if(event.data=="subscribed"){
                PushAlertCo.setCookie("pushalert_subs_status","subscribed",9999);
        }
        else if(event.data=="unsubscribed"){
                PushAlertCo.setCookie("pushalert_subs_status","unsubscribed",9999);
        }
        else if(event.data=="denied"){
                PushAlertCo.setCookie("pushalert_subs_status","denied",9999);
        }*/
    }

    this.checkSegmentID = function(seg_id){
        /*if(this.getCookie('pushalert_segments').indexOf(',' + seg_id + ',')!=-1){
            return true;
        }
        else{
            return false;
        }*/
        return false;
    }

    this.addSegmentID = function(seg_id){
        /*if(!this.checkSegmentID(seg_id)){
            if(this.getCookie('pushalert_segments')==''){
                this.setCookie('pushalert_segments', ',' + seg_id + ',', 999);
            }
            else{
                this.setCookie('pushalert_segments', this.getCookie('pushalert_segments') + seg_id + ',', 999);
            }
        }*/
    }

    this.removeSegmentID = function(seg_id){
        //this.setCookie('pushalert_segments', this.getCookie('pushalert_segments').replace(seg_id + ',', ''), 999);
    }
    
    this.initArrayPush = function(){
        pushalertbyiw.push = function(data){
            if(typeof data !== 'undefined' && data!==null){
                if(data[0]=="addToSegment"){
                    if(typeof data[1]!=='undefined' && data[1]!==null
                            && typeof data[2]!=='undefined' && data[2]!==null){
                        PushAlertCo.addToSegment(data[1], data[2]);
                    }
                    else if(typeof data[1]!=='undefined' && data[1]!==null){
                        PushAlertCo.addToSegment(data[1], null);
                    }
                }
                else if(data[0]=="removeFromSegment"){
                    if(typeof data[1]!=='undefined' && data[1]!==null
                            && typeof data[2]!=='undefined' && data[2]!==null){
                        PushAlertCo.removeFromSegment(data[1], data[2]);
                    }
                    else if(typeof data[1]!=='undefined' && data[1]!==null){
                        PushAlertCo.removeFromSegment(data[1], null);
                    }
                }
            }
        };
    }
    
    this.checkSegmentFunction = function(){
        for(var i=0; i<pushalertbyiw.length;i++){
            if(pushalertbyiw[i][0]=="addToSegment"){
                if(typeof pushalertbyiw[i][1]!=='undefined' && pushalertbyiw[i][1]!==null
                        && typeof pushalertbyiw[i][2]!=='undefined' && pushalertbyiw[i][2]!==null){
                    this.addToSegment(pushalertbyiw[i][1], pushalertbyiw[i][2]);
                }
                else if(typeof pushalertbyiw[i][1]!=='undefined' && pushalertbyiw[i][1]!==null){
                    this.addToSegment(pushalertbyiw[i][1], null);
                }
            }
            else if(pushalertbyiw[i][0]=="removeFromSegment"){
                if(typeof pushalertbyiw[i][1]!=='undefined' && pushalertbyiw[i][1]!==null
                        && typeof pushalertbyiw[i][2]!=='undefined' && pushalertbyiw[i][2]!==null){
                    this.removeFromSegment(pushalertbyiw[i][1], pushalertbyiw[i][2]);
                }
                else if(typeof pushalertbyiw[i][1]!=='undefined' && pushalertbyiw[i][1]!==null){
                    this.removeFromSegment(pushalertbyiw[i][1], null);
                }
            }
        }
    }

    this.addToSegment = function(seg_id, callback){
        var isSubscribed = this.getCookie("pushalert_subs_status");
        if(isSubscribed=="subscribed"){
            if(!this.checkSegmentID(seg_id)){
                fetch("https://api.pushalert.co/js-api/addToSegment", {  
                        method: 'post',  
                        headers: {  
                          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
                        },  
                        body: 'seg_id='+seg_id+'&pa_id='+PushAlertCo.pa_id+'&domain_id='+PushAlertCo.pa_domain_id+'&subs_id='+encodeURIComponent(PushAlertCo.getCookie('pushalert_subs_id'))
                    })
                    .then(function(res) {
                        res.json().then(function(data) {
                            if(data.success){
                                PushAlertCo.addSegmentID(seg_id);
                            }
                            if(callback!=null){
                                callback(data);
                            }
                    }).catch(function(e) {
                            //console.log( e.toString());
                    }); 
                });
            }
            else{
                if(callback!=null){
                    //console.log("User already subscribed");
                    data = [];
                    data.success=true;
                    callback(data);
                }
            }
        }
        else{
            if(callback!=null){
                data = [];
                data.success=false;
                data.msg = 'User not subscribed';
                callback(data);
            }
        }
    }

    this.removeFromSegment = function(seg_id, callback){
        var isSubscribed = this.getCookie("pushalert_subs_status");
        if(isSubscribed=="subscribed"){
            if(this.checkSegmentID(seg_id) || true){
                fetch("https://api.pushalert.co/js-api/removeFromSegment", {  
                        method: 'post',  
                        headers: {  
                          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
                        },  
                        body: 'seg_id='+seg_id+'&pa_id='+PushAlertCo.pa_id+'&domain_id='+PushAlertCo.pa_domain_id+'&subs_id='+encodeURIComponent(PushAlertCo.getCookie('pushalert_subs_id'))
                    })
                    .then(function(res) {
                        res.json().then(function(data) {
                            if(data.success){
                                PushAlertCo.removeSegmentID(seg_id);
                            }
                            if(callback!=null){
                                callback(data);
                            }
                    }).catch(function(e) {
                            //console.log(e.toString());
                    }); 
                });
            }
            else{
                if(callback!=null){
                    //console.log("User already un-subscribed");
                    data = [];
                    data.success=true;
                    callback(data);
                }
            }
        }
        else{
            if(callback!=null){
                data = [];
                data.success=false;
                data.msg = 'User not subscribed';
                callback(data);
            }
        }
    }

    this.subInit = function(){
        (pushalertbyiw = window.pushalertbyiw || []).push(); //Just in case not defined;
        if(!this.isIframe()){
            if(!this.checkDisableAutoInit()){
                this.init();
            }
        
            this.checkSegmentFunction();
            this.initArrayPush();
            
            if(this.enableContentRecommendation){
                var currUrl = this.getCurrentActualUrl();
                var toShowContentRec = true;
                
                if(!this.PARecShowOnHomepage){
                    toShowContentRec = !(new RegExp("^(http|https)?://(www.)?"+this.domain+"[/]?$", "ig")).test(currUrl);
                }
                if(toShowContentRec && this.PARecHideOn.length>0){
                    var tempTxt = "(" + this.PARecHideOn.join(")|(") + ")";
                    tempTxt = tempTxt.replace("*", ".*")
                    var regexHideOn = new RegExp(tempTxt, "gi");
                    toShowContentRec = !regexHideOn.test(currUrl);
                }
                
                if(toShowContentRec){
                    this.PushAlertAddLoadEvent(function(){
                       PushAlertCo.PARequestContentRec(); 
                    });
                }
            }
        }
    }
    
    this.isIframe = function(){
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    this.checkDisableAutoInit = function(){
        (pushalertbyiw = window.pushalertbyiw || []).push(); //Just in case not defined;
        for(var i=0; i<pushalertbyiw.length;i++){
            if(pushalertbyiw[i][0]=="disableAutoInit"){
                return pushalertbyiw[i][1];
            }
        }
    }

    this.checkSegmentIDValue = function(){
        (pushalertbyiw = window.pushalertbyiw || []).push(); //Just in case not defined;
        for(var i=0; i<pushalertbyiw.length;i++){
            if(pushalertbyiw[i][0]=="subscribeToSegment"){
                return pushalertbyiw[i][1];
            }
        }
        return 0;
    }

    this.callbackOnSuccess = function(result){
        (pushalertbyiw = window.pushalertbyiw || []).push(); //Just in case not defined;
        for(var i=0; i<pushalertbyiw.length;i++){
            if(pushalertbyiw[i][0]=="onSuccess"){
                pushalertbyiw[i][1](result);
            }
        }
    }

    this.callbackOnFailure = function(result){
        (pushalertbyiw = window.pushalertbyiw || []).push(); //Just in case not defined;
        for(var i=0; i<pushalertbyiw.length;i++){
            if(pushalertbyiw[i][0]=="onFailure"){
                pushalertbyiw[i][1](result);
            }
        }
    }

    this.forceSubscribe = function(){ //this should only be called when 
        if(this.getCookie('pushalert_subs_status')=='denied'){
            //this.PA_Allow();
            this.confirmUnblock();
        }
        else if(this.getCookie('pushalert_subs_status')=='unsubscribed'){
            this.registerMessageListener();
            this.confirmPushAlert();
        }
        else if(this.getCookie('pushalert_subs_status')=='canceled' || this.getCookie('pushalert_subs_status')===''){
            checkBrowser = this.PAcheckBrowser();
            if(checkBrowser=='chrome' || checkBrowser=='opera'){
                this.checkIncognito(true);
            }
            else{
                if(this.method==1){
                    this.appendPushAlert();
                }
                else if(this.method==2){
                    this.appendFrame();
                }
            }
        }
    }
    
    this.registerMessageListener = function(){
        if (this.isListening){
            return;
        } else {
            this.isListening = true;
        }
        
        if (window.addEventListener) {
            addEventListener("message", this.listener, false)
        } else {
            attachEvent("onmessage", this.listener)
        }
    }
    
    !function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t),e=(n>>16)+(t>>16)+(r>>16);return e<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;var e,i,a,h,d,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,h=v,d=m,l=o(l,g,v,m,n[e],7,-680876936),m=o(m,l,g,v,n[e+1],12,-389564586),v=o(v,m,l,g,n[e+2],17,606105819),g=o(g,v,m,l,n[e+3],22,-1044525330),l=o(l,g,v,m,n[e+4],7,-176418897),m=o(m,l,g,v,n[e+5],12,1200080426),v=o(v,m,l,g,n[e+6],17,-1473231341),g=o(g,v,m,l,n[e+7],22,-45705983),l=o(l,g,v,m,n[e+8],7,1770035416),m=o(m,l,g,v,n[e+9],12,-1958414417),v=o(v,m,l,g,n[e+10],17,-42063),g=o(g,v,m,l,n[e+11],22,-1990404162),l=o(l,g,v,m,n[e+12],7,1804603682),m=o(m,l,g,v,n[e+13],12,-40341101),v=o(v,m,l,g,n[e+14],17,-1502002290),g=o(g,v,m,l,n[e+15],22,1236535329),l=u(l,g,v,m,n[e+1],5,-165796510),m=u(m,l,g,v,n[e+6],9,-1069501632),v=u(v,m,l,g,n[e+11],14,643717713),g=u(g,v,m,l,n[e],20,-373897302),l=u(l,g,v,m,n[e+5],5,-701558691),m=u(m,l,g,v,n[e+10],9,38016083),v=u(v,m,l,g,n[e+15],14,-660478335),g=u(g,v,m,l,n[e+4],20,-405537848),l=u(l,g,v,m,n[e+9],5,568446438),m=u(m,l,g,v,n[e+14],9,-1019803690),v=u(v,m,l,g,n[e+3],14,-187363961),g=u(g,v,m,l,n[e+8],20,1163531501),l=u(l,g,v,m,n[e+13],5,-1444681467),m=u(m,l,g,v,n[e+2],9,-51403784),v=u(v,m,l,g,n[e+7],14,1735328473),g=u(g,v,m,l,n[e+12],20,-1926607734),l=c(l,g,v,m,n[e+5],4,-378558),m=c(m,l,g,v,n[e+8],11,-2022574463),v=c(v,m,l,g,n[e+11],16,1839030562),g=c(g,v,m,l,n[e+14],23,-35309556),l=c(l,g,v,m,n[e+1],4,-1530992060),m=c(m,l,g,v,n[e+4],11,1272893353),v=c(v,m,l,g,n[e+7],16,-155497632),g=c(g,v,m,l,n[e+10],23,-1094730640),l=c(l,g,v,m,n[e+13],4,681279174),m=c(m,l,g,v,n[e],11,-358537222),v=c(v,m,l,g,n[e+3],16,-722521979),g=c(g,v,m,l,n[e+6],23,76029189),l=c(l,g,v,m,n[e+9],4,-640364487),m=c(m,l,g,v,n[e+12],11,-421815835),v=c(v,m,l,g,n[e+15],16,530742520),g=c(g,v,m,l,n[e+2],23,-995338651),l=f(l,g,v,m,n[e],6,-198630844),m=f(m,l,g,v,n[e+7],10,1126891415),v=f(v,m,l,g,n[e+14],15,-1416354905),g=f(g,v,m,l,n[e+5],21,-57434055),l=f(l,g,v,m,n[e+12],6,1700485571),m=f(m,l,g,v,n[e+3],10,-1894986606),v=f(v,m,l,g,n[e+10],15,-1051523),g=f(g,v,m,l,n[e+1],21,-2054922799),l=f(l,g,v,m,n[e+8],6,1873313359),m=f(m,l,g,v,n[e+15],10,-30611744),v=f(v,m,l,g,n[e+6],15,-1560198380),g=f(g,v,m,l,n[e+13],21,1309151649),l=f(l,g,v,m,n[e+4],6,-145523070),m=f(m,l,g,v,n[e+11],10,-1120210379),v=f(v,m,l,g,n[e+2],15,718787259),g=f(g,v,m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,h),m=t(m,d);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function h(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function d(n){return a(i(h(n),8*n.length))}function l(n,t){var r,e,o=h(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(h(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="0123456789abcdef",o="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),o+=e.charAt(t>>>4&15)+e.charAt(15&t);return o}function v(n){return unescape(encodeURIComponent(n))}function m(n){return d(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}"function"==typeof define&&define.amd?define(function(){return A}):"object"==typeof module&&module.exports?module.exports=A:n.md5=A}(this);
}
PushAlertCo.subInit();