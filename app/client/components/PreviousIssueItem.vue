<template>
    <router-link :class="$style.previousIssueItem" :to="'/' + $route.params.locale + '/issue/' + issue.url">
        <img :class="$style.photo" :src="require(`../../assets/images/${issue.image}`)" />
        <h2 :class="$style.title">{{ $route.params.locale == 'en' ? issue.title_en : issue.title_be }}</h2>
        <span :class="$style.date">{{ date }}</span>
        <!-- <div :class="$style.quote">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div> -->
    </router-link>
</template>

<script>
export default {
    name: 'PreviousIssueItem',
    props: {
        issue: Object
    },
    computed: {
        date() {
            const date = new Date(this.issue.month);
            return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
        },
        alt() {
            return this.$route.params.locale = 'en' ? this.issue.title_en : this.issue.title_be;
        }
    }
}
</script>

<style module lang='scss'>
.previousIssueItem {

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