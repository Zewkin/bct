<template>
    <div :class="$style['video-wrapper']">
        <div>
            <div :class="$style.badge">Video</div>
            <div :class="$style.date">1 SEP 2023</div>
        </div>
        <iframe src="https://www.youtube.com/embed/Cn2Z-CN1l_4?si=un8BPfSt_ccpjm_q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
    </div>
</template>

<script>
export default {
    name: 'VideoWrapper'
}
</script>

<style module lang='scss'>
.video-wrapper {
    padding-bottom: 15px;
    .badge {
        display: inline-block;
        background-color: #d50023;
        color: white;
        font-size: 12px;
        text-transform: uppercase;
        padding: 2px 5px;
        margin-right: 10px;
    }

    .date {
        display: inline-block;
        color: darkgray;
        font-size: 10px;
    }

}
</style>