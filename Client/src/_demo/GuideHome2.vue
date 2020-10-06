<template>
  <div id="app">
    
    <div>
     <div class="col-1" style="padding-left:5px">
    <b-dropdown variant="info" id="dropdown-offset" offset="25" text="Select Project" class="m-2 ">
    <b-dropdown-item href="/GuideHome2">Project1</b-dropdown-item>
    <b-dropdown-item href="/GuideHome22">Project2</b-dropdown-item>
    </b-dropdown>
     </div>   
     <b-alert show variant="primary"><a class="alert-link"><strong><i class="fa fa-warning"></i> Notification</strong> <marquee><p>First FTR is sceduled on 30/10/2020.<h7 v-b-modal.modal-center5> Fill FTR</h7> </p></marquee></a></b-alert>
 <div>
         <div class="float-right " style="padding-right:10px"> <b-button variant="primary" class="btn " margin="5px" @click="showModal">Add New Task</b-button>
        
         </div>



        
     </div>
     <div> <form v-on:submit.prevent="addNewTask">
            <b-modal ref="my-modal" hide-footer title="Add New Task">
     
            <div class="col-xs-6">
              <label for="ex3">Task:</label>
              <b-form-textarea id="textarea-small" v-model="taskname" margin="2" size="sm"></b-form-textarea>
              </div>
             <div>
                <label for="allotedToinput">Allot To :</label>
                <b-form-input v-model="selected2" id ="allotedToinput" class="from-control" placeholder="Add student" required></b-form-input> 

                <!-- <div class="mt-2">Selected: <strong>{{ selected2 }}</strong></div> -->
              </div>
              <div>
                  <label for="example-datepicker">Due Date</label>
                  <b-form-datepicker id="example-datepicker" v-model="valueDate" class="mb-1"></b-form-datepicker>
                  
              </div>
              
                    <b-button type="submit" class="mt-2" variant="outline-success" block @click="newtask">Submit</b-button>
                    <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Cancel</b-button>
              </b-modal>
          </form>
     </div>
   <diV>   
          <b-modal id="modal-center5" centered title="FTR Form">
             
            <div class="col-lg-12">
              <label>Date:30/10/2020</label>
              <label for="ex3"><a href="/ProjectDescription">ProjectID:#2020-123</a></label>
              <label for="ex3">ProjectTitle:BloodBank Management</label>
              
            </div>
             <div>
                
                <table class="table2">
                    <tr>
                      
                      <td></td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr> 
                    <tr>
                      <td>1.	Project Title & Problem statement clarifies purpose of the project and no mention about Solution/Technology</td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>
                    <tr>
                      <td>2.	SRS document contain detailed functional and technical scope of the project</td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>3.	Is deployment diagram prepared </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>4.	Is literature survey file/log report  maintained </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>5.	High level milestones defined for project deliverables </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>6.	All project deliverables (SRS, Design diagrams, Source code files) are in version control system</td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                  </table>
             
              </div>
               <label>Remarks:</label>
              <b-form-textarea id="textarea-small" margin="2" size="sm"></b-form-textarea>
            <div class="col-lg-12">
              <label>Name of Guide:Kolhekar Sir</label>
              <label>Date:</label>
            </div>  

          </b-modal>
        </div>

    <TabNav :tabs="['TASK ', 'SUBMITTED TASK', 'COMPLETED TASK']" :selected="selected" @selected="setSelected" >
      <Tab :isSelected="selected === 'TASK '" >
          <table class="table table-striped">
                                   <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>Task</th>
                                            <th>Alloted To</th>
                                            <th>Due Date</th>
                                            <th></th>
                                          
                                        </tr>
                                    </thead>
                                <tbody>
             
            <tr v-for="(todo,index) in todos" v-bind:key="todo.taskname">
                   
               <td class="text-center">{{ ++index }}</td> 
              <td class="text-center">{{todo.taskname}}</td>
              <td class="text-center">{{todo.allotedTo}}</td>
              <td class="text-center">{{todo.DueDate}}</td>
              <td class="text-center">
              
              </td>
            </tr>
        </tbody>
                                                     
                                  </table> 
      </Tab>
      <Tab :isSelected="selected === 'SUBMITTED TASK'" >
        <table class="table table-striped">
                                   <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>Task</th>
                                            <th>StudentName</th>
                                            <th>DueDate</th>
                                            <th>Task Details</th>
                                            <th>Challenges</th>
                                            <th></th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
             
            <tr v-for="(request,index) in requests" v-bind:key="request.taskname">
                   
               <td class="text-center">{{ ++index }}</td> 
              <td class="text-center">{{request.Task}}</td>
              <td class="text-center">{{request.StudentName}}</td>
              <td class="text-center">{{request.DueDate}}</td>
                <td class="text-center">{{request.TaskDetails}}</td>
                  <td class="text-center">{{request.Challenges}}</td>
              <td class="text-center">
              
              <button  class=" btn btn-success " @click="deleteTask(index,request.SN)">Approve</button>
              </td>
             <td> <button  class=" btn btn-danger " @click="redoTask(index,request.SN)">Rejected</button>
              </td>
            </tr>
        </tbody>
                                                     
                                  </table> 
      </Tab>
      <Tab :isSelected="selected === 'COMPLETED TASK'" >
         <table class="table table-striped">
                                   <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>Task</th>
                                            <th>Start Date</th>
                                            <th>Approve Date</th>
                                            <th colspan="2">Status</th>
                                          
                                        </tr>
                                    </thead>
                                   <tbody>
            <tr v-for="(done,index) in dones" v-bind:key="done.Task">
              <td class="text-center">{{ ++index }}</td>
              <td class="text-center">{{done.Task}}</td>
              <td class="text-center">{{done.StartDate}}</td>
              <td class="text-center">{{done.ApprovedDate}}</td>     
               <td class="text-center">{{done.Status}}</td>                                  
                 
                                            
            </tr>
          </tbody>
                     </table> 
      </Tab>
    </TabNav>
  </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
