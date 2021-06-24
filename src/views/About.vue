<template>
    <div class="about">
        <b-container fluid>
            <b-row>
                <br />
                <h1>{{ $t('about.title') }}</h1>
                <hr />
            </b-row>
            <b-row>
                <b-col cols="12" lg="6">
                    <b-card :header="$t('about.missionAndVision')"
                            header-bg-variant="warning"
                            bg-variant="warning"
                            body-class="light-warning">
                        <b-card-body>
                            <b-card-text>
                                {{ $t('about.aboutUsText') }}
                            </b-card-text>
                        </b-card-body>
                    </b-card>
                </b-col>
                <b-col cols="12" lg="6" class="mt-4 mt-lg-0">
                    <b-card no-body
                            :header="$t('about.contact')"
                            bg-variant="warning">

                        <b-list-group flush>
                            <b-list-group-item variant="warning" class="d-flex justify-content-between align-items-center">
                                <b-card-text class="mb-0">{{ $t('about.telephone')}}:</b-card-text>
                                <b-card-text class="mb-0"><b-link href="tel:381669690931">(+381) 066 9690 931</b-link></b-card-text>
                            </b-list-group-item>
                            <b-list-group-item variant="warning" class="d-flex justify-content-between align-items-center">
                                <b-card-text class="mb-0">{{ $t('about.email')}}:</b-card-text>
                                <b-card-text class="mb-0"> <b-link href="mailto:uprava@cookbook.rs">uprava@cookbook.rs </b-link></b-card-text>
                            </b-list-group-item>
                            <b-list-group-item variant="warning" class="d-flex justify-content-between align-items-center">
                                <b-card-text class="mb-0">{{ $t('about.director')}}:</b-card-text>
                                <b-card-text class="mb-0">Viktor Katzenberger</b-card-text>
                            </b-list-group-item>
                            <b-list-group-item variant="warning" class="d-flex justify-content-between align-items-center">
                                <b-card-text class="mb-0">{{ $t('about.altRole')}}:</b-card-text>
                                <b-card-text class="mb-0">Dragan Milovančević</b-card-text>
                            </b-list-group-item>
                        </b-list-group>

                    </b-card>
                </b-col>
            </b-row>
            <br />
            <b-row>
                <b-col cols="12">
                    <b-card :header="$t('about.whereWeAre')"
                            header-bg-variant="warning"
                            bg-variant="warning"
                            body-class="light-warning">
                        <b-card-body>
                            <GmapMap :center='mapcenter'
                                     :zoom='14'
                                     style='width:100%;  height: 400px;'>
                                <GmapMarker :key="index"
                                            :position="mapcenter"
                                            :clickable="false"
                                            :draggable="false" />
                            </GmapMap>
                        </b-card-body>
                        <b-card-footer>
                            Draganska ulica bb, 33500 Dragangrad, Draganlend
                        </b-card-footer>
                    </b-card>
                </b-col>
            </b-row>
            <br />
        </b-container>
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