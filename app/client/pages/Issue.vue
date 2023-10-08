<template>
    <div :class="$style.issue">
        <div :class="$style.header">
            <h1>{{ $route.params.locale == 'en' ? issue.title_en : issue.title_be }}</h1>
            <div style="display: flex; flex-direction: row; align-items: center;">
                <div :class="$style.date">{{ date }}</div>
                <a target="_blank" :href="require(`../../assets/issues/${$route.params.locale == 'en' ? issue.pdf_en : issue.pdf_be}`)" :class="$style.pdflink" :alt="$route.params.locale == 'en' ? issue.title_en : issue.title_be">
                    <font-awesome-icon icon="fa-regular fa-file-pdf" />
                </a>
            </div>
            <!-- <a :href="require(`../../assets/issues/${$route.params.locale == 'en' ? issue.pdf_en : issue.pdf_be}`)">Test</a> -->
        </div>
        <client-only>
            <vue-pdf-embed :source="require(`../../assets/issues/${$route.params.locale == 'en' ? issue.pdf_en : issue.pdf_be}`)" />
        </client-only>
    </div>
</template>

<script>
import ClientOnly from 'vue-client-only';
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('issues');

export default {
    components: {
        VuePdfEmbed: () => import('vue-pdf-embed/dist/vue2-pdf-embed'),
        ClientOnly
    },
    metaInfo() {
        return {
            title: this.issue ? this.issue.title_en : 'Belarus Change Tracker'
        }
    },
    computed: {
        ...mapState({
            issues: state => state.issues,
        }),
        issue () {
            return this.issues.find((issue) => issue.url == this.$route.params.id);
        },
        date() {
            const date = new Date(this.issue.month);
            return `${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
        },
        url() {

        }
    }
}
</script>

<style module lang='scss'>

.issue {
    display: block;

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        @media screen and (max-width: 1199px) {
            flex-direction: column;
            align-items: start;
        }
    }

    h1 {
        float: left;
        @media screen and (max-width: 1199px) {
            margin: 0 0 10px 0;
        }
    }

    .pdflink {
        color: #d50023;
        float: left;
        font-size: 24px;
        @media screen and (max-width: 1199px) {
            margin: 0 0 10px 20px;
            display: inline-block;
        }
    }

    .date {
        float: left;
        margin: 0 30px;
        color: darkgrey;
        font-weight: 100;
        @media screen and (max-width: 1199px) {
            margin: 0 0 10px 0;
        }
    }
}

</style>