<template>
    <div
        class="modal  fade"
        id="whatsNew"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div>
                        <button
                            type="button"
                            class="close text-white"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="p-5">
                        <VueSlickCarousel
                            v-bind="settings"
                            :nav="true"
                            v-if="info_loaded"
                        >
                            <div
                                class="item  mb-5"
                                v-for="inf in info"
                                :key="inf.id"
                            >
                                <div
                                    class="text-center d-flex mb-5 justify-content-center"
                                >
                                    <img
                                        :src="'/images/whats-new.png'"
                                        alt=""
                                    />
                                </div>
                                <div class="text-center text-bold">
                                    {{ inf.title }}
                                </div>
                                <div class="text-center">
                                    {{ inf.content_text }}
                                </div>
                            </div>
                        </VueSlickCarousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from "../../services/user/user.service";
import VueSlickCarousel from "../../../../node_modules/vue-slick-carousel";
import "../../../../node_modules/vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "../../../../node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
    components: { VueSlickCarousel },
    created() {
        this.getWhatsNew();
    },
    data() {
        return {
            info: [],
            info_loaded: false,
            settings: {
                dots: true,
                focusOnSelect: true,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                touchThreshold: 3,
                arrows: true,
                nav: true,
                swipeToSlide: true
            }
        };
    },
    methods: {
        async getWhatsNew() {
            let response = await UserService.Get("whats-new");
            if (response.data.success) {
                this.info = response.data.info;
                this.info_loaded = true;
            }
        }
    }
};
</script>

<style>
.slick-dots li button:before {
    color: #fff;
    font-size: 10px;
}

.slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #e29826 !important;
}
@media (min-width: 576px) {
    .modal-dialog {
        max-width: 800px;
        margin: 30px auto;
    }
}

.close {
    margin: -20px -8px auto auto;
}
</style>
