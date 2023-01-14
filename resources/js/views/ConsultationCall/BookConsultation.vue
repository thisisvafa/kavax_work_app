<template>
    <div
        class="modal fade"
        id="newBooking"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header  text-center">
                    <h5 class="text-center">
                        Select a date and time
                    </h5>
                    <button
                        type="button"
                        class="close text-white"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <VueSlickCarousel
                        v-bind="settings"
                        :nav="true"
                        v-if="dates_loaded"
                    >
                        <div
                            class="item"
                            v-for="(date, index) in dates"
                            :key="date.details.day"
                        >
                            <div class="date item  list-group-item">
                                <input
                                    type="radio"
                                    :id="date.details.day"
                                    v-model="selectedDate"
                                    :value="date.details.date"
                                    name="dates"
                                    :checked="index == 0"
                                    v-if="checkOffDay(date.details)"
                                    @change="changeDate(date)"
                                />

                                <label
                                    :for="
                                        checkOffDay(date.details)
                                            ? date.details.day
                                            : ''
                                    "
                                    :class="
                                        checkOffDay(date.details)
                                            ? 'py-5 '
                                            : 'py-5 disable-date'
                                    "
                                >
                                    <div>
                                        {{ date.details.name_day }}
                                    </div>
                                    <div>
                                        <h4 class="mb-0">
                                            {{ date.details.day }}
                                        </h4>
                                    </div>
                                    <div>
                                        {{ date.details.month }}
                                    </div>
                                </label>
                            </div>
                        </div>
                    </VueSlickCarousel>

                    <div class="d-flex justify-content-center  remark mt-3">
                        <ul
                            class="list-group list-group-horizontal-lg list-inline"
                        >
                            <li>
                                <ul
                                    class="list-group list-group-horizontal-lg list-inline"
                                >
                                    <li>
                                        <div class="unavailable"></div>
                                    </li>
                                    <li>
                                        unavailable
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul
                                    class="list-group list-group-horizontal-lg list-inline"
                                >
                                    <li>
                                        <div class="selected"></div>
                                    </li>
                                    <li>
                                        selected
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul
                                    class="list-group list-group-horizontal-lg list-inline"
                                >
                                    <li>
                                        <div class="available"></div>
                                    </li>
                                    <li>
                                        available
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class=" pl-2 mt-1">
                        <h4 class="mt-3 text-left">Select a time slot</h4>
                    </div>
                    <div class="col-md-12 d-flex justify-content-center">
                        <div class="card col-12">
                            <div class="card-body p-0">
                                <div
                                    class="row p-1 pt-2 pb-2 border-bottom"
                                    v-for="(details, index) in time_details"
                                    :key="details.id"
                                >
                                    <div class="col-md-4 h4">
                                        <table class="table">
                                            <tr>
                                                <td class="text-right">
                                                    <img
                                                        class="mr-2 pb-1"
                                                        :src="
                                                            '/images/' +
                                                                icons[index]
                                                        "
                                                        alt=""
                                                    />
                                                </td>
                                                <td class="text-left pl-0">
                                                    {{ details.name }}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="col-md-8">
                                        <table class="table col-12">
                                            <tr>
                                                <td
                                                    v-for="time in getTimeRow(
                                                        details.times,
                                                        1,
                                                        4
                                                    )"
                                                    :key="time.id"
                                                    :class="
                                                        ' time col-sm-3 ' +
                                                            isAvailableClass(
                                                                time
                                                            )
                                                    "
                                                >
                                                    <input
                                                        type="radio"
                                                        v-model="selectedTime"
                                                        :value="time.id"
                                                        :id="time.time"
                                                        name="time"
                                                        v-if="time.isAvailable"
                                                    />
                                                    <label :for="time.time">
                                                        {{ time.time }}
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td
                                                    v-for="time in getTimeRow(
                                                        details.times,
                                                        5,
                                                        8
                                                    )"
                                                    :key="time.id"
                                                    :class="
                                                        ' time col-sm-3 ' +
                                                            isAvailableClass(
                                                                time
                                                            )
                                                    "
                                                >
                                                    <input
                                                        type="radio"
                                                        v-model="selectedTime"
                                                        :value="time.id"
                                                        :id="time.time"
                                                        name="time"
                                                        v-if="time.isAvailable"
                                                    />
                                                    <label :for="time.time">
                                                        {{ time.time }}
                                                    </label>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div class="text-center mt-2">
                                    <button
                                        @click="submit"
                                        class="btn btn-outline-light px-5 py-1 mt-2"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
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
    props: {
        events: Array
    },
    components: { VueSlickCarousel },
    methods: {
        async getDates() {
            let response = await UserService.Get("get-dates");
            this.dates = response.data.days;
            this.time_details = response.data.days[0].parts;
            this.selectedDate = response.data.days[0].details.date;
            this.dates_loaded = true;
        },
        changeDate(date) {
            this.time_details = date.parts;
        },
        isAvailableClass(time) {
            if (!time.isAvailable) {
                return "text-booked";
            }
            return "";
        },
        checkOffDay(details) {
            if (details.name_day == "Sat" || details.name_day == "Sun") {
                return false;
            }
            return true;
        },
        async submit() {
            var data = {
                date: this.selectedDate,
                time_id: this.selectedTime
            };
            let response = await UserService.Post("appointment/create", data);
            if (response.data.success) {
                this.$toast.success(response.data.message);
                this.events.push(this.makeEvent(response.data.appointment));
            }
        },
        makeEvent(appointment) {
            return {
                bookingID: appointment.id,
                date: new Date(appointment.date),
                startTime: appointment.time.time,
                endTime: this.$parent.getEndTime(appointment.time.time),
                name: "Consultation"
            };
        },
        getTimeRow(data, start, end) {
            var items = [];
            for (var i = start - 1; i <= end - 1; i++) {
                items.push(data[i]);
            }
            return items;
        },
        isMobile() {
            if (
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            ) {
                return true;
            } else {
                return false;
            }
        }
    },
    created() {
        if (this.isMobile()) {
            this.settings.slidesToShow = 3;
        }
        this.getDates();
    },
    data() {
        return {
            dates: [],
            dates_loaded: false,
            selectedDate: null,
            time_details: {},
            selectedTime: null,
            slidesToShow: 5,
            icons: ["morning.svg", "afternoon.svg", "evening.svg"],
            settings: {
                dots: false,
                focusOnSelect: true,
                infinite: false,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 1,
                touchThreshold: 3,
                arrows: true,
                nav: true,
                swipeToSlide: true
            }
        };
    }
};
</script>

