
// lightbox
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    "alwaysShowNavOnTouchDevices" : true,
})

// swiper slider and whats app message
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
      delay: 2000,
    },
  });

  
  function sendWhatsAppMessage(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const text = `নাম: ${name}\nফোন: ${phone}\nবার্তা: ${message}`;
    const url = `https://wa.me/8801715309950?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    return false;
  }


  var chatbox = document.getElementById('fb-customer-chat');
  chatbox.setAttribute("page_id", "YOUR_PAGE_ID");
  chatbox.setAttribute("attribution", "biz_inbox");
  window.fbAsyncInit = function() {
    FB.init({ xfbml: true, version: 'v17.0' });
  };
  (function(d, s, id) {
    if (d.getElementById(id)) return;
    var js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    d.getElementsByTagName('head')[0].appendChild(js);
  }(document, 'script', 'facebook-jssdk'));