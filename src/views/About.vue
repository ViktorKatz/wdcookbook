<template>
    <div class="about">
        <h1>This is an about page</h1>
        <GmapMap :center='mapcenter'
                 :zoom='14'
                 style='width:100%;  height: 400px;'>
            <GmapMarker :key="index"
                        :position="mapcenter"
                        :clickable="false"
                        :draggable="false"/>
        </GmapMap>
    </div>
</template>


<script>
    export default {
        name: 'About',
        data() {
            return {
                mapcenter: { lat: 43.866627, lng: 20.155488 },
            }
        },
    }

</script>