<style scoped>
.wrapper .daily div {
    background: #fff;
}

.available {
    background: white;
    width: 15px;
    height: 15px;
    margin-top: 5px;
    float: right;
}
.unavailable {
    background: black;
    width: 15px;
    height: 15px;
    margin-top: 5px;
    float: right;
}
.selected {
    background: #e29826;
    width: 15px;
    height: 15px;
    float: right;
    margin-top: 5px;
    margin-left: 10px;
}

.list-group-item {
    display: inline-block;
    border: none;
    width: auto !important;
    margin: 0px 10px 0px 10px;
    text-align: center;
}

.list-group-item {
    padding: 0px 0px 0px 0px;
}
.list-group-item label {
    padding: 0px 40px 0px 40px;
}
.list-group {
    flex-direction: row;
}
.remark ul li {
    width: auto;
    padding: 5px;
}
.dark-theme .btn-outline-light {
    color: #fff;
}
.dark-theme .btn-outline-light:hover {
    color: #e29826;
    border-color: #e29826;
    background: none;
}

/* } */
ul {
    list-style-type: none;
}

li {
    text-align: center;
    width: 180px;
}

input[type="radio"] {
    display: none;
}

.date label {
    display: block;
    position: relative;
    cursor: pointer;
    margin-bottom: 0px;
    color: black !important;
}

.time:hover {
    background-color: #3f3a3a;
}

.time label {
    margin: -10px;
    padding: 10px;
}

.date label:before {
    background-color: white;
    color: black !important;
    content: " ";
    display: block;
    /* border: 1px solid grey; */
}

label img {
    height: 24px;
    width: 24px;
    margin-bottom: 20px;
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
}

.date :checked + label {
    border: 1px solid #e29826;
    color: #000;
    background-color: #e29826;
}
.time :checked + label {
    color: #e29826;
}

.text-booked {
    color: #717171;
}

.card {
    background-color: transparent;
    border: none;
    padding: 1rem;
    box-shadow: none;
}

.disable-date {
    background: #2a2727;
}

.card .card-header {
    border-bottom: none;
    padding-top: 10px;
}
/* :checked + label:before {
    content: "✓";
    background-color: grey;
    transform: scale(1);
    border: 1px solid rgb(245, 229, 15);
} */

/* :checked + label img {
    transform: scale(0.9);
    box-shadow: 0 0 5px #333;
    z-index: -1;
} */

@media (min-width: 576px) {
    .modal-dialog {
        max-width: 800px;
        margin: 10px auto;
        /* overflow-y: hidden; */
    }
    .modal-dialog-scrollable {
        max-height: calc(100% - 0px);
        overflow: hidden;
    }
    .modal-dialog-scrollable .modal-content {
        max-height: calc(100vh - 60px);
    }
    .modal-dialog-centered {
        min-height: calc(100% - 0px);
    }
    .modal-dialog-centered::before {
        height: calc(100vh - 0px);
    }
    .modal-sm {
        max-width: 300px;
    }
}

.table td {
    padding: 10px;
}

button.slick-prev:before,
button.slick-next:before {
    background-color: red !important;
}
.border-bottom {
    border-bottom: 1px solid #2a2727 !important;
}

</style>
