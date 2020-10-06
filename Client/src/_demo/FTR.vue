<template>
<div>
  <div>
    <b-button id="show-btn" @click="showModal">Schedule FTR</b-button>
    <b-modal ref="my-modal" hide-footer title="Schedule FTR">
              <div>
                  <label for="example-datepicker"> Date</label>
                  <b-form-datepicker id="example-datepicker" v-model="value" class="mb-1"></b-form-datepicker>     
              </div>
              
      <b-button class="mt-2" variant="outline-success" block @click="toggleModal">Enable FTR</b-button>
    
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Cancel</b-button>
    </b-modal>
   </div> 

  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">FTR 1</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <table class="table table-striped">
                                   <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>ProjectID</th>
                                            <th>Project Title</th>
                                            <th>Project Guide</th>
                                            <th>Date of Submission</th>
                                            <th></th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <tr>  
                                            <td>1</td>
                                            <th>F-21</th>
                                            <td>bloodBank Management</td>
                                            <td>Kolhekar Sir</td>
                                            <td>2020/9/25</td>
                                            <td><a href="#">View</a></td>
                                      </tr> 
                                      <tr>  
                                            <td>2</td>
                                            <th>F-01</th>
                                            <td>Project Allocation Platform</td>
                                            <td>Kolhekar Sir</td>
                                            <td>2020/9/25</td>
                                            <td><a href="#">View</a></td>
                                      </tr>  
                                      <tr>  
                                            <td>3</td>
                                            <th>F-51</th>
                                            <td>Bus Reservation system</td>
                                            <td>Tatale Sir</td>
                                            <td>2020/9/22</td>
                                            <td><a href="#">View</a></td>
                                      </tr> 
                                    </tbody>
                                                     
                                  </table>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">FTR 2</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
         <table class="table table-striped">
                                   <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>ProjectID</th>
                                            <th>Project Title</th>
                                            <th>Project Guide</th>
                                            <th>Date of Submission</th>
                                            <th></th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <tr>  
                                            <td>1</td>
                                            <th>F-21</th>
                                            <td>bloodBank Management</td>
                                            <td>Kolhekar Sir</td>
                                            <td>2020/9/25</td>
                                            <td><a href="#">View</a></td>
                                      </tr> 
                                      <tr>  
                                            <td>2</td>
                                            <th>F-01</th>
                                            <td>Project Allocation Platform</td>
                                            <td>Kolhekar Sir</td>
                                            <td>2020/9/25</td>
                                            <td><a href="#">View</a></td>
                                      </tr>  
                                      <tr>  
                                            <td>3</td>
                                            <th>F-51</th>
                                            <td>Bus Reservation system</td>
                                            <td>Tatale Sir</td>
                                            <td>2020/9/22</td>
                                            <td><a href="#">View</a></td>
                                      </tr> 
                                      <tr>  
                                            <td>4</td>
                                            <th>F-11</th>
                                            <td>Automation System</td>
                                            <td>Kulkarni Sir</td>
                                            <td>2020/9/22</td>
                                            <td><a href="#">View</a></td>
                                      </tr>
                                    </tbody>          
                                  </table>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">FTR 3</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
        <table class="table table-striped">
                                  <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>ProjectID</th>
                                            <th>Project Title</th>
                                            <th>Project Guide</th>
                                            <th>Date of Submission</th>
                                            <th></th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <tr>  
                                            <td>1</td>
                                            <th>F-21</th>
                                            <td>bloodBank Management</td>
                                            <td>Kolhekar Sir</td>
                                            <td>2020/9/25</td>
                                            <td><a href="#">View</a></td>
                                      </tr> 
                                      <tr>  
                                            <td>2</td>
                                            <th>F-01</th>
                                            <td>Project Allocation Platform</td>
                                            <td>Kolhekar Sir</td>
                                            <td>2020/9/25</td>
                                            <td><a href="#">View</a></td>
                                      </tr>  
                                      <tr>  
                                            <td>3</td>
                                            <th>F-51</th>
                                            <td>Bus Reservation system</td>
                                            <td>Tatale Sir</td>
                                            <td>2020/9/22</td>
                                            <td><a href="#">View</a></td>
                                      </tr> 
                                    </tbody>       
                                  </table>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info">FTR 4</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
         <table class="table table-striped">
                                  <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>ProjectID</th>
                                            <th>Project Title</th>
                                            <th>Project Guide</th>
                                            <th>Date of Submission</th>
                                            <th></th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                      
                                      <tr>  
                                            <td>1</td>
                                            <th>F-01</th>
                                            <td>Project Allocation Platform</td>
                                            <td>Kolhekar Sir</td>
                                            <td>2020/9/25</td>
                                            <td><a href="#">View</a></td>
                                      </tr>  
                                      <tr>  
                                            <td>2</td>
                                            <th>F-51</th>
                                            <td>Bus Reservation system</td>
                                            <td>Tatale Sir</td>
                                            <td>2020/9/22</td>
                                            <td><a href="#">View</a></td>
                                      </tr> 
                                      <tr>  
                                            <td>3</td>
                                            <th>F-21</th>
                                            <td>bloodBank Management</td>
                                            <td>Kolhekar Sir</td>
                                            <td>2020/9/25</td>
                                            <td><a href="#">View</a></td>
                                      </tr> 
                                      <tr>  
                                            <td>4</td>
                                            <th>F-62</th>
                                            <td>Bluetooth controlled car</td>
                                            <td>Kolhekar Sir</td>
                                            <td>2020/9/15</td>
                                            <td><a href="#">View</a></td>
                                      </tr> 
                                    </tbody>       
                                  </table>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info">FTR 5</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <table class="table table-striped">
                                  <thead>
                                      <tr>
                                            <th>S.N</th>
                                            <th>ProjectID</th>
                                            <th>Project Title</th>
                                            <th>Project Guide</th>
                                            <th>Date of Submission</th>
                                            <th></th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                      <tr>  
                                            <td>1</td>
                                            <th>F-21</th>
                                            <td>bloodBank Management</td>
                                            <td>Kolhekar Sir</td>
                                            <td>2020/9/25</td>
                                            <td><a href="#">View</a></td>
                                      </tr> 
                                      <tr>  
                                            <td>2</td>
                                            <th>F-01</th>
                                            <td>Project Allocation Platform</td>
                                            <td>Kolhekar Sir</td>
                                            <td>2020/9/25</td>
                                            <td><a href="#">View</a></td>
                                      </tr>  
                                      <tr>  
                                            <td>3</td>
                                            <th>F-51</th>
                                            <td>Bus Reservation system</td>
                                            <td>Tatale Sir</td>
                                            <td>2020/9/22</td>
                                            <td><a href="#">View</a></td>
                                      </tr> 
                                    </tbody>       
                                  </table>
      </b-collapse>
    </b-card>
  </div>
  </div>
  </template>

  <script>
      export default{
        methods:{
          showModal() {
        this.$refs['my-modal'].show()
      },
      showModal1() {
        this.$refs['my-modal1'].show()
      },
      
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
        }
      }
  </script>