let url = encodeURIComponent('https://lizard-soft.com/stories/lera/');
let title = encodeURIComponent(document.title);
title = title.replace(/\'/g, '%27');

let facebook = document.getElementById('social-facebook');
let attributeValueFacebook = "window.open(\'https://www.facebook.com/sharer/sharer.php?u=" + url + "\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false";
facebook.setAttribute('onclick', attributeValueFacebook);

let linkedin = document.getElementById('social-linkedin');
let attributeValueLinkedin = "window.open(\'https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title + "\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=600, height=400, toolbar=0, status=0\');return false";
linkedin.setAttribute('onclick', attributeValueLinkedin);