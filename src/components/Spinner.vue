<template>
    <div class="spinner-circle">
        <div class="spinner-circle__item1 spinner-circle__item"></div>
        <div class="spinner-circle__item2 spinner-circle__item"></div>
        <div class="spinner-circle__item3 spinner-circle__item"></div>
        <div class="spinner-circle__item4 spinner-circle__item"></div>
        <div class="spinner-circle__item5 spinner-circle__item"></div>
        <div class="spinner-circle__item6 spinner-circle__item"></div>
        <div class="spinner-circle__item7 spinner-circle__item"></div>
        <div class="spinner-circle__item8 spinner-circle__item"></div>
        <div class="spinner-circle__item9 spinner-circle__item"></div>
        <div class="spinner-circle__item10 spinner-circle__item"></div>
        <div class="spinner-circle__item11 spinner-circle__item"></div>
        <div class="spinner-circle__item12 spinner-circle__item"></div>
    </div>
</template>

<style>
    .spinner-circle {
        margin: 100px auto;
        width: 40px;
        height: 40px;
        position: relative;
    }
    .spinner-circle__item {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .spinner-circle__item:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: #333;
        border-radius: 100%;
        animation: spinner-circle__item--fade-delay 1.2s infinite ease-in-out both;
    }        
    .spinner-circle__item:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: #333;
        border-radius: 100%;
        animation: spinner-circle__item--fade-delay 1.2s infinite ease-in-out both;
    }
    .spinner-circle__item2 {
        transform: rotate(30deg);
    }
    .spinner-circle__item3 {
        transform: rotate(60deg);
    }
    .spinner-circle__item4 {
        transform: rotate(90deg);
    }
    .spinner-circle__item5 {
        transform: rotate(120deg);
    }
    .spinner-circle__item6 {
        transform: rotate(150deg);
    }
    .spinner-circle__item7 {
        transform: rotate(180deg);
    }
    .spinner-circle__item8 {
        transform: rotate(210deg);
    }
    .spinner-circle__item9 {
        transform: rotate(240deg);
    }
    .spinner-circle__item10 {
        transform: rotate(270deg);
    }
    .spinner-circle__item11 {
        transform: rotate(300deg); 
    }
    .spinner-circle__item12 {
        transform: rotate(330deg); 
    }
    .spinner-circle__item2:before {
        animation-delay: -1.1s; 
    }
    .spinner-circle__item3:before {
        animation-delay: -1s; 
    }
    .spinner-circle__item4:before {
        animation-delay: -0.9s; 
    }
    .spinner-circle__item5:before {
        animation-delay: -0.8s; 
    }
    .spinner-circle__item6:before {
        animation-delay: -0.7s; 
    }
    .spinner-circle__item7:before {
        animation-delay: -0.6s; 
    }
    .spinner-circle__item8:before {
        animation-delay: -0.5s; 
    }
    .spinner-circle__item9:before {
        animation-delay: -0.4s;
    }
    .spinner-circle__item10:before {
        animation-delay: -0.3s;
    }
    .spinner-circle__item11:before {
        animation-delay: -0.2s;
    }
    .spinner-circle__item12:before {
        animation-delay: -0.1s;
    }
    @-webkit-keyframes spinner-circle__item--fade-delay {
        0%, 39%, 100% { opacity: 0; }
        40% { opacity: 1; }
    }
    @keyframes spinner-circle__item--fade-delay {
        0%, 39%, 100% { opacity: 0; }
        40% { opacity: 1; } 
    }
</style>

