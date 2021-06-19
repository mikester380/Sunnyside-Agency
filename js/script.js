'use strict';

const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const arrow = document.querySelector('.arrow-down');

const toggleNavigation = function(){
    navigation.classList.toggle('hidden');
    arrow.classList.toggle('hidden')
}

hamburger.addEventListener('click', toggleNavigation);