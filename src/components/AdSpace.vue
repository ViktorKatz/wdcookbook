<template>
    <div id="AdSpace" class="mt-3 mb-3 mt-lg-1">
        <b-carousel id="blic-zena-banner"
                    interval="9000"
                    img-width="360"
                    img-height="240"
                    fade
                    no-touch
                    class="ad-carousel mt-2">
            <a href="https://www.blic.rs/">
                <b-carousel-slide img-src="https://www.mercury-publicity.com/wp-content/uploads/2019/03/blic.jpg" />
            </a>
            <a href="https://zena.blic.rs/">
                <b-carousel-slide img-src="http://www.serbianlogo.com/thumbnails/blic_zena.gif" />
            </a>
        </b-carousel>
        <b-carousel id="vesti-banner"
                    interval="6000"
                    img-width="360"
                    img-height="240"
                    fade
                    no-touch
                    class="ad-carousel mt-2">
            <a href="https://www.krstarica.com/">
                <b-carousel-slide img-src="https://play-lh.googleusercontent.com/1jKiXr9aFuKGzWOHif-gQwXymvzQ_u3EvchheI66EYoWnx0lk3HUXvDi8pKcy8nSZw" />
            </a>
            <a href="https://rs.n1info.com/">
                <b-carousel-slide img-src="https://www.danas.rs/wp-content/uploads/2019/07/n1-678x382.jpg" />
            </a>
        </b-carousel>
        <b-carousel id="third-banner"
                    interval="11000"
                    img-width="360"
                    img-height="240"
                    fade
                    no-touch
                    class="ad-carousel mt-2">
            <a href="https://www.sns.org.rs/en">
                <b-carousel-slide img-src="https://rs.n1info.com/wp-content/uploads/2020/02/slogan-302681.jpeg" />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <b-carousel-slide img-src="https://neilpatel.com/wp-content/uploads/2021/02/ExamplesofSuccessfulBannerAdvertising.jpg" />
            </a>
        </b-carousel>
    </div>
</template>

<style scoped>
    .ad-carousel {
        width: 100%;
        height: 200px;
    }

</style>