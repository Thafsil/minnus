<template>
    <div class="side-menu-div" id="back-button">
        <ul class="text-center">
            <li class="menu-list" v-for="(item, index) in menu" :key="index" @click="selectMenu(item.name,index)" :class="{ active: isActive(item.name)}">
            {{item.name}}
            </li>
            <li class="menu-list">
                <p @click="closeMenu()">Back</p>
            </li>
        </ul>
    </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
    data(){
        return {
            menu : [
                {
                    name : "Dashboard",
                    id   : "1"
                },
                {
                    name : "Add Product",
                    id   : "2"
                }
            ],
            activeItem : "Dashboard"
        }
    },
    methods:{
        closeMenu(){
            document.getElementById("back-button").classList.add("close-menu");
        },
        selectMenu(name,i){
            this.activeItem = name;
            this.$emit('menu', name);
        },
        isActive(name){
            return this.activeItem === name;
        }
    }
}
</script>
<style scoped>
.side-menu-div {
    width: 15%;
    height: 100vh;
    background-color: #006699;
    transition: 1s;
    /* margin-top: -27px; */
}
.menu-list {
    color: #ffffff87;
    font-weight: bold;
    text-align: center;
    padding: 10%;
    list-style-type:none;
    cursor: pointer;
}
.active {
    color: white;
}
.close-menu {
    width: 8%;
}
</style>