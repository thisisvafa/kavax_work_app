<template>
    <div
        class="modal fade"
        id="newProject"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header  text-center">
                    <h5 class="text-center">
                        Please select one or multiple types of projects
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
                <form class="pt-3" @submit.prevent="submit">
                    <div class="modal-body">
                        <div class="p-1">
                            <div class="col-md-12 text-center categories">
                                <ul
                                    class="list-group list-group-horizontal list-inline "
                                >
                                    <li
                                        v-for="cate in categories"
                                        :key="cate.id"
                                    >
                                        <input
                                            type="checkbox"
                                            :id="cate.image"
                                            v-model="category"
                                            :value="cate.id"
                                        />
                                        <label :for="cate.image"
                                            ><img
                                                :src="
                                                    '/images/' +
                                                        cate.image +
                                                        '.svg'
                                                "
                                            />
                                            <h6>{{ cate.name }}</h6>
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            <small
                                class="text-danger ml-3 mb-4 mt-4"
                                v-show="selectCategory"
                                >Please select a project category</small
                            >
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        placeholder="Name of project / URL if applicable?"
                                        v-model="project_name"
                                    />
                                    <small
                                class="text-danger  mb-4 mt-4"
                                v-show="projectNameError"
                                >Please insert project name</small
                            >
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        placeholder="What is the primary business objective/goal for the project?"
                                        v-model="objective"
                                    />
                                </div>
                                <div class="form-group input-symbol-euro">
                                    
                                    <input
                                        type="number"
                                        placeholder="Budget"
                                        class="form-control form-control-lg"
                                        v-model="budget"
                                        id="budget"
                                    />
                                    
                                    <small
                                        >Essentially digital projects vary
                                        massively in their complexity - Your
                                        budget will help us decide on the right
                                        solution for your project.</small
                                    >
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        placeholder="What is the name of your business?"
                                        v-model="business_name"
                                    />
                                     <small
                                class="text-danger  mb-4 mt-4"
                                v-show="businessNameError"
                                >Please insert business name</small
                            >
                                </div>
                                <div class="form-group">
                                    <input
                                        type="text"
                                        class="form-control form-control-lg"
                                        placeholder="How many employees work for your business?"
                                        v-model="employee_size"
                                    />
                                </div>
                                <div class="text-center">
                                    <button
                                        type="submit"
                                        class="btn btn-outline-light btn-icon-text px-5 py-1"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from "../../services/user/user.service";
export default {
    created() {
        this.getCategories();
    },
    props: {
        projects: Array
    },
    data() {
        return {
            categories: [],
            category: [],
            project_name: null,
            objective: null,
            budget: null,
            business_name: null,
            employee_size: null,
            selectCategory: false,
            businessNameError:false,
            projectNameError: false
        };
    },
    methods: {
        async submit() {

            if (this.category.length == 0) {
                this.selectCategory = true
                return
            }else{
                this.selectCategory = false
            }
            if(!this.project_name){
                this.projectNameError = true
                return
            }else{
                this.projectNameError = false
            }

            if(!this.business_name){
                this.businessNameError = true
                return 
            }else{
                this.businessNameError = false
            }
            
                this.selectCategory = false;
                var data = {
                    category: JSON.stringify(this.category),
                    name: this.business_name,
                    objective: this.objective,
                    project_name: this.project_name,
                    employee_size: this.employee_size,
                    budget: this.budget
                };

                let response = await UserService.Post("project/create", data);

                this.projects.push(response.data.project);

                $("#newProject").modal("hide");
            
        },
        async getCategories() {
            let response = await UserService.Get("project/categories");
            this.categories = response.data.categories;
            // console.log(response);
        }
    }
};
</script>

<style scoped>
ul {
    list-style-type: none;
}

li {
    display: inline-block;
    text-align: center;
    width: 180px;
}

input[type="checkbox"] {
    display: none;
}

label {
    padding: 10px;
    display: block;
    position: relative;
    margin: 10px;
    cursor: pointer;
    background-color: #2d2d2d;
    min-height: 105px;
}

label:before {
    background-color: white;
    color: white;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    top: -5px;
    left: -5px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 28px;
    transition-duration: 0.4s;
    transform: scale(0);
}

label img {
    height: 24px;
    width: 24px;
    margin-bottom: 20px;
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
}

:checked + label {
    border: 1px solid #e29826;
    color: #e29826;
}

/* :checked + label:before {
    content: "✓";
    background-color: grey;
    transform: scale(1);
    border: 1px solid rgb(245, 229, 15);
} */

:checked + label img {
    transform: scale(0.9);
    box-shadow: 0 0 5px #333;
    z-index: -1;
}

.bg-dark {
    background-color: #1d1d1d;
}
.form-control {
    border: 1px solid #74726f;
    color: #fff;
}

.dark-theme .btn-outline-light {
    color: #fff;
}
.dark-theme .btn-outline-light:hover {
    color: #e29826;
    border-color: #e29826;
    background: none;
}

.bg-transparent {
    background-color: transparent;
}
.close {
    padding: 1rem 0rem 0.5rem;
    margin: -75px -26px -25px auto;
    color: #fff;
    font-size: 25px;
}

@media (min-width: 576px) {
    .modal-dialog {
        max-width: 800px;
        margin: 30px auto;
    }
    .modal-dialog-scrollable {
        max-height: calc(100% - 60px);
    }
    .modal-dialog-scrollable .modal-content {
        max-height: calc(100vh - 60px);
    }
    .modal-dialog-centered {
        min-height: calc(100% - 60px);
    }
    .modal-dialog-centered::before {
        height: calc(100vh - 60px);
    }
    .modal-sm {
        max-width: 300px;
    }
}
.dark-theme .modal .modal-dialog .modal-content {
background: #1d1d1d;
border: 1px solid #111115;
}
input:focus {
    border: 1px solid #e29826;
}

small {
    font-size: 60%;
}

.categories {
    overflow-x: auto;
}

 .input-symbol-euro {
        position: relative;
    }

    .input-symbol-euro input {
        padding-left: 28px;
    }

    .input-symbol-euro:before {
        position: absolute;
        top: 10px;
        content: "£";
        left: 15px;
        padding-right: 15px;
        /* right: 15px; */
    }
</style>
