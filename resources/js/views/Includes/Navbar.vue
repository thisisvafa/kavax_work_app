<template>
    <nav class="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div
            class="navbar-menu-wrapper d-flex align-items-center justify-content-between"
        >
            <button
                class="navbar-toggler navbar-toggler align-items-center"
                type="button"
                data-toggle="minimize"
                @click="toggleSidebar"
            >
                <i :class="toggle ? 'mdi mdi-menu' : 'mdi mdi-close'"></i>
            </button>

            <button
                class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="offcanvas"
                @click="toggleSidebar"
            >
                <i :class="toggle ? 'mdi mdi-menu' : 'mdi mdi-close'"></i>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    created() {
        var self = this;
        document.body.addEventListener("click", function(evt) {
            if (!self.toggle && !self.iconClicked) {
                self.toggleSidebar();
            }
            self.iconClicked = false;
        });
    },
    data() {
        return {
            toggle: true,
            iconClicked: false
        };
    },
    methods: {
        toggleSidebar() {
            this.iconClicked = true;
            var sidebar = document.getElementById("sidebar");
            if (this.toggle) {
                sidebar.classList.add("active");
            } else {
                sidebar.classList.remove("active");
            }
            this.toggle = !this.toggle;
        }
    }
};
</script>

<style scoped>
.dark-theme .navbar .navbar-menu-wrapper {
    color: #fff;
    background: #2d2d2d;
}

.dark-theme .navbar .navbar-menu-wrapper .navbar-toggler {
    color: #fff;
}
</style>
