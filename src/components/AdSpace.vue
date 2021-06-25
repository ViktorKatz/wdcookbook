<template>
    <div id="AdSpace" class="mt-3 mb-3 mt-lg-1">
        <b-carousel id="blic-zena-banner"
                    :interval="21000"
                    img-width="360"
                    img-height="240"
                    fade
                    no-touch
                    class="ad-carousel mt-2">
            <a href="https://www.blic.rs/">
                <b-carousel-slide img-src="/blic.jpg" />
            </a>
            <a href="https://www.sns.org.rs/en">
                <b-carousel-slide img-src="/vucic.jpeg" />
            </a>
        </b-carousel>
        <b-carousel id="vesti-banner"
                    :interval="17000"
                    img-width="360"
                    img-height="240"
                    fade
                    no-touch
                    class="ad-carousel mt-2">
            <a href="https://www.krstarica.com/">
                <b-carousel-slide img-src="/krstarica.png" />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <b-carousel-slide img-src="/Examples.webp" />
            </a>
        </b-carousel>
        <b-carousel id="third-banner"
                    :interval="15000"
                    img-width="360"
                    img-height="240"
                    fade
                    no-touch
                    class="ad-carousel mt-2">
            <a href="https://rs.n1info.com/">
                <b-carousel-slide img-src="/n1.jpg" />
            </a>
            <a href="https://zena.blic.rs/">
                <b-carousel-slide img-src="/blic_zena.gif" />
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

<style>
    .carousel-inner, .carousel-item, .carousel-item .img-fluid {
        height: 100% !important;
    }
</style>

<script>

</script>