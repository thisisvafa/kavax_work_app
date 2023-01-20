<template>
    <div class="col-12 grid-margin ">
        <div
            :class="
                (!isMobile() ? 'd-flex ' : '') +
                    'justify-content-between align-items-center mb-5'
            "
        >
            <div>
                <p class="card-title h3">Book a Free Consultation Call</p>
                <p class="mb-0 text-muted">
                    We offer free 30 minute consultations to help you with your
                    project.
                </p>
            </div>
            <div :class="isMobile() ? 'text-right mt-3' : ''">
                <button
                    type="button"
                    class="btn btn-outline-light btn-icon-text bookCall"
                    data-toggle="modal"
                    data-target="#newBooking"
                >
                    <i class="mdi mdi-plus btn-icon-append"></i>
                    Book a call
                </button>
            </div>
        </div>
<!--        <div class="row" v-if="!isMobile()">-->
<!--            <vue-scheduler-->
<!--                :events="events"-->
<!--                :disable-dialog="true"-->
<!--                class="col-md-12"-->
<!--                event-display="name"-->
<!--                @event-clicked="eventClicked"-->
<!--                @event-created="eventCreated"-->
<!--            ></vue-scheduler>-->
<!--        </div>-->
<!--        <div class="row" v-else>-->
<!--            <div-->
<!--                class="col-md-3 p-3 appoint-box col-sm-6"-->
<!--                v-for="appointment in events"-->
<!--                :key="appointment.id"-->
<!--            >-->
<!--                <div class="p-2 mb-1">-->
<!--                    &lt;!&ndash; {{ appointment.time.part_of_day.name }} &ndash;&gt;-->
<!--                </div>-->

<!--                <div class="p-2 h3">-->
<!--                    &lt;!&ndash; <i class="mdi mdi-clock-fast"></i> &ndash;&gt;-->
<!--                    {{ appointment.startTime }}-->
<!--                </div>-->
<!--                <div class="p-2">-->
<!--                    <i class="mdi mdi-calendar-check"></i>-->
<!--                    {{ appointment.date.toString().split("00:00:00")[0] }}-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<div>
    <div class="card-body">
        <div class="row">
            <div
                v-if="events.length == 0"
                class="text-center text-light h4 col-md-12"
            >
                No upcoming appointment
            </div>
            <div
                v-else
                class="col-md-3 mb-2"
                v-for="appointment in events"
                :key="appointment.id"
            >
                <div class="p-3 appoint-box m-1" @click="eventClicked(appointment)">
                    <div class="p-2 mb-1">
                    </div>

                    <div class="p-2 h3">
                        <!-- <i class="mdi mdi-clock-fast"></i> -->
                        {{ appointment.startTime }}
                    </div>
                    <div class="p-2">
                        <i class="mdi mdi-calendar-check"></i>
                        {{ appointment.date.toString().split("00:00:00")[0] }}
                    </div>
                </div>
            </div>
            <div class="col-md-3 p-3 "></div>
        </div>
    </div>

</div>
        <NewBooking :events="events"></NewBooking>
        <CancelBooking :booking="booking"></CancelBooking>
    </div>
</template>

<script>
import UserService from "../../services/user/user.service";
import NewBooking from "./BookConsultation";
import CancelBooking from "./CancelBooking.vue";
import Service from "../../services/user/user.service";

export default {
    components: {
        NewBooking,
        CancelBooking
        //     "v-scheduler": VueScheduler
    },
    created() {
        if (this.$route.query.date && this.$route.query.time) {
            this.submitAppointment();
        }

        this.getAppointments();
    },
    data() {
        return {
            appointments: [],
            events: [],
            booking: {}
        };
    },
    methods: {
        async getAppointments() {
            this.events = []
            // let response = await Service.Get("dashboard");
            // if (response.data.success) {
            //     this.appointments = response.data.appointments;
            // }

            let response = await UserService.Get("appointments");
            if (response.data.success) {
                console.log(response)

                this.appointments = response.data.upcomingAppointments;
                for (let i = 0; i < this.appointments.length; i++) {
                    this.events.push(this.makeEvent(this.appointments[i]));
                }
            }
        },
        makeEvent(appointment) {
            return {
                bookingID: appointment.id,
                date: new Date(appointment.date),
                startTime: appointment.time.time + ":" + "01",
                endTime: this.getEndTime(appointment.time.time),
                name: "Consultation"
            };
        },
        getEndTime(startTime) {
            var times = startTime.split(":");
            if (times[1] == "30") {
                times[0] = parseInt(times[0]) + 1 + "";
                times[1] = "00";
            } else {
                times[1] = "30";
            }
            return times[0] + ":" + times[1];
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
        },
        eventClicked(event) {
            this.booking = event;
            // console.log(this.booking);
            $("#cancelBooking").modal("toggle");
        },
        eventCreated(event) {
            // this.$toast.success("event created");
        },
        async submitAppointment() {
            var data = {
                date: this.$route.query.date,
                time_id: this.$route.query.time
            };
            let response = await UserService.Post("appointment/create", data);
            if (response.data.success) {
                this.$toast.success(response.data.message);
                var tempEvents = this.events;
                this.events = [];
                this.events = tempEvents;
                this.events.push(this.makeEvent(response.data.appointment));
            }
        }
    },
    watch: {}
};
</script>

<style>
@media (max-width:575px) {
    .bookCall {
        position: fixed;
        bottom: 18px;
        left: 20px;
        width: 90%;
        background-color: #2d2d2d;
        z-index: 5;
    }
    .bookCall:hover {
        background-color: #2d2d2d !important;
    }
}
.appoint-box {
    border: 1px solid #fff;
    text-align: center;
}
.card .card-header {
    background-color: #23222000;
    border: none;
    padding: 0rem;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #74726f;
}
.dark-theme .btn-outline-light {
    color: #fff;
}
.dark-theme .btn-outline-light:hover {
    color: #e29826;
    border-color: #e29826;
    background: none;
}

.v-cal {
    background-color: transparent !important;
    color: white !important;
}

.v-cal-content .v-cal-weekdays,
.v-cal-content.v-cal-content--week .v-cal-weekdays,
.v-cal-content.v-cal-content--day .v-cal-weekdays {
    background-color: transparent !important;
    color: #fff;
}

.v-cal-content.v-cal-content--month .v-cal-days .v-cal-day {
    background: transparent !important;
}

.v-cal-content .v-cal-event-item {
    background-color: #e29826;
}

.v-cal-content .v-cal-event-item::after {
    background: none;
}

.v-cal-button {
    background-color: transparent !important;
    color: #fff;
}
.v-cal-button:hover {
    background-color: transparent !important;
    color: #e29826;
}

.v-cal-button.v-cal-button--is-active {
    background-color: transparent !important;
    color: #e29826;
}

.v-cal-times {
    background: transparent !important;
}

.v-cal-day {
    background: transparent !important;
}
</style>
