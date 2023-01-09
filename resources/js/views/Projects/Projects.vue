<template>
    <div class="col-12 grid-margin ">
        <div
            :class="
                (!isMobile() ? 'd-flex ' : '') +
                    'justify-content-between align-items-center mb-5'
            "
        >
            <div>
                <p class="card-title h3">Getting to know your project</p>
                <p class="mb-0 text-muted">
                    Answer a few quick questions to tell us all about your
                    project, the ideas you have for your project, and to share
                    any inspiration photos.
                </p>
            </div>
            <div :class="isMobile() ? 'text-right mt-3' : ''">
                <button
                    type="button"
                    class="btn btn-outline-light btn-icon-text"
                    data-toggle="modal"
                    data-target="#newProject"
                >
                    <i class="mdi mdi-plus btn-icon-append"></i>
                    Create Project Brief
                </button>
            </div>
        </div>

        <div class="row">
            <h3 class="col-12">Projects</h3>
            <div class="col-md-6 col-sm-12">
                <div class="mt-4">
                    <div
                        class="accordion accordion-bordered"
                        id="accordion-1"
                        role="tablist"
                    >
                        <div class="card open">
                            <div
                                class="card-header"
                                role="tab"
                                id="heading-opened"
                            >
                                <h6 class="mb-0">
                                    <a
                                        data-toggle="collapse"
                                        href="#collapse-opened"
                                        aria-expanded="false"
                                        aria-controls="collapse-4"
                                    >
                                        Open
                                    </a>
                                </h6>
                            </div>
                            <div
                                id="collapse-opened"
                                class="active collapse show"
                                role="tabpanel"
                                aria-labelledby="heading-opened"
                                data-parent="#accordion-1"
                            >
                                <div class="card-body pt-4">
                                    <div
                                        class="project-bg mt-2"
                                        v-for="(project, index) in openedProjects"
                                        :key="project.id"
                                    >
                                        <input
                                            type="radio"
                                            :id="project.id"
                                            name="projects"
                                            :checked="
                                                ($parent.global_project_id ==
                                                    project.id) || (index == 0)
                                            "
                                            @change="onChange(project)"
                                            onchange="onChange(project)"
                                        />
                                        <label
                                            :for="project.id"
                                            class="card bg-gray"
                                        >
                                            <div class="card-body px-1 py-4">
                                                <div
                                                    class="d-flex justify-content-between align-items-start"
                                                >
                                                    <div class="color-card">
                                                        <span
                                                            class="mb-0 color-card-head"
                                                        >
                                                            {{
                                                                project.created_at
                                                            }}
                                                        </span>
                                                        <h3 class="text-white">
                                                            {{ project.name }}
                                                        </h3>
                                                    </div>
                                                    <i
                                                        class="card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"
                                                    ></i>
                                                </div>
                                            </div>
                                            <div class="card-footer ">
                                                <div
                                                    class="d-flex justify-content-between align-items-start align-middle"
                                                >
                                                    <div>
                                                        <ul
                                                            class="list-group list-group-horizontal list-inline"
                                                        >
                                                            <li
                                                                v-for="category in project.categories"
                                                                :key="
                                                                    category.id
                                                                "
                                                            >
                                                                <VueCustomTooltip
                                                                    :label="
                                                                        getProgressByCategory(
                                                                            category.id,
                                                                            project.progressPerCategory
                                                                        )
                                                                    "
                                                                    position="is-top"
                                                                >
                                                                    <img
                                                                        :src="
                                                                            '/images/' +
                                                                                category.image +
                                                                                '.svg'
                                                                        "
                                                                        alt=""
                                                                    />
                                                                </VueCustomTooltip>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="">
                                                        <ul
                                                            class="list-group list-group-horizontal list-unstyled align-middle"
                                                        >
                                                            <li>
                                                                <VueCustomTooltip
                                                                    label="Overall progress"
                                                                    position="is-top"
                                                                >
                                                                    <div
                                                                        class="progress progress-md mt-2"
                                                                        style="width:100px;"
                                                                    >
                                                                        <div
                                                                            class="progress-bar bg-success"
                                                                            role="progressbar"
                                                                            aria-valuenow="5"
                                                                            :style="
                                                                                'width: ' +
                                                                                    parseInt(
                                                                                        project.progress
                                                                                    ) +
                                                                                    '%'
                                                                            "
                                                                            aria-valuemin="0"
                                                                            aria-valuemax="100"
                                                                        ></div>
                                                                    </div>
                                                                </VueCustomTooltip>
                                                            </li>
                                                            <li
                                                                class="ml-1 text-success"
                                                            >
                                                                <small
                                                                    >{{
                                                                        parseInt(
                                                                            project.progress
                                                                        )
                                                                    }}%</small
                                                                >
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-sm-12">
                <div class="mt-4">
                    <div
                        class="accordion accordion-bordered"
                        id="accordion-2"
                        role="tablist"
                    >
                        <div class="card closed">
                            <div
                                class="card-header"
                                role="tab"
                                id="heading-closed"
                            >
                                <h6 class="mb-0">
                                    <a
                                        data-toggle="collapse"
                                        href="#collapse-closed"
                                        aria-expanded="false"
                                        aria-controls="collapse-4"
                                    >
                                        Closed
                                    </a>
                                </h6>
                            </div>
                            <div
                                id="collapse-closed"
                                class="active collapse show"
                                role="tabpanel"
                                aria-labelledby="heading-closed"
                                data-parent="#accordion-2"
                            >
                                <div class="card-body pt-4">
                                    <div
                                        class="project-bg mt-2"
                                        v-for="project  in closedProjects"
                                        :key="project.id"
                                    >
                                        <input
                                            type="radio"
                                            :id="project.id"
                                            name="projects"
                                            :checked="
                                                ($parent.global_project_id ==
                                                    project.id) 
                                            "
                                            
                                            @change="onChange(project)"
                                        />
                                        <label
                                            :for="project.id"
                                            class="card bg-gray"
                                        >
                                            <div class="card-body px-1 py-4">
                                                <div
                                                    class="d-flex justify-content-between align-items-start"
                                                >
                                                    <div class="color-card">
                                                        <p
                                                            class="mb-0 color-card-head"
                                                        >
                                                        
                                                            {{
                                                                new Date(
                                                                    project.created_at
                                                                )
                                                                    .toLocaleString()
                                                                    .split(
                                                                        ","
                                                                    )[0]
                                                            }}
                                                        </p>
                                                        <h2 class="text-white ">
                                                            {{ project.name }}
                                                        </h2>
                                                    </div>
                                                    <i
                                                        class="card-icon-indicator mdi mdi-basket bg-inverse-icon-warning"
                                                    ></i>
                                                </div>
                                            </div>
                                            <div class="card-footer ">
                                                <div
                                                    class="d-flex justify-content-between align-items-start align-middle"
                                                >
                                                    <div>
                                                        <ul
                                                            class="list-group list-group-horizontal list-inline"
                                                        >
                                                            <li
                                                                v-for="category in project.category"
                                                                :key="
                                                                    category.id
                                                                "
                                                            >
                                                                <VueCustomTooltip
                                                                    :label="
                                                                        getProgressByCategory(
                                                                            category.id,
                                                                            project.progressPerCategory
                                                                        )
                                                                    "
                                                                    position="is-top"
                                                                >
                                                                    <img
                                                                        :src="
                                                                            '/images/' +
                                                                                category.image +
                                                                                '.svg'
                                                                        "
                                                                        alt=""
                                                                        data-toggle="tooltip"
                                                                        data-placement="right"
                                                                        title="Basic tooltip"
                                                                /></VueCustomTooltip>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="">
                                                        <ul
                                                            class="list-group list-group-horizontal list-unstyled align-middle"
                                                        >
                                                            <li>
                                                                <VueCustomTooltip
                                                                    label="Overall progress"
                                                                    position="is-top"
                                                                >
                                                                    <div
                                                                        class="progress progress-md mt-2"
                                                                        style="width:100px;"
                                                                    >
                                                                        <div
                                                                            class="progress-bar bg-success"
                                                                            role="progressbar"
                                                                            aria-valuenow="5"
                                                                            :style="
                                                                                'width: ' +
                                                                                    parseInt(
                                                                                        project.progress
                                                                                    ) +
                                                                                    '%'
                                                                            "
                                                                            aria-valuemin="0"
                                                                            aria-valuemax="100"
                                                                        ></div>
                                                                    </div>
                                                                </VueCustomTooltip>
                                                            </li>
                                                            <li
                                                                class="ml-1 text-success"
                                                            >
                                                                <small>
                                                                    {{
                                                                        parseInt(
                                                                            project.progress
                                                                        )
                                                                    }}%</small
                                                                >
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <h4
                    v-if="
                        openedProjects.length == 0 && closedProjects.length == 0
                    "
                    class="text-center mt-5 text-light"
                >
                    No Project Found
                </h4>
            </div>
        </div>
        <NewProject :projects="openedProjects"></NewProject>
    </div>
