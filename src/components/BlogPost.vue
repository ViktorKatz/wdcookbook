<template>
    <div>
        <b-card :header="title"
                header-bg-variant="warning"
                header-border-variant="warning"
                border-variant="warning"
                class="mb-3"
                body-class="light-warning">
            <b-row>
                <b-card-sub-title>
                    <div class="float-start">
                        {{ $t('blog.author') }}: {{ author }}
                    </div>
                    <div class="float-end">
                        {{ $t('blog.date') }}: {{ date }}
                    </div>
                </b-card-sub-title>
            </b-row>

            <b-card-body>
                <b-row>
                    <b-col cols="12" lg="4">
                        <b-card-img-lazy :src="img" class="thumb" />
                    </b-col>
                    <b-col cols="12" lg="8">
                        <b-row>
                            <p class="text-justified">
                                {{ text }}
                            </p>
                        </b-row>
                        <b-row>
                            <b-link :href="linkmore"> {{ $t('blog.moreinfo') }} </b-link>
                        </b-row>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </div>
</template>

<style>
    .text-justified {
        text-align: justify;
    }
</style>
<script>
    export default {
        name: 'BlogPost',
        props: {
            author: String,
            title: String,
            text: String,
            img: String,
            date: String,
            linkmore: String,
        }
    }

</script>