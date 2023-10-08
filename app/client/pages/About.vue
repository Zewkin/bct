<template>
    <div :class="$style.about">
        <h1>About Us</h1>

        <div>
            <p>Belarus is going through the most turbulent period since its independence. The war in Ukraine and the Belarusian authorities’ complicity in Russia’s aggression, combined with the country’s still unresolved internal political crisis of 2020, have created a “perfect storm”. Features of the turbulent situation include ongoing widescale repressions, unprecedented foreign sanctions and the severance of economic relations with Western partners, international isolation and intensified social polarisation within the country. The situation poses many new challenges for researchers. It is increasingly difficult to identify sustainable and relatively long-term trends through the mists of a controlled information environment and the extreme volatility in economics, politics and public sentiment, as well as in regional security issues.</p>
            <p>To address these challenges, our five Belarusian experts produce a quarterly analytical report, the Belarus Change Tracker. The idea behind this product is to record and analyse more general trends in place of observers’ usual focus on individual events and the noise of daily information. The team includes two political analysts, two sociologists and economist. They are Pavel Slunkin, visiting fellow at the European Council on Foreign Relations; Artyom Shraibman, founder of the Sense Analytics consultancy; Philipp Bikanau, independent sociologist; Henadz Korshunau, programme director of Belaruskaya Akademia and senior analyst at the Center for New Ideas; Lev Lvovskiy, academic director at BEROC. Kateryna Bornukova, former academic director at BEROC, contributed to the first five editions of our report.</p>
            <p>The analytical “zest” of our report is an exclusive quarterly opinion poll that enables us to record shifts in public opinion across different segments of Belarusian society.</p>
        </div>
        <div>
            <img :src="require('../../assets/images/Artsiom_Shraibman.jpg')" alt="Артём Шрайбман Artyom Shraibman" :class="$style.left">
            <h2>Artyom Shraibman</h2>
            <p>Political analyst, founder of Sense Analytics consultancy. Artyom is a non-resident scholar with the Carnegie Russia-Eurasia Center (Berlin) and a frequent contributor to the Belarusian independent media outlet <a href="https://zerkalo.io/" target="_blank">Zerkalo.io</a>.</p>
        </div>
        <div>
            <img :src="require('../../assets/images/Pavel_Slunkin.jpg')" alt="Павел Слюнкин Pavel Slunkin" :class="$style.right">
            <h2>Pavel Slunkin</h2>
            <p>Pavel Slunkin is a visiting fellow at the European Council on Foreign Relations based in ECFR’s Warsaw office. He works on Belarus-related issues: its domestic and foreign policy, its relations with Russia, the European Union, and the United States. Prior to joining ECFR, he worked for the foreign ministry of Belarus. Pavel participated in the Minsk talks and worked as a political analyst at the embassy of Belarus in Lithuania. In 2020, he resigned in protest over the rigged elections and violence against the Belarusian people. He holds a bachelor’s degree in international relations from Belarusian State University and is an alumnus of several programs at Clingendael Institute of International Relations in the Netherlands, Wake Forest University in the US, and Friedrich Ebert Stiftung in Germany.</p>
        </div>
        <div>
            <img :src="require('../../assets/images/Genadz_Korshunau.jpg')" alt="Геннадий Коршунов Gennady Korshunov" :class="$style.left">
            <h2>Gennady Korshunov</h2>
            <p>Gennady Korshunov is a senior researcher at the Center for New Ideas. He specializes in public opinion research, analyzes the social consequences of digitalization, and studies the sociology of revolutions and the media. Before joining the Center for New Ideas, he worked as director of the Institute of Sociology of the National Academy of Sciences of Belarus. Due to repression in Belarus, he was forced to resign and leave the country.
In 2007, he defended his PhD thesis in sociological sciences at the Belarusian State University (Minsk, Belarus).</p>
        </div>
        <div>
            <img :src="require('../../assets/images/Leu_Lvouski.jpg')" alt="Лев Львовский Lev Lvovski" :class="$style.right">
            <h2>Lev Lvovskiy</h2>
            <p>Lev Lvovskiy is an academic director at BEROC Research Center. Holds a PhD in Economics from University of Iowa. Lev's scientific interests are Labor Economics and Demographic Economics. Lev is a frequent media commenter on Belarusian economy-related topics.</p>
        </div>
        <div>
            <img :src="require('../../assets/images/Filip_Bikanau.jpg')" alt="Филипп Биканов" :class="$style.left">
            <h2>Philipp Bikanau</h2>
            <p>Philipp Bikanau is a Belarusian sociologist and public opinion researcher. For the past 5 years, Philipp has been focusing on studying the political and social realities of Belarusians. He specializes in quantitative research methods and analysis. Philipp has conducted dozens of research projects and authored or co-authored studies such as the Belarusian national identity study, a study on the discrimination of Belarusians in Poland, Lithuania, and Georgia, as well as the Belarusian Change Tracker. Due to repression in Belarus, he was forced to leave the country and conduct his research from abroad.</p>
        </div>
    </div>
</template>

<script>
export default {
    metaInfo: {
        title: 'About Us'
    }
}
</script>

<style module lang='scss'>

.about {
    > div {
        width: 100%;
        overflow: hidden;
        float: none;
    }
    img {
        width: 33%;

        &.left {
            float: left;
            margin-right: 25px;
        }
        &.right {
            float: right;
            margin-left: 25px;
        }

        @media screen and (max-width: 1199px) {
            width: 100%;
            // border-radius: 50%;
            float: none!important;
            margin: 20px 0!important;
        }
    }
}

</style>