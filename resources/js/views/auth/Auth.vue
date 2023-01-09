<template>
    <div class="container-scroller auth-bg">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center auth">
                <div class="row flex-grow">
                    <div class="col-lg-4 mx-auto">
                        <div class="auth-form-light text-center pb-5">
                            <div class="brand-logo mb-5 pb-3">
                               <a href="/"> <img src="/images/logo.svg" /></a>
                            </div>
                            <router-view :key="$route.path"></router-view>
                            <div class="pt-2">
                                <a href="https://kavax.co.uk/Terms-&-Conditions.pdf" class="text-warning mt-2">Terms & conditions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {

        console.log(localStorage.getItem("user"))
        let user = JSON.parse(localStorage.getItem("user"));
        if(user){
            this.$router.push('/dashboard')
        }
    },
    name: "Auth"
};
</script>
<style scoped>
.auth .auth-form-light {
    background: #ffffff00;
}
.auth-bg {
    background: url("/images/auth-bg.png") no-repeat top center/cover fixed;
}
.dark-theme .content-wrapper {
    background: #1c1c1f00;
}

.btn-outline-light:hover {
    border: 1px solid #e29826;
    color: #e29826 !important   ;
    background: transparent;
}

@media (min-width: 992px) {
    .sidebar-fixed .page-body-wrapper {
        width: 100%;
        margin-left: 0px;
    }
}
</style>
