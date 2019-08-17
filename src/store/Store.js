import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: "",
        id: "",
        salary: "",
        age: "",
        getResponseSet: false,
        postResponseSet: false,
        postId: "",
        error: false
    },
    mutations: {
        setResponse(state, payload) {
            if (payload.method === "GET") {
                state.name = payload.name;
                state.id = payload.id;
                state.salary = payload.salary;
                state.age = payload.age;
                state.getResponseSet = true;
                state.postResponseSet = false;
                state.error = false;

                console.log('Executed', state)
            }
            else if (payload.method === "POST") {
                // state.postId = payload.;
                console.log("POST SUCCESS", payload);
                state.postResponseSet = true;
                state.getResponseSet = false;
                state.postId = payload.id;
                state.error = false;
            }
        },
        setPostAndGetResponseSetToFalseAndErrorToTrue(state) {
            state.postResponseSet = false;
            state.getResponseSet = false;
            state.error = true;
        }
    },
    actions: {
        sendGetRequest({ commit }, id) {
            axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
                .then((data) => {
                    console.log(data);
                    if (data.data) {
                        commit('setResponse', {
                            method: "GET",
                            name: data.data.employee_name,
                            id: data.data.id,
                            salary: data.data.employee_salary,
                            age: data.data.employee_age
                        });
                    }
                })
        },
        sendPostRequest({ commit }, payload) {
            axios.post('http://dummy.restapiexample.com/api/v1/create', payload)
                .then((data) => {
                    if (typeof(data.data)=== "object") {
                        commit('setResponse', {
                            ...data.data,
                            method: "POST"
                        });
                    }
                    else if(typeof(data.data)=== "string") {
                        commit('setPostAndGetResponseSetToFalseAndErrorToTrue');
                    }
                })
        }
    },
    getters: {
        name(state) {
            return state.name;
        },
        age(state) {
            return state.age;
        },
        salary(state) {
            return state.salary;
        },
        id(state) {
            return state.id
        },
        getResponseSet(state) {
            return state.getResponseSet;
        },
        postResponseSet(state) {
            return state.postResponseSet;
        },
        postId(state) {
            return state.postId
        },
        error(state) {
            return state.error;
        }
    }
});