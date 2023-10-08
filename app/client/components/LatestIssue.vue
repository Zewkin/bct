<template>
    <div :class="$style.latestIssue">
        <div>
            <div :class="$style.badge">{{ $route.params.locale == 'en' ? 'The latest issue' : 'Апошні выпуск' }}</div>
            <div :class="$style.date">{{ date }}</div>
        </div>
        <router-link :to="'/' + $route.params.locale + '/issue/'+ issue.url" :class="$style.photoWrapper">
            <img :src="require(`../../assets/images/${issue.image}`)" />
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'LatestIssue',
    props: {
        issue: Object,
    },
    computed: {
        date() {
            const date = new Date(this.issue.month);
            return `${date.toLocaleString('en-US', { month: 'long' })} ${date.getFullYear()}`;
        },
        alt() {
            return this.$route.params.locale = 'en' ? `${this.issue.title_en}` : `${this.issue.title_be}`;
        },
        path() {
            return this.$route.path.slice(4);
        }
    }
}
</script>

<style module lang='scss'>
.latestIssue {

    position: relative;
    .badge {
        display: inline-block;
        background-color: #d50023;
        color: white;
        font-size: 12px;
        text-transform: uppercase;
        padding: 2px 5px;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .date {
        display: inline-block;
        color: darkgray;
        font-size: 12px;
    }

    .photoWrapper {
        display: block;
        img {
            width: 100%;
            display: block;
        }
    }
}

</style>