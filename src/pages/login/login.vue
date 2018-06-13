
<template>
    <div class="">
        <h2>This is login html.</h2>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="account" prop="account">
                <Input v-model="formValidate.account" placeholder="Enter your account"></Input>
            </FormItem>
            <FormItem label="password" prop="password">
                <Input type="password" v-model="formValidate.password" placeholder="Enter your password"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="toLogin('formValidate')">Signin</Button>
            </FormItem>
        </Form>
        <div class="">
            <input v-model="msg" />
        </div>
        <div class="">
            <div class="">{{ msg }}</div>
        </div>
        <div>
            <Button type="primary" @click="clickme()">点击我</Button>
        </div>
        <div>数据：{{ countnumber }}</div>
        <div>currentRoomAllMembers：{{ store.state.currentRoomAllMembers }}</div>
        <div class="box">
            <div class="left"></div>
            <div class="center"></div>
            <div class="right"></div>
        </div>
    </div>

</template>

<style scoped lang="scss">
    .box{
        display: -webkit-box; /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: -moz-box; /* 老版本语法: Firefox (buggy) */
        display: -ms-flexbox; /* 混合版本语法: IE 10 */
        display: -webkit-flex; /* 新版本语法： Chrome 21+ */
        display: flex; /* 新版本语法： Opera 12.1, Firefox 22+ */
        height: 100px;
        width: 100%;
        background: #fe0000;
        /*垂直居中*/
        -webkit-box-align: center; /*老版本语法*/
        -moz-box-align: center; /*混合版本语法*/
        -ms-flex-align: center; /*新版本语法*/
        -webkit-align-items: center;
        align-items: center;
        /*水平居中*/
        -webkit-box-pack: center;/*!*老版本语法*!*/
        -moz-box-pack: center; /*!*混合版本语法*!*/
        -ms-flex-pack: center; /*!*新版本语法*!*/
        -webkit-justify-content: center;
        justify-content: center;
        div{

        }
        .left{
            height: 50px;
            width: 100px;
            background: #03ccbb;
        }
        .center{
            height: 30px;
            width: 200px;
            background: #0c63ee;
        }
        .right{
            height: 80px;
            width: 80px;
            background: #00ff00;
        }
    }
</style>

<script>
    import store from "../../store/store";

    export default{
        name: "login",
        data: function () {
            return {
                // countnumber: store.state.currentRoomAllMembers,
                formValidate: {
                    account: '',
                    password: ''
                },
                ruleValidate: {
                    account: [
                        { required: true, message: 'The account cannot be empty', trigger: 'blur' },
                        { message: 'Incorrect email format', trigger: 'blur' }
                        // { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Password cannot be empty', trigger: 'blur' },
                        { message: 'Incorrect password format', trigger: 'blur' }
                    ]
                },
                msg: ""
            }
        },
        mounted: function () {
            // console.log("this.config:", this.config);
            // console.log("this.state.state:", this.store.state);
        },
        computed: {
            countnumber: function() {
                return this.$store.state.currentRoomAllMembers;
            },
            message: {
                get () {
                    // return this.$store.state.obj.message
                },
                set (value) {
                    // this.$store.commit('updateMessage', value)
                }
            }
        },
        methods: {
            toLogin (name) {
                // store.commit("increment");
                // store.commit("setLoginData", this.formValidate);
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        this.$router.push({ path: "/home", query: { param: 666 }});
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            clickme (e) {
                // this.$store.commit('add');
                this.$store.dispatch("updateAllMember", '');
            }
        }
    }
</script>