import { data, todo } from './dataSource'
import { request } from './dataSource'
import { done } from './dataSource'
import { doing } from './dataSource'
import TabNav from './TabNav';
import Tab from './Tab';
export default {
  name: 'App',
  components: { TabNav, Tab },
  data() {
    return {
      selected: 'TASK ',
        valueDate: '',
        status:0,
       selected2: null,
       taskname:'',
       todos:[],
       doings:[],
       dones:[],
       requests:[],
       def:'',
       i:3,
       j:1,
       indexs:0,
       current_date:new Date().toJSON().slice(0,10)
    }
  },
  mounted() {
    this.getTasks()
    this.getSubmits()
    this.getDones()
    this.getDoings()
    },
  methods: {
      makeShow(){
        this.show = !this.show;
      },
      getTasks() {
        axios.get('http://localhost:3000/api/tasks').then(
          result => {
            console.log(result.data)
            this.todos = result.data
          },
          error => {
            console.error(error)
          }
        )
    },
     getSubmits() {
        axios.get('http://localhost:3000/api/submits').then(
          result => {
            console.log(result.data)
            this.requests = result.data
          },
          error => {
            console.error(error)
          }
        )
    },
      getDones() {
        axios.get('http://localhost:3000/api/dones').then(
          result => {
            console.log(result.data)
            this.dones = result.data
          },
          error => {
            console.error(error)
          }
        )
    },
     getDoings() {
        axios.get('http://localhost:3000/api/dones').then(
          result => {
            console.log(result.data)
            this.doings = result.data
          },
          error => {
            console.error(error)
          }
        )
    },
       newtask() {
       axios.post('http://localhost:3000/api/task',
          { 
          taskname: this.taskname,
          allotedTo : this.selected2,
          DueDate : this.valueDate
          }
        ).then((res) => {
          this.taskname = ''
          this.selected2 = ''
          this.valueDate = ''
          this.getTasks()
          this.hideModal()
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      },
    setSelected(tab) {
      this.selected = tab;
    },
    showModal() {
        this.$refs['my-modal'].show()
      },
    showModal1() {
        this.$refs['my-modal1'].show()
      },
       hideModal1() {
        this.$refs['my-modal1'].hide()
      },
      hideModal()
      {
           this.taskname='',
           this.valueDate='',
           this.selected2='',
        this.$refs['my-modal'].hide()
      },
      deleteTask(index,SN)
      {
       axios.post('http://localhost:3000/api/done',
          { 
          Task:this.requests[index-1].Task,
          //allotedTo:this.todos[index-1].allotedTo,
          StartDate:this.requests[index-1].StartDate,
          ApprovedDate:this.current_date,
          Status:this.status
         // DueDate:this.todos[index-1].DueDate,
          //allotedTo:this.todos[index-1].allotedTo,
          }
        ).then((res) => {
          this.getDones()
          this.hideModal()
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      
        axios.delete(`http://localhost:3000/api/submit/${SN}`)
        .then((res) => {
          console.log(res)
          this.taskname=''
          this.valueDate=''
          this.allotedTo=''
          this.getSubmits()
        }).catch((err) => {
            console.log(err)
        })
      },
      redoTask(index,SN)
      {
       // this.status++
        axios.post('http://localhost:3000/api/doing',
          { 
          Task:this.requests[index-1].Task,
          //allotedTo:this.todos[index-1].allotedTo,
          DueDate:this.requests[index-1].DueDate,
          StartDate:this.current_date,
          allotedTo:this.requests[index-1].allotedTo,
        //  Status:this.status++
         // DueDate:this.todos[index-1].DueDate,
          //allotedTo:this.todos[index-1].allotedTo,
          }
        ).then((res) => {
          this.status++
          this.getDoings()
          this.hideModal()
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      
        axios.delete(`http://localhost:3000/api/submit/${SN}`)
        .then((res) => {
          console.log(res)
          this.taskname=''
          this.valueDate=''
          this.allotedTo=''
          this.getSubmits()
        }).catch((err) => {
            console.log(err)
        })
      }


       /* this.dones.push({
          sr:this.j,
          taskname:this.requests[index-1].taskname,
          start_date:this.doings[index-1].start_date,
          ap_date:this.current_date,
          rejected:0,
          }),
        this.requests.splice((index-1),1)
        this.doings.splice((this.index-1),1)
        */
      }
  }

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
</style>