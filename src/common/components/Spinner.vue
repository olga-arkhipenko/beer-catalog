<template>
    <div class="spinner">
        <div class="spinner__cube-1"></div>
        <div class="spinner__cube-2"></div>
    </div>
</template>

<style>
.spinner {
    position: relative;

    width: 40px;
    height: 40px;
    margin: 100px auto;
}

.spinner__cube-1,
.spinner__cube-2 {
    position: absolute;
    top: 0;
    left: 0;

    width: 15px;
    height: 15px;

    -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
            animation: sk-cubemove 1.8s infinite ease-in-out;

    background-color: #d0e7ff;
}

.spinner__cube-2 {
    -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
}

@-webkit-keyframes sk-cubemove {
    25% {
        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
    }
    50% {
        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
    }
    75% {
        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    }
    100% {
        -webkit-transform: rotate(-360deg);
    }
}

@keyframes sk-cubemove {
    25% {
        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
                transform: translateX(42px) rotate(-90deg) scale(0.5);
    } 50% {
        -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
                transform: translateX(42px) translateY(42px) rotate(-179deg);
    } 50.1% {
        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
                transform: translateX(42px) translateY(42px) rotate(-180deg);
    } 75% {
        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
                transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    } 100% {
        -webkit-transform: rotate(-360deg);
                transform: rotate(-360deg);
    }
}

</style>

