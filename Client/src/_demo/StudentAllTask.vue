<template>
  <div id="app">
    
      <!-- Add :filterSettings="filterOptions" in below code to customize default filter --> 
          <!-- Add :filter="columnFilterOptions" in below code to enable checkbox filtering -->
    <div class="table">
     <h2>All Task</h2>
     <br><br>
     <ejs-grid ref="grid" :dataSource="data" :allowFiltering="true" :filterSettings="filterOptions">
        <e-columns>
          <e-column field="Sr" headerText="Sr No" textAlign="auto" :customAttributes="customAttributes" width=100></e-column>
          <e-column field="taskname" headerText="Taskname"  textAlign="auto" :customAttributes="customAttributes" width=140 ></e-column>
          <e-column field="allotedTo" headerText="AllotedTo"  textAlign="auto" :customAttributes="customAttributes" width=200 ></e-column>
          <e-column field="due_date" headerText="Due_Date"  textAlign="auto" :customAttributes="customAttributes" width=100 ></e-column>
          <e-column field="start_date" headerText="Start_date"  textAlign="auto" :customAttributes="customAttributes" width=100 ></e-column>
          <e-column field="end_date" headerText="End_date"  textAlign="auto" :customAttributes="customAttributes" width=120 ></e-column>
          <e-column field="status" headerText="Status"  textAlign="auto" :customAttributes="customAttributes" width=140 ></e-column> 
        </e-columns>
     </ejs-grid> 
    </div>
  </div> 
</template>

<script>

import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
//import { DataUtil } from '@syncfusion/ej2-data';
import { data } from "./studentData";

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);
Vue.prototype.$eventHub = new Vue();

export default {
  data: ()=> {
    return {
       
        data: data,
          customAttributes : {class: 'customcss'},
        filterOptions: { 
        ignoreAccent: true, // Uncomment this code to filter diacritic values
        type:'Menu', 
       //columns: [{ field: 'ProjectTitle', operator: 'startswith', value: 'v' }], //Uncomment the code to apply initial filter
        // Uncomment to change the filter type
      },
    }; 
 
  },
  provide: {
    grid: [Filter]
  },
};
</script>

<style>
@import url("https://cdn.syncfusion.com/ej2/material.css");
.table{
  padding-left:5px ;
  padding-top: 100px; ;
  width: 1100px;
  height:auto;

}
.e-grid *{
  font-size :18px; ;
  text-align: justify;
}
.e-grid .e-rowcell.customcss{
    background-color:lightskyblue;
    height: 12px;
    
}
.e-grid .e-headercell.customcss {
    background-color: rgb(245, 247, 248);
    color: black;
    font-weight: bold ;
    
}

</style>
