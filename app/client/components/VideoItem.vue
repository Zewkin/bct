<template>
    <a :class="$style.videoItem" :href="video.url" target="_blank">
        <img :class="$style.photo" :src="require(`../../assets/images/video/${video.image}`)" />
        <h2 :class="$style.title">{{ $route.params.locale == 'en' ? video.title_en : video.title_be }}</h2>
        <span :class="$style.date">{{ date }}</span>
        <!-- <div :class="$style.quote">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div> -->
    </a>
</template>

<script>
export default {
    name: 'VideoItem',
    props: {
        video: Object
    },
    computed: {
        date() {
            const date = new Date(this.video.month);
            return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
        },
        alt() {
            return this.$route.params.locale = 'en' ? this.video.title_en : this.video.title_be;
        }
    }
}
</script>

<style module lang='scss'>
.videoItem {

    // width: 288.75px;

    display: block;
    color: inherit;
    text-decoration: none;
    @media screen and (max-width: 1199px) {
        margin-bottom: 10px;
    }

    .photo {
        width: 100%;
    }

    .title {
        font-size: 14px;
        margin-bottom: 0;
    }

    .date {
        color: darkgray;
        font-size: 12px;
        font-weight: 100;
    }

    .quote {
        font-style: italic;
        font-weight: 100;
        margin-top: 10px;
    }

}
</style>