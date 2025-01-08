<template>
    <div>
        <div class="cover">
        </div>
        <div class="logo">
            <img src="https://kiramei.cn/kiramei-former-site/pic.png" alt="logo">
        </div>
    </div>
</template>

<style>
.cover{
    position: fixed;
    background-color: #fff;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
}
.logo{
    margin-top: -50px;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 101;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    animation:blink 1.5s ease-in-out infinite alternate
}
.logo img{
    width: 100px;
}
@keyframes blink {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

</style>
