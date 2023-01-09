import Vue from "vue";
import Router from "vue-router";

// Auth
const Auth = () => import("../views/auth/Auth");

const Login = () => import("../views/auth/Login");
const Register = () => import("../views/auth/Register");
const Main = () => import("../views/user/Main");

const Dashboard = () => import("../views/user/Dashboard");
const Profile = () => import("../views/user/Profile");
const NewProject = () => import("../views/Projects/NewProject");
const Projects = () => import("../views/Projects/Projects");
const Tasks = () => import("../views/Projects/Tasks");
const Messages = () => import("../views/Projects/Messages");
const FileLibrary = () => import("../views/Projects/FileLibrary");

//suport routes
const SupportTickets = () => import("../views/SupportTickets/SupportTicket");
const NewSupportTicket = () =>
    import("../views/SupportTickets/NewSupportTicket");
const SupportMessages = () => import("../views/SupportTickets/SupportMessages");

//payment routes
const PaymentList = () => import("../views/Payment/Payments");
const PaymentDetails = () => import("../views/Payment/PaymentDetails");
const PaymentConfirmation = () => import("../views/Payment/ConfirmPayment");
const PayByBank = () => import("../views/Payment/PayByBank");
const UploadPayment = () => import("../views/Payment/UploadPayment");
const PaymentSuccess = () => import("../views/Payment/PaymentSuccess");
const PaymentError = () => import("../views/Payment/PaymentError");
const Invoice = () => import("../views/Payment/Invoice");
const BillingHistory = () => import("../views/Payment/BillingHistory");

//Consultation calls
const BookConsultation = () =>
    import("../views/ConsultationCall/BookConsultation");
const ConsultationBookings = () =>
    import("../views/ConsultationCall/ConsultationBookings");

const NotFound = () => import("../views/404");

Vue.use(Router);

export default new Router({
    mode: "history",
    linkActiveClass: "active",
    base: "/app",
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
});

function configRoutes() {
    return [
        {
            path: "/",
            redirect: "/auth"
        },
        {
            path: "/auth",
            name: "Auth",
            component: Auth,
            children: [
                {
                    path: "redirect/:token",
                    name: "Auto_Login",
                    component: Login
                },
                {
                    path: "/",
                    name: "Login",
                    component: Login
                },
                {
                    path: "register",
                    name: "Rgister",
                    component: Register
                }
            ]
        },
        {
            path: "/user",
            name: "Main",
            component: Main,
            children: [
                {
                    path: "/dashboard",
                    name: "Dashboard",
                    component: Dashboard
                },
                {
                    path: "/projects",
                    name: "Projects",
                    component: Projects
                },
                {
                    path: "/project/messages/:project_id",
                    name: "Messages",
                    component: Messages
                },
                {
                    path: "/project/tasks/:category_id/:category_name",
                    name: "Tasks",
                    component: Tasks
                },
                {
                    path: "/support-tickets",
                    name: "Support Tickets",
                    component: SupportTickets
                },
                {
                    path: "/support-tickets/new",
                    name: "New Support Tickets",
                    component: NewSupportTicket
                },
                {
                    path: "/support-messages/:ticket_id/:title",
                    name: "Support Messages",
                    component: SupportMessages
                },
                {
                    path: "/payments",
                    name: "Payments",
                    component: PaymentList
                },
                {
                    path: "/payment/details/:invoice_id",
                    name: "Payment Details",
                    component: Invoice
                },
                {
                    path: "/payment/confirm/:invoice_id",
                    name: "Payment Confirmation",
                    component: PaymentConfirmation
                },
                {
                    path: "/payment/by-bank/:invoice_id",
                    name: "Payment By Bank",
                    component: PayByBank
                },
                {
                    path: "/payment/upload-receipt/:invoice_id",
                    name: "Payment Receipt",
                    component: UploadPayment
                },
                {
                    path: "/payment/success/:invoice_id",
                    name: "Payment Success",
                    component: PaymentSuccess
                },
                {
                    path: "/payment/error/:invoice_id",
                    name: "Payment Error",
                    component: PaymentError
                },
                {
                    path: "/profile",
                    name: "Account",
                    component: Profile
                },
                {
                    path: "/file-library/:file_type",
                    name: "File library",
                    component: FileLibrary
                },
                {
                    path: "/consultation/bookings",
                    name: "Consultation Calls",
                    component: ConsultationBookings
                },
                {
                    path: "/consultation/bookings/new",
                    name: "New Consultation Calls",
                    component: BookConsultation
                },
                {
                    path: "/invoice",
                    name: "Invoice",
                    component: Invoice
                },
                {
                    path: "/billing/history",
                    name: "Billing History",
                    component: BillingHistory
                }
            ]
        },
        { path: "/:catchAll(.*)", component: NotFound }
    ];
}
