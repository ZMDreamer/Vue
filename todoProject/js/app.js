/*
 * @Author:  Dreamer 
 * @Date: 2018-08-01 21:21:51 
 * @Last Modified by:  Dreamer
 * @Last Modified time: 2018-08-01 22:19:31
 */
var vm = new Vue({
    el: '#app',

	data: {
        add_Data:'',
		users: [{
				id: 1,
				name: 'Jack',
				status: false
			},
			{
				id: 2,
				name: 'Kate',
				status: false
			},
			{
				id: 3,
				name: 'Jim',
				status: false
			}
		]
    },
    methods:{
        //添加功能函数
        addData(){
            var id = this.users.id + 1 || 1
            this.users.push({id:id,name:this.add_Data,status:false})
        },
        //删除数据
        deleteData(item){
            this.users.splice(this.users.indexOf(item),1);
        },
        //编辑数据
        editData(){
            console.log(1111)
        }
    }
})
