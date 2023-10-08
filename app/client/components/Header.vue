<template>
<header :class="$style.header">
    <div :class="$style.logo">
        <router-link :to="'/' + $route.params.locale">BELARUS <span :class="$style.red">CHANGE </span>TRACKER</router-link>
    </div>
    <nav :class="$style.lang">
        <ul>
            <li>
                <router-link :to="'/en/' + path" :class="{ [$style.selected]: $route.params.locale == 'en'}">EN</router-link>
            </li>
            <li>
                <router-link :to="'/be/' + path" :class="{ [$style.selected]: $route.params.locale !== 'en'}">BE</router-link>
            </li>
        </ul>
    </nav>
    <nav role="navigation" :class="$style.nav">
        <ul>
            <li :class="$style.homelink">
                <router-link :to="'/' + $route.params.locale">{{$route.params.locale == 'en' ? 'Homepage' : 'Галоўная'}}</router-link></li>
            <!-- <li>
                {{$route.params.locale == 'en' ? 'Topics' : 'Тэмы'}}
                <ul>
                    <li><a href="#"></a>Test</li>
                </ul>
            </li> -->
            <li><router-link :to="'/' + $route.params.locale + '/about/'">{{$route.params.locale == 'en' ? 'About Us' : 'Пра Наc'}}</router-link></li>
            <li><a :href="require('../../assets/dataset_August_2023.zip')">Raw Data</a></li>
        </ul>
    </nav>
</header>
</template>

<script>
export default {
    name: 'Header',
    computed: {
        path() {
            return this.$route.path.slice(4);
        }
    }
}
</script>


<style module lang='scss'>
.header {
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    margin-bottom: 10px;
    position: relative;
}

.logo {
    /* font-family: 'Raleway'; */
    font-weight: 700;
    font-size: 36px;
    a {
        color: inherit;
        text-decoration: none;
        @media screen and (max-width: 1199px) {
            display: flex;
            flex-direction: column;
        }
    }
}

.base {
    font-size: 12px;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    ul {
        margin: 0;
        li {
            float: left;
            list-style-type: none;
            margin-left: 30px;
            padding: 15px 0;
            ul {
                display: none;
            }
            a {
                text-decoration: none;
                color: inherit;
                opacity: 0.5;
            }
        }
    }
}

.selected {
    opacity: 1!important;
}

.lang {
    @extend .base;
    @media screen and (max-width: 1199px) {
        position: absolute;
        right: 0;
        top: 100px;
        z-index: 9999;
    }
}

.nav {
    @extend .base;
    min-width: 300px;
    @media screen and (max-width: 1199px) {
        ul {
            position: absolute;
            top: 0;
            right: 0;
            li {
                float: none!important;
                overflow: hidden;
            }
        }
    }
    * {
        opacity: 1!important;
    }
}

.red {
    color: #d50023;
}

.homelink {
    @media screen and (max-width: 1199px) {
        display: none;

    }
}
</style>