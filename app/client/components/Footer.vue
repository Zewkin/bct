<template>
<footer :class="$style.footer">
    <span>OUR CURRENT AND PAST PARTNERS</span>
    <div :class="$style.links">
        <a href="https://fes.de" target="_blank" alt="Friedrich-Ebert-Stiftung">
            <img src="../../assets/images/Logo_Friedrich_Ebert_Stiftung.svg" Width="100" alt="Friedrich-Ebert-Stiftung" />
        </a>
        <a href="https://www.gmfus.org/" target="_blank" alt="The German Marshall Fund of the United States">
            <img src="../../assets/images/GMF.svg" Width="100" alt="The German Marshall Fund of the United States" />
        </a>
        <a href="https://press-club.pro/" target="_blank" alt="Press Club Belarus">
            <img src="../../assets/images/pcb.jpg" Width="100" alt="Press Club Belarus" />
        </a>
        <a href="https://beroc.org/" target="_blank" alt="BEROC">
            <img src="../../assets/images/beroc.png" Width="100" alt="BEROC" />
        </a>
    </div>
</footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style module lang='scss'>
.footer {
    padding-top: 50px;
    padding-bottom: 10px;
    span {
        width: 100%;
        text-align: center;
        display: block;
        font-weight: 100;
        font-size: 16px;
        letter-spacing: 2px;
        color: lightgray;
        margin-bottom: 15px;
    }
    .links {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 1199px) {
            flex-direction: column;
        }
        img {
            margin: 0 20px;
            opacity: .5;
            &:hover {
                opacity: 1;
            }
            @media screen and (max-width: 1199px) {
                margin: 10px 0;
            }
        }
    }
}
</style>