<template>
    <div
        class="modal fade"
        id="cancelBooking"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header  text-center">
                    <h5 class="text-center">
                        Cancel Appointment
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
                    <input type="hidden" v-model="bookingID" />
                    <p>
                        Do you really want to cancel this appointment on
                        <!-- {{ new Date(booking.date).format("d M, Y") }}, -->
                        <span
                            v-if="booking.date && booking.startTime"
                            class="text-warning"
                            >{{
                                booking.date.toLocaleDateString(
                                    "en-US",
                                    options
                                ) || ""
                            }}
                            at {{ booking.startTime }} </span
                        >?
                    </p>
                </div>
                <div class="modal-footer">
                    <button
                        class="btn btn-light px-5"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        No
                    </button>
                    <button
                        class="btn btn-outline-light px-5"
                        data-dismiss="modal"
                        aria-label="Close"
                        @click="cancelBooking"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import userService from "../../services/user/user.service";
export default {
    props: {
        booking: Object
    },
    data() {
        return {
            options: {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            },
            bookingID: null
        };
    },
    watch: {},
    methods: {
        async cancelBooking() {
            let response = await userService.Post("appointment/cancel", {
                id: this.booking.bookingID
            });
            if (response.data.success) {
                this.$toast.success("Appointment Cancelled");
                this.$parent.getAppointments()
                console.log(this.$parent.appointments)
            }
        }
    }
};
</script>

<style></style>