</template>

<script>
import UserService from "../../services/user/user.service";
import NewProject from "./NewProject.vue";
import VueCustomTooltip from "@adamdehaven/vue-custom-tooltip";
import moment from "moment";

export default {
    props: {
        global_project_id: Number
    },
    created() {
        this.getProjects();

        this.selectedProjectID = this.global_project_id;
        // console.log(this.selectedProjectID);
    },
    data() {
        return {
            openedProjects: [],
            closedProjects: [],
            selectedProjectID: null
        };
    },
    methods: {
        getProgressByCategory(category_id, progressPerCategory) {
            var progress = "0";
            for (var i = 0; i < progressPerCategory.length; i++) {
                if (progressPerCategory[i].category == category_id) {
                    progress = progressPerCategory[i].sumProgress;
                    break;
                }
            }
            return progress + "%";
        },
        onChange(project) {
            this.$parent.global_project = project;
            this.$parent.global_project_id = project.id;
            localStorage.setItem("project", JSON.stringify(project));
        },
        async getProjects() {
            let responnse = await UserService.Get("projects");
            // console.log(responnse);
            if (responnse.data.success == 1) { 
                // if(responnse.data.projects.opened.length > 0){
                // this.onChange(responnse.data.projects.opened[0])
                // }
                this.openedProjects = responnse.data.projects.opened;
                this.closedProjects = responnse.data.projects.closed;
               
            }
        },
        getCategoryImage(category) {
            if (category == "Web Development") {
                return "web";
            } else if (category == "App Development") {
                return "mobile";
            } else if (category == "Video Marketing") {
                return "video";
            } else if (category == "Digital Marketing") {
                return "mic";
            } else {
                return "typewriter";
            }
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
    components: {
        NewProject,
        VueCustomTooltip
    }
};
watch: {
}
</script>

<style scoped>
.dark-theme .accordion .card .card-header a[aria-expanded="false"]:before {
    content: "\2303";
    font-size: 28px;
    transform: rotate(180deg);
    margin-top: -10px;
    color: #fff;
}

.dark-theme .accordion .card .card-header a[aria-expanded="true"]:before {
    content: "\2303";
    font-size: 28px;
    /* margin-top: -10px; */
    color: #fff;
}
.accordion .card .card-header {
    background-color: #232220;
    border: none;
    padding: 1rem;
}

.dark-theme .accordion.accordion-bordered .open {
    border-top: 1px solid #7155b2;
    margin: 0;
    padding: 0 0rem;
}

.dark-theme .accordion.accordion-bordered .closed {
    border-top: 1px solid #569e4c;
    margin: 0;
    padding: 0 0rem;
}

.accordion .card,
.accordion.accordion-bordered {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;
    border-top: none;
}

.project-bg,
.card-header {
    background-color: #232220;
}

.project-bg:hover {
    border: 1px solid #74726f;
}

.card-footer {
    border-top: none;
    padding-left: 0px;
}

.list-inline li {
    padding: 10px;
}
.progress {
    background-color: #00000000;
    border: 1px solid #068d50;
}
.dark-theme .btn {
    color: #fff;
}
.btn-outline-secondary,
.editable-container.editable-inline
    .editableform
    .control-group
    .editable-buttons
    .editable-cancel {
    color: #fff;
    border-color: #fff;
}

input[type="radio"] {
    display: none;
}

:checked + label {
    border-top: 2px solid #e29826 !important;
    border-left: 2px solid #e29826 !important;
    border-right: 2px solid #e29826 !important;
    border-bottom: 2px solid #e29826 !important;
    background-color: #332f2a;
    /* color: #e29826; */
}

.project-bg + :checked {
    /* border: 3px solid #e29826; */
    background-color: #332f2a;
    /* color: #e29826; */
}

:checked + label:before {
    content: "\2714"; /*   "✓";*/
    background-color: #e29826;
    transform: scale(1);
    /* border: 1px solid #e29826; */
    margin: auto -32px -20px auto;
    color: #fff;
    width: 20px;
    height: 20px;
    text-align: center;
}

.dark-theme .btn-outline-light {
    color: #fff;
}
.dark-theme .btn-outline-light:hover {
    color: #e29826;
    border-color: #e29826;
    background: none;
}

.card-body h3 {
    word-break: break-word;
}
</style>
