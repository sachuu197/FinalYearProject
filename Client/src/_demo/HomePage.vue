<template>
  <div id="app">
    <div>
   <div>   
     <b-alert show variant="primary"><a class="alert-link"><strong><i class="fa fa-warning"></i> Notification</strong> <marquee><p>First FTR is sceduled on 30/10/2020.<h7 v-b-modal.modal-center5> Fill FTR</h7></p></marquee></a></b-alert>
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
          <!-- ftr1 form end -->
          <!-- ftr2 form start -->
        <div>
         
          <b-modal id="modal-center6" centered title="FTR Form">
             
            <div class="col-lg-12">
              <label>Date:25/10/2020</label>
              <label for="ex3">ProjectID:#2020-123</label>
              <label for="ex3">ProjectTitle:BloodBank Management</label>
              
            </div>
            <label>Comments on the previous review report:</label>
              <b-form-textarea id="textarea-small" margin="2" size="sm"></b-form-textarea>
             <div>
                
                <table class="table2">
                    <tr>
                      
                      <td></td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr> 
                    <tr>
                      <td>1.	SRS in IEEE format prepared  </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>
                    <tr>
                      <td>2.	All implicit and explicit assumptions are documented </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>3.	Log Report  is up to date </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                  </table>
             
              </div>
               <label>Remarks:</label>
              <b-form-textarea id="textarea-small" margin="2" size="sm"></b-form-textarea>
            <div class="col-lg-12">
               <label>Internal Guide</label>
              <label>Name of Guide:Kolhekar Sir</label>
              <label>Date:</label>
              <label>Remarks:</label>
              <b-form-textarea id="textarea-small" margin="2" size="sm"></b-form-textarea>
            </div>  

          </b-modal>
        </div>
          <!-- ftr2 form end -->
               <!-- ftr3 form start -->
       <div>
         
         <b-modal id="modal-center7" centered title="FTR Form">
             
            <div class="col-lg-12">
              <label>Date:25/10/2020</label>
              <label for="ex3">ProjectID:#2020-123</label>
              <label for="ex3">ProjectTitle:BloodBank Management</label>
              
            </div>
            <label>Comments on the previous review report:</label>
              <b-form-textarea id="textarea-small" margin="2" size="sm"></b-form-textarea>
             <div>
                
                <table class="table2">
                    <tr>
                      
                      <td></td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr> 
                    <tr>
                      <td>1.	Is Deployment Diagram elaborated for all project components:  </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>
                    <tr>
                      <td>2.	Is mathematical modeling done  </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>3.	Cost and Effort estimation done </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>4.	Use Case Diagrams Prepared   </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>
                    <tr>
                      <td>5.	Data flow diagrams prepared   </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>6.	Activity Diagrams prepared  </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>7.	Test criteria for key usecases prepared  </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>
                    <tr>
                      <td>8.	Log Report  is up to date </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>9.	Is Conference paper published and its status(published or accepted)? </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>10.	Are 3 assignments done?</td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    
                  </table>
             
              </div>
               <label>Remarks:</label>
              <b-form-textarea id="textarea-small" margin="2" size="sm"></b-form-textarea>
            <div class="col-lg-12">
               <label>Internal Guide</label>
              <label>Name of Guide:Kolhekar Sir</label>
              <label>Date:</label>
              
            </div>  

          </b-modal>
        </div>
          <!-- ftr3 form end -->
               <!-- ftr4 form start -->
       <div>
         
          <b-modal id="modal-center8" centered title="FTR Form">
             
            <div class="col-lg-12">
              <label>Date:25/10/2020</label>
              <label for="ex3">ProjectID:#2020-123</label>
              <label for="ex3">ProjectTitle:BloodBank Management</label>
              
            </div>
            <label>Comments on the previous review report:</label>
              <b-form-textarea id="textarea-small" margin="2" size="sm"></b-form-textarea>
             <div>
                
                <table class="table2">
                    <tr>
                      
                      <td></td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr> 
                    <tr>
                      <td> 1.	Is selection of current technology, programming Language, tools for project implementation is discussed and presented?</td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>
                    <tr>
                      <td>2.	Is Cyclomatic Complexity of function/module/overall project calculated? Is sample code of Modules designed   </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>3.	Is project implementation as per Design diagrams (Sequence/Class diagram and Deployment view)? </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr> 
                     <tr>
                      <td>4.	Is input output table prepared?( Results in the form of Table/Graph, images etc?  </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>
                    <tr>
                      <td>5.	Are unit test cases created and executed & test log files are available? </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>6.	Conference/Journal  paper status for Sem-II </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                  </table>
             
              </div>
               <label>Remarks:</label>
              <b-form-textarea id="textarea-small" margin="2" size="sm"></b-form-textarea>
            <div class="col-lg-12">
               <label>Internal Guide</label>
              <label>Name of Guide:Kolhekar Sir</label>
              <label>External Guide</label>
              <label>Name of Guide:Kolhekar Sir</label>
              
              <label>Remarks:</label>
              <b-form-textarea id="textarea-small" margin="2" size="sm"></b-form-textarea>
            </div>  

          </b-modal>
        </div>
          <!-- ftr4 form end -->
             <!-- ftr5 form start -->
       <div>
         
          <b-modal id="modal-center9" centered title="FTR Form">
             
            <div class="col-lg-12">
              <label>Date:25/10/2020</label>
              <label for="ex3">ProjectID:#2020-123</label>
              <label for="ex3">ProjectTitle:BloodBank Management</label>
              
            </div>
             <label>Comments on previous review report and necessary actions taken </label>
              <b-form-textarea id="textarea-small" margin="2" size="sm"></b-form-textarea>
             <div>
                
                <table class="table2">
                    <tr>
                      
                      <td></td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr> 
                    <tr>
                      <td>1.	Is result of implemented modules  meets the actual problem statement</td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>
                    <tr>
                      <td>2.	Have the modules implemented as per functional and non functional requirement </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>3.	Are  the implemented modules tested using specific testing tools </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>4.	Have the implemented modules critically analyzed? </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>5.	No of modules planned and implemented   </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>6.	Is Termwork  file  maintained? </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                  </table>
             
              </div>
            
              
            <div class="col-lg-12">
              <label>Name of Guide:Kolhekar Sir</label>
              
            </div>  

          </b-modal>
        </div>
          <!-- ftr5 form end -->
             <!-- ftr6 form start -->
       <div>
         
         <b-modal id="modal-center10" centered title="FTR Form">
             
            <div class="col-lg-12">
              <label>Date:25/10/2020</label>
              <label for="ex3">ProjectID:#2020-123</label>
              <label for="ex3">ProjectTitle:BloodBank Management</label>
              
            </div>
             <label>Comments on previous review report and necessary actions taken </label>
              <b-form-textarea id="textarea-small" margin="2" size="sm"></b-form-textarea>
             <div>
                
                <table class="table2">
                    <tr>
                      
                      <td></td>
                      <td>Yes</td>
                      <td>No</td>
                    </tr> 
                    <tr>
                      <td>1.	Are project’s implicit and explicit assumptions maps with the deliverables </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>
                    <tr>
                      <td>2.	Is Human Computer Interaction(GUI) and Design appropriate? </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>3.	Is Coding standards applied / Static code analysis done?  </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>
                    <tr>
                      <td>4.	Are the modules technically understood?  </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>5.	Are  the implemented modules tested well?  </td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                    <tr>
                      <td>6.	No of modules planned and implemented (e.g 4/5)</td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr> 
                    <tr>
                      <td>7.	Is Term workfile  maintained?</td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                      <td><b-form-checkbox size="md"></b-form-checkbox></td>
                    </tr>  
                  </table>
             
              </div>
              <!--   <label>7.	Paper  presentation status:</label>
                <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
               <label>Remarks:</label>
               <b-form-input v-model="text" placeholder="Excellent/Good/Average/Below Average/Not Satisfactory"></b-form-input> -->
              
            <div class="col-lg-12">
              <label>Name of Guide:Kolhekar Sir</label>
              
            </div>  

          </b-modal>

        </div>
          <!-- ftr6 form end -->
     
    <!-- /////////////////////////////////////////////////////////////////////FTR forms end -->
    <!-- ////////////////////////////////////////////////////////add new task button nd modal start -->
     <div>
        <div class="float-right " style="padding-right:10px"> <b-button id="show-btn" @click="showModal">Add New Task</b-button></div>
          <form v-on:submit.prevent="addNewTask">
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
        <!--///////////////////////////////////////////////////////////////////////////add new task button nd modal end  -->
    <TabNav :tabs="['TO DO', 'DOING', 'DONE']" :selected="selected" @selected="setSelected" >
      <Tab :isSelected="selected === 'TO DO'" >
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
             
            <tr v-for="(todo,index) in todos" v-bind:key="todo.SN">
                   
              <!-- <td class="text-center">{{ ++index }}</td> --> 
               <td class="text-center">{{ ++index }}</td> 
              <td class="text-center">{{todo.taskname}}</td>
              <td class="text-center">{{todo.allotedTo}}</td>
              <td class="text-center">{{todo.DueDate}}</td>
              <td class="text-center">
              
              <button  class=" btn btn-danger " @click="deleteTask(todo.SN,index)">Select</button>
              </td>
            </tr>
        </tbody>
     </table>
      </Tab>
      <Tab :isSelected="selected === 'DOING'" >
        <table class="table table-striped">
                                   <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>Task</th>
                                            <th>Start Date</th>
                                            <th>Due Date</th>
                                            <th>Action</th>
                                            <th></th>
                                          
                                        </tr>
                                    </thead>
                                   
                                    <div>
                 
                         <b-modal ref="my-modal1" hide-footer title="Task Name">
                                           
                                <div class="col-xs-6">
                                     <label for="ex3">Description:</label>
                                     <b-form-textarea name="des" id="txt11" size="sm" v-model="description" placeholder="How did u do? What approach?">
                                     </b-form-textarea>
                                       </div>
                                      <b-form-checkbox id="chek" size="md" value="true" unchecked-value="false">Difficulties faced?</b-form-checkbox>
                                         <div class="col-xs-6">
                                                     
                                            <input class="form-control" id="ex3" name="dif" type="text" v-model="difficulties" placeholder="Mention difficulties faced">
                                          </div>
                                                     
                                      <b-button class="mt-2" variant="outline-success" block @click="addtask">Submit</b-button>
                                            
                                    <b-button class="mt-3" variant="outline-danger" block @click="hideModal1">Cancel</b-button>
                                            </b-modal>
                  </div>             
            <tbody>
            <tr v-for="(doing,index) in doings" v-bind:key="doing.Task">
                 <td class="text-center">{{++index}}</td>
              <td class="text-center">{{doing.Task}}</td>
              <td class="text-center">{{doing.StartDate}}</td>
              <td class="text-center">{{doing.DueDate}}</td>
              <td class="text-center">  <b-button id="show-btn" @click="showModal1(index,doing.SN)">Add Details</b-button> </td>                                       
                 
                                            
            </tr>
          </tbody>
           </table>
      </Tab>
      <Tab :isSelected="selected === 'DONE'" >
         <table class="table table-striped">
                                   <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>Task</th>
                                            <th>Start Date</th>
                                            <th>Approve Date</th>
                                            <th>Status</th>
                                          
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
//import { data, todo } from './dataSource'
//import { doing } from './dataSource'
//import { done } from './dataSource'
//import { request } from './dataSource'
import TabNav from './TabNav';
import Tab from './Tab';
//import { delete } from 'vue/types/umd'
export default {
  name: 'App',
  components: { TabNav, Tab },
  data() {
    return {
      selected: 'TO DO',
       valueDate: '',
       selected2: null,
       taskname:'',
       todos:[],
       doings:[],
       imp:'',
       dones:[],
       status:0,
       requests:[],
        difficulties:'',
        description:'',
       def:'',
       i:3,
       j:1,
       indexs:0,
       current_date:new Date().toJSON().slice(0,10)
    }
  },
    mounted() {
    this.getTasks()
    this.getDoings()
    this.getSubmits()
     this.getDones()
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
    getDoings() {
        axios.get('http://localhost:3000/api/doings').then(
          result => {
            console.log(result.data)
            this.doings = result.data
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
       showModal1(index,SN) {
        this.$refs['my-modal1'].show()
        this.indexs=index
        this.imp = SN
      },
      hideModal()
      {
           this.taskname='',
           this.valueDate='',
           this.selected2='',
        this.$refs['my-modal'].hide()
      },
      hideModal1()
      {
       this.$refs['my-modal1'].hide()
      },
      deleteTask(SN,index)
      {
        console.log(SN);
        //console.log(this.doings);
       axios.post('http://localhost:3000/api/doing',
          { 
          Task:this.todos[index-1].taskname,
          allotedTo:this.todos[index-1].allotedTo,
          StartDate:this.current_date,
          DueDate:this.todos[index-1].DueDate,
         // Status:this.status
          //allotedTo:this.todos[index-1].allotedTo,
          }
        ).then((res) => {
          this.getDoings()
          this.hideModal()
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      
        axios.delete(`http://localhost:3000/api/task/${SN}`)
        .then((res) => {
          console.log(res)
          this.taskname=''
          this.valueDate=''
          this.allotedTo=''
          this.getTasks()
        }).catch((err) => {
            console.log(err)
        })
      },
     //   this.todos.splice((index-1),1)
      addtask(){     
                  console.log(this.chek)
                  if (this.chek === 'false') {
                        this.requests.challeng="NA"
                      }   

                  axios.post('http://localhost:3000/api/submit',
                      {
                       // SN:this.doings[this.indexs-1].SN, 
                      Task:this.doings[this.indexs-1].Task,
                      StudentName:this.doings[this.indexs-1].allotedTo,
                      DueDate:this.doings[this.indexs-1].DueDate,
                      TaskDetails:this.description,
                      Challenges:this.difficulties,
                      StartDate:this.doings[this.indexs-1].StartDate,
                    //  Status:this.doings[this.indexs-1].Status
                      }
                    ).then((res) => {
                      this.description ='',
                      this.difficulties=''
                      chek.value=null

                      //alert("Yup!")
                      this.getSubmits()
                      this.hideModal1()
                      console.log(res)
                    }).catch((err) => {
                      console.log(err)
                    })

              axios.delete(`http://localhost:3000/api/doing/${this.imp}`)
                    .then((res) => {
                      console.log(res)
                      this.taskname=''
                      this.valueDate=''
                      this.allotedTo=''
                      this.getDoings()
                    }).catch((err) => {
                        console.log(err)
                    })
    }
        /*this.requests.push({
          sr:this.i++,
          taskname:this.doings[this.indexs-1].taskname,
          allotedTo:this.doings[this.indexs-1].allotedTo,
          due_date:this.doings[this.indexs-1].start_date,
          ap_date:this.doings[this.indexs-1].due_date,
          taskde:txt11.value,
          challeng:ex3.value
          
        })
        ex3.value='',
        txt11.value='',
        chek.value=null
        this.hideModal1()
      }*/
    
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
  <!-- newtask() {
                              
                              todo.push(
                                {
                                  sr:this.i++,
                                  taskname:this.taskname,
                                  due_date:this.valueDate,
                                  allotedTo:this.selected2,
                                  //show:false
                                  }
                                  ),
                                  this.taskname='',
                                  this.valueDate='',
                                  this.selected2='',
                                  this.hideModal()
                            }
                                -->