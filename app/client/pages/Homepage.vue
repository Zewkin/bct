<template>
    <div>
        <div :class="$style.latestIssue">
            <LatestIssue :issue="latestIssue" />
        </div>
        <div :class="$style.previousIssues">
            <div :class="$style.badge">{{ $route.params.locale == 'en' ? 'Previous issues' : 'Папярэднія выпускі' }}</div>
            <vue-horizontal :class="$style.horizontal">
                <PreviousIssueItem
                    v-for="issue in otherIssues"
                    :issue="issue"
                />
            </vue-horizontal>
            <div :class="$style.threeColumns">
                <PreviousIssueItem
                    v-for="issue in otherIssues"
                    :issue="issue"
                />
            </div>
        </div>
        <div :class="$style.previousIssues">
            <div :class="$style.badge">Video</div>
            <vue-horizontal :class="$style.horizontal">
                <VideoItem
                    v-for="video in videos"
                    :video="video"
                />
            </vue-horizontal>
            <div :class="$style.threeColumns">
                <VideoItem
                    v-for="video in videos"
                    :video="video"
                />
            </div>
        </div>
    </div>
</template>

<script>
import LatestIssue from '../components/LatestIssue.vue';
import Quote from '../components/Quote.vue';
import PreviousIssueItem from '../components/PreviousIssueItem.vue';
import VideoItem from '../components/VideoItem.vue';

import { mapState } from 'vuex';

import VueHorizontal from 'vue-horizontal';

export default {
    components: {
        LatestIssue,
        Quote,
        PreviousIssueItem,
        VueHorizontal,
        VideoItem
    },
    metaInfo: {
        title: 'Belarus Change Tracker | Беларусский Трекер Перемен'
    },
    computed: {
        ...mapState('issues', {
            issues: state => state.issues,
        }),
        ...mapState('video', {
            videos: state => state.video.sort((a, b) => a.id < b.id ? 1 : -1),
        }),
        latestIssue() { return this.issues.reduce((prev, current) => (prev.id > current.id) ? prev : current) },
        otherIssues() { return this.issues.filter((issue) => issue.id !== this.latestIssue.id).sort((a, b) => a.id < b.id ? 1 : -1) }
    },
}
</script>

<style module lang='scss'>
.latestIssue {
    width: 100%;
}

.previousIssues {
    width: 100%;
}

.horizontal {
    @media screen and (max-width: 1199px) {
        display: none!important;
    } 
}

.video {
    width: calc(50% - 15px);
    float: left;
    margin-right: 15px;
    iframe {
        margin-top: 15px;
        width: 100%;
        height: 300px;
    }
}
.previousIssues {
    @media screen and (max-width: 1199px) {
        margin-top: 10px;
    }

    margin-top: 10px;
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

    .threeColumns {
        display: none;
        @media screen and (max-width: 1199px) {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-column-gap: 0;
            grid-row-gap: 0;
        }
    }
}
</style>

<style scoped>

</style>