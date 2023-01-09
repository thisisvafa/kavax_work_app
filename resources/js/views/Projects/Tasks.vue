<template>
    <div class="col-12 grid-margin ">
        <div class="d-flex justify-content-between align-items-center mb-5">
            <div>
                <p class="card-title h3">{{ category_name || "" }}</p>
                <p class="mb-0 text-muted">
                    Please check the progress status of your project below.
                </p>
            </div>
            <div>
                <!-- <button
                    type="button"
                    class="btn btn-outline-secondary btn-icon-text"
                    data-toggle="modal"
                    data-target="#newProject"
                >
                    <i class="mdi mdi-plus btn-icon-append mr-2"></i>
                    New Task
                </button> -->
            </div>
        </div>

        <div
            class="table-holder  mt-4"
            @wheel.prevent="wheelHorizontal($event)"
        >
            <div
                class="table-responsive"
                ref="table"
                @scroll.prevent="scrollHorizontal($event)"
            >
                <table class="table ">
                    <thead>
                        <tr>
                            <th class="float-left pb-0 border-0 pl-0">
                                <span class="bg-warning p-2 mb-0"
                                    >IN PROGRESS</span
                                >
                                <small class=" p-2 mb-0">
                                    {{ inProgress.length }} TASK</small
                                >
                            </th>
                            <th style="width:15%;">Assignee</th>
                            <th style="width:15%;">Due Date</th>
                            <th style="width:15%;">Priority</th>
                            <th style="width:15%;">Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="task in inProgress" :key="task.id">
                            <td class="">
                                <span class="box float-left mr-2"> </span>
                                <span style="max-width:100%;">
                                    {{ task.name }}</span
                                >
                            </td>
                            <td class="d-flex justify-content-center">
                                <!-- <VueCustomTooltip
                                                                    :label="
                                                                        task.user.fullName.split(' ')[0]
                                                                    "
                                                                    position="is-top"
                                                                > -->
                                <div class="container">
                                    <div class="name">
                                        {{
                                            getPhotoFromName(task.user.fullName)
                                        }}
                                    </div>
                                </div>
                                <!-- </VueCustomTooltip> -->
                            </td>
                            <td>{{ task.end_date }}</td>
                            <td>
                                <img
                                    :src="'/images/' + priority[task.priority]"
                                    alt=""
                                />
                            </td>
                            <td class="justify-content-center">
                                <div class=" d-flex justify-content-center">
                                    <div
                                        :class="
                                            'mt-1 progress ' +
                                                (task.status == 2
                                                    ? 'progress-paused'
                                                    : 'progress-running')
                                        "
                                    >
                                        <div
                                            :class="
                                                'progress-bar ' +
                                                    (task.status == 2
                                                        ? 'bg-danger'
                                                        : 'bg-success')
                                            "
                                            role="progressbar"
                                            :style="
                                                'width: ' + task.progress + '%'
                                            "
                                            :aria-valuenow="task.progress"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                    <div
                                        v-if="task.status == 2"
                                        class="text-danger mx-3"
                                    >
                                        <i class="fa fa-pause"></i>
                                    </div>
                                    <div v-if="task.status == 2">
                                        <small>
                                            {{ task.hours }}:{{
                                                task.minutes
                                            }}:{{ task.seconds }}
                                        </small>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h4
                    v-if="tasks.length == 0"
                    class="text-center mt-5 text-light"
                >
                    No Task Found
                </h4>
            </div>
        </div>

        <div
            class="table-holder  mt-4 "
            @wheel.prevent="wheelHorizontal($event)"
        >
            <div
                class="table-responsive"
                ref="table"
                @scroll.prevent="scrollHorizontal($event)"
            >
                <table class="table ">
                    <thead>
                        <tr>
                            <th class="float-left pb-0 border-0 pl-0">
                                <span class="bg-dark p-2 mb-0">OPEN</span>
                                <small class=" p-2 mb-0"
                                    >{{ open.length }} TASK</small
                                >
                            </th>
                            <th style="width:15%;">Assignee</th>
                            <th style="width:15%;">Due Date</th>
                            <th style="width:15%;">Priority</th>
                            <th style="width:15%;">Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="task in open" :key="task.id">
                            <td>
                                <span class="box float-left mr-2"> </span>
                                <span style="width:100%;">
                                    {{ task.name }}</span
                                >
                            </td>
                            <td class="d-flex justify-content-center">
                                <!-- <VueCustomTooltip
                                                                    :label="
                                                                        task.user.fullName.split(' ')[0]
                                                                    "
                                                                    position="is-top"
                                                                > -->
                                <div class="container">
                                    <div class="name">
                                        {{
                                            getPhotoFromName(task.user.fullName)
                                        }}
                                    </div>
                                </div>
                                <!-- </VueCustomTooltip> -->
                            </td>
                            <td>{{ task.end_date }}</td>
                            <td>
                                <img
                                    :src="'/images/' + priority[task.priority]"
                                    alt=""
                                />
                            </td>
                            <td class="justify-content-center">
                                <div class=" d-flex justify-content-center">
                                    <div
                                        :class="
                                            'mt-1 progress ' +
                                                (task.status == 2
                                                    ? 'progress-paused'
                                                    : 'progress-running')
                                        "
                                    >
                                        <div
                                            :class="
                                                'progress-bar ' +
                                                    (task.status == 2
                                                        ? 'bg-danger'
                                                        : 'bg-success')
                                            "
                                            role="progressbar"
                                            :style="
                                                'width: ' + task.progress + '%'
                                            "
                                            :aria-valuenow="task.progress"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                    <div
                                        v-if="task.status == 2"
                                        class="text-danger mx-2"
                                    >
                                        <i class="fa fa-pause"></i>
                                    </div>
                                    <div v-if="task.status == 2" class="pr-2">
                                        <small>
                                            {{ task.hours }}:{{
                                                task.minutes
                                            }}:{{ task.seconds }}
                                        </small>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h4
                    v-if="tasks.length == 0"
                    class="text-center mt-5 text-light"
                >
                    No Task Found
                </h4>
            </div>
        </div>

        <div
            class="table-holder  mt-4"
            @wheel.prevent="wheelHorizontal($event)"
        >
            <div
                class="table-responsive"
                ref="table"
                @scroll.prevent="scrollHorizontal($event)"
            >
                <table class="table ">
                    <thead>
                        <tr>
                            <th class="float-left pb-0 border-0 pl-0">
                                <span class="bg-success p-2 mb-0"
                                    >COMPLETED</span
                                ><small class=" p-2 mb-0">
                                    {{ completed.length }} TASK</small
                                >
                            </th>
                            <th style="width:15%;">Assignee</th>
                            <th style="width:15%;">Due Date</th>
                            <th style="width:15%;">Priority</th>
                            <th style="width:15%;">Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="task in completed" :key="task.id">
                            <td>
                                <span class="box float-left mr-2"> </span>
                                <span style="max-width:100%;">
                                    {{ task.name }}</span
                                >
                            </td>
                            <td class="d-flex justify-content-center">
                                <!-- <VueCustomTooltip
                                                                    :label="
                                                                        task.user.fullName.split(' ')[0]
                                                                    "
                                                                    position="is-top"
                                                                > -->
                                <div class="container">
                                    <div class="name">
                                        {{
                                            getPhotoFromName(task.user.fullName)
                                        }}
                                    </div>
                                </div>
                                <!-- </VueCustomTooltip> -->
                            </td>
                            <td>{{ task.end_date }}</td>
                            <td>
                                <img
                                    :src="'/images/' + priority[task.priority]"
                                    alt=""
                                />
                            </td>
                            <td class="justify-content-center">
                                <div class=" d-flex justify-content-center">
                                    <div
                                        :class="
                                            'mt-1 progress ' +
                                                (task.status == 2
                                                    ? 'progress-paused'
                                                    : 'progress-running')
                                        "
                                    >
                                        <div
                                            :class="
                                                'progress-bar ' +
                                                    (task.status == 2
                                                        ? 'bg-danger'
                                                        : 'bg-success')
                                            "
                                            role="progressbar"
                                            :style="
                                                'width: ' + task.progress + '%'
                                            "
                                            :aria-valuenow="task.progress"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                    <div
                                        v-if="task.status == 2"
                                        class="text-danger mx-3"
                                    >
                                        <i class="fa fa-pause"></i>
                                    </div>
                                    <div v-if="task.status == 2">
                                        <small>
                                            {{ task.hours }}:{{
                                                task.minutes
                                            }}:{{ task.seconds }}
                                        </small>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h4
                    v-if="tasks.length == 0"
                    class="text-center mt-5 text-light"
                >
                    No Task Found
                </h4>
            </div>
        </div>
    </div>
