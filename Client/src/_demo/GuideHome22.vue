<template>
  <div id="app">
   
    <div>
     <div class="col-1" style="padding-left:5px">
    <b-dropdown variant="info" id="dropdown-offset" offset="25" text="Select Project" class="m-2 ">
    <b-dropdown-item href="/GuideHome2">Project1</b-dropdown-item>
    <b-dropdown-item href="/GuideHome22">Project2</b-dropdown-item>
    </b-dropdown>
     </div> 
      <div>
     <b-alert show variant="primary"><a href="#" class="alert-link"><strong><i class="fa fa-warning"></i> Notification</strong> <marquee><p>Second FTR is sceduled on 30/10/2020. Be prepared with your prototypes</p></marquee></a></b-alert>
    </div>  
    
 <div>
        <div class="float-right " style="padding-right:10px"> <b-button class="btn btn-primary " margin="5px" v-b-modal.modal-center>Add New Task</b-button></div>

          <b-modal id="modal-center" centered title="Add Task">
            
            
            <div class="col-xs-6">
              <label for="ex3">Task:</label>
              <b-form-textarea id="textarea-small" margin="2" size="sm"></b-form-textarea>
              </div>
             <div>
                <b-form-select v-model="selected2" class="mb-3">
                  <b-form-select-option :value="null">Allot task to</b-form-select-option>
                  <b-form-select-option value="a">Student 1</b-form-select-option>
                  <b-form-select-option value="b">Student 2</b-form-select-option>
                  <b-form-select-option value="b">Student 3</b-form-select-option>
                  
                  
                </b-form-select>

                <!-- <div class="mt-2">Selected: <strong>{{ selected2 }}</strong></div> -->
              </div>
              <div>
                  <label for="example-datepicker">Due Date</label>
                  <b-form-datepicker id="example-datepicker" v-model="value" class="mb-1"></b-form-datepicker>
                  
              </div>

              
              
             
            
          </b-modal>
     </div>
    <TabNav :tabs="['TO DO', 'REQUEST', 'DONE']" :selected="selected" @selected="setSelected" >
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
                                      <tr>  
                                            <td>1</td>
                                            <td>Create Homepage</td>
                                            <td>Student 11</td>
                                            <td>2020/9/25</td>
                                           
                                            <td><button type="button" class="btn btn-primary">Select</button></td>
                                      </tr> 
                                      <tr>  
                                            <td>2</td>
                                            <td>Add styling</td>
                                            <td>Student 21</td>
                                            <td>2020/9/27</td>
                                            
                                            <td><button type="button" class="btn btn-primary">Select</button></td>
                                      </tr> 

                                    </tbody>
                                                     
                                  </table> 
      </Tab>
      <Tab :isSelected="selected === 'REQUEST'" >
        <table class="table table-striped">
                                   <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>Task</th>
                                            <th>Done By</th>
                                            <th>Due Date</th>
                                            <th>Task Details</th>
                                            <th>Challenges</th>
                                            <th></th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <tr>  
                                            <td>1</td>
                                            <td>Create Homepage</td>
                                            <td>Student 11</td>
                                            <td>2020/9/25</td>
                                            <td>I create the Page using side-bar and nav-bar components  </td>
                                            <td>How to add components to page  </td>
                                            <td><button type="button" class="btn btn-primary" style="width=1px">Approve</button></td> 
                                            <td><button type="button" class="btn btn-primary">Rejecte</button></td>
                                      </tr> 
                                      <tr>  
                                            <td>2</td>
                                            <td>Backend Connectivity</td>
                                            <td>Student 21</td>
                                            <td>2020/9/27</td>
                                            <td>I Add Style to Page using bootstrap-vue module</td>
                                            <td>NA</td>
                                            <td><button type="button" class="btn btn-primary">Approve</button></td> 
                                            <td><button type="button" class="btn btn-primary">Rejecte</button></td>
                                            
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
                                            <th colspan="2">Status</th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <tr>  
                                            <td>1</td>
                                            <td>Create Homepage</td>
                                            <td>Student 12</td>
                                            <td>2020/9/25</td>
                                            
                                            <td>Approved</td>
                                             <td>Times rejected:1</td>
                                      </tr> 
                                      <tr>  
                                            <td>2</td>
                                            <td>Backend Connectivity</td>
                                            <td>Student 22</td>
                                            <td>2020/9/27</td>
                                            
                                            <td>Approved</td>
                                             <td>Times rejected:2</td>
                                      </tr> 

                                    </tbody>
                                                     
                                  </table> 
      </Tab>
    </TabNav>
  </div>
  </div>
</template>
<script>
import TabNav from './TabNav';
import Tab from './Tab';
export default {
  name: 'App',
  components: { TabNav, Tab },
  data() {
    return {
      selected: 'TO DO'
    }
  },
  methods: {
    setSelected(tab) {
      this.selected = tab;
    }
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