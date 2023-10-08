<template>
    <div :class="{[$style['reversed']]: reversed, [$style.quote]: true }">
        <img :class="$style.photo" :src="require(`../../assets/images/${photoURL}`)" />
        <div :class="$style.content">
            <p>
                {{ quote }}
            </p>
            <span :class="$style.author">{{ name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Quote',
    props: {
        photoURL: String,
        name: String,
        quote: String,
        reversed: Boolean
    }
}
</script>

<style module lang='scss'>
.reversed {
    flex-direction: row-reverse!important;
}
.quote {
    display: flex;
    flex-direction: row;
    height: 200px;
    margin: 50px 0;

    @media screen and (max-width: 1199px) {
        display: none;
        flex-direction: column;
    }
    .photo {
        border-radius: 50%;
        height: 200px;
        width: 200px;
    }

    .content {
        position: relative;
        padding: 0 130px;
        display: flex;
        align-items: center;
        font-style: italic;
        color: darkgray;
        font-size: 28px;

        .author {
            font-size: 24px;
            font-weight: 100;
            position: absolute;
            right: 130px;
            bottom: 0;
        }

        p {
            margin: 0;
            font-weight: 100;
        }

        &::after {
            position: absolute;
            display: block;
            content: '»';
            font-size: 200px;
            line-height: 200px;
            bottom: -52px;
            right: 0;
            color: lightgray;
            font-style: italic;
        }

        &::before {
            position: absolute;
            display: block;
            content: '«';
            font-size: 200px;
            line-height: 200px;
            top: -77px;
            left: 0;
            color: lightgray;
            font-style: italic;
        }
    }
}
</style>