</template>

<script>
import Service from "../../services/user/user.service";
import VueCustomTooltip from "@adamdehaven/vue-custom-tooltip";
import moment from "moment";
export default {
    created() {
        this.category_id = this.$route.params.category_id;
        this.category_name = this.$route.params.category_name;
        this.getTasks();
    },
    components:{
        
        VueCustomTooltip
    },
    props: {},
    data() {
        return {
            category_id: null,
            category_name: null,
            tasks: [],
            priority: ["low.svg", "medium.svg", "high.svg"],
            date: moment(60 * 10 * 1000),
            showInfo: true,
            hasScroll: true,
            inProgress: [],
            open: [],
            completed: []
        };
    },
    methods: {
        wheelHorizontal: function(e) {
            if (e.deltaY < 0) {
                this.$refs.table.scrollLeft = this.$refs.table.scrollLeft - 50;
            } else {
                this.$refs.table.scrollLeft = this.$refs.table.scrollLeft + 50;
            }
        },
        scrollHorizontal: function(e) {
            if (this.$refs.table.scrollLeft > 0) {
                this.showInfo = false;
            }
            if (this.$refs.table.scrollLeft == 0) {
                this.showInfo = true;
            }
        },
        getPhotoFromName(fullName) {
            var names = fullName.split(" ");
            var letters = "";
            for (var i = 0; i < names.length; i++) {
                letters += names[i][0];
            }
            return letters;
        },
        async getTasks() {
            let response = await Service.Get(
                "project/tasks/" +
                    this.$parent.global_project_id +
                    "/" +
                    this.category_id
            );
            if (response.data.success) {
                this.tasks = response.data.tasks;
                this.splitTasks(this.tasks);
                this.updateDifference();
            }
        },
        splitTasks(tasks) {
            this.inProgress = [];
            this.open = [];
            this.completed = [];

            tasks.forEach(task => {
                if (task.status == 1) {
                    this.inProgress.push(task);
                } else if (task.status == 2) {
                    this.open.push(task);
                } else {
                    this.completed.push(task);
                }
            });
            console.log(this.inProgress, this.open);
        },
        updateDifference() {
            this.tasks.forEach(task => {
                if (task.status == 2) {
                    var now = new Date();
                    var difference = Math.abs(
                        now.getTime() +
                            now.getTimezoneOffset() * 60000 -
                            new Date(task.pause_at.replace(/-/g, "/"))
                    );
                    // console.log(difference)
                    // console.log(
                    //     now.getTime() + now.getTimezoneOffset() * 60000
                    // );
                    // console.log(new Date(task.pause_at.replace(/-/g, "/")));
                    var minutes = Math.floor(difference / 1000 / 60);
                    task.seconds = this.n(parseInt((difference / 1000) % 60));
                    task.hours = this.n(parseInt(minutes / 60));
                    task.minutes = this.n(minutes % 60);
                    var taskName = task.name;
                    task.name = task.name + ".";
                    task.name = task.name + "..";
                    task.name = taskName;
                }
            });
        },
        n(n) {
            return n > 9 ? "" + n : "0" + n;
        }
    },
    computed: {
        time: function() {
            return this.date.format("hh:mm:ss");
        }
    },
    mounted: function() {
        setInterval(() => {
            this.updateDifference();
        }, 1000);
    },
    watch: {
        $route(newParam, old) {
            this.category_id = newParam.params.category_id;
            this.category_name = newParam.params.category_name;
            this.getTasks();
        }
    }
};
</script>

<style scoped>
.text-muted {
    color: #fff;
}

.progress {
    width: 100px;
}

.container {
    width: 45px;
    height: 45px;
    border-radius: 45px;
    background: #333;
}
.name {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 18px;
    line-height: 45px;
}

.table-holder,
.table-responsive {
    position: relative;
}

.table-responsive::-webkit-scrollbar {
    height: 10px;
}

.table-responsive::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #333333;
    -webkit-box-shadow: inset 0 0 6px #333333;
}

.table-responsive::-webkit-scrollbar-thumb {
    background: #333333;
    outline: 1px solid #333333;
}

.info {
    position: absolute;
    width: 200px;
    height: 100%;
    /* background: linear-gradient(to right, transparent, #ffffff); */
    top: 0;
    right: 0;
    padding: 20px;
    text-align: right;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: opacity 300ms ease-in-out, visibility 300ms ease-in-out;
    opacity: 0;
    visibility: hidden;
    z-index: 1;
    pointer-events: none;
}

.show {
    opacity: 1;
    visibility: visible;
}
tr th,
tr td {
    min-width: 50px;
    left: 0;
    background: rgba(37, 36, 36, 0.8);
}

.progress-paused {
    background: transparent !important;
    border: 1px solid #991c1c;
}
.progress-running {
    background: transparent !important;
    border: 1px solid #1c9922;
}

.table td:nth-child(1) {
    padding-right: 10px;
    max-width: 200px;
    text-align: left;
    white-space: normal;
    /* line-height: 1.2rem; */
}
.table td {
    padding: 10px 0px 10px 25px;
    text-align: center;
}
tr th {
    background: transparent !important;
    text-align: center !important;
    font-size: 15px;
    padding-bottom: 10px;
}
thead {
    border-top: none !important;
}

.bg-dark {
    background-color: #5e6064 !important;
}

.box {
    width: 12px;
    height: 12px;
    background-color: #ff6400;
}
.table-holder {
    margin-bottom: 50px;
}

.list-group .list-group-item {
    background-color: transparent;
    color: #fff;
}

.list-group.bottom-list {
    flex-direction: row;
}

tr td:first-child {
    position: sticky;
    min-width: 50px;
    left: 0;
    background: rgba(37, 36, 36, 0.9) !important;
}
tr th:first-child {
    position: sticky;
    min-width: 50px;
    left: 0;
    background: rgb(45, 45, 45, 0.9) !important;
}

.table thead th {
    padding-top: 10px;
    padding-bottom: 10px !important;
}
</style>
