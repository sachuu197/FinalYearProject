<template>
  <div id="app">
   
  <div class="table">
      <h2>All Group</h2>
      <!-- Add :filterSettings="filterOptions" in below code to customize default filter --> 
      <ejs-grid ref="grid" :dataSource="data" :allowFiltering="true" :filterSettings="filterOptions">
        <e-columns>
        
           <e-column field="id" headerText="Sr No" textAlign="Right" :customAttributes="customAttributes" width=100></e-column>
          <!-- Add :filter="columnFilterOptions" in below code to enable checkbox filtering -->
          <e-column field="ProjectId" headerText="PId" :customAttributes="customAttributes" width=100></e-column>
          <e-column field="ProjectTitle" headerText="ProjectTitle" :customAttributes="customAttributes" width=200></e-column>
            <e-column field="Branch" headerText=" Branch" :customAttributes="customAttributes" width=140></e-column>
            <e-column field="CollegeName" headerText=" College Name"  :customAttributes="customAttributes" width=120></e-column>
          <e-column field="Type" headerText="Type" :customAttributes="customAttributes" width=120></e-column>
          <e-column field="Status" headerText="	Status" :customAttributes="customAttributes" width=120></e-column>
          <e-column field="Stage" headerText="Stage" :customAttributes="customAttributes" width=120></e-column>
          <e-column field="Faculty" headerText="Faculty" :customAttributes="customAttributes" width=130></e-column>
        </e-columns>
      </ejs-grid>
    </div>  
  </div> 
</template>

<script>
/*eslint-disable*/
import axios from 'axios';
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from '@syncfusion/ej2-vue-dropdowns';
//import { DataUtil } from '@syncfusion/ej2-data';
//import { data } from "./dataSource";

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);
Vue.prototype.$eventHub = new Vue();

export default {
  data: ()=> {
    return {
       
        data: [],
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
    mounted(){
    axios.get('http://localhost:3000/datas')
      .then(response => {
        this.data = response.data
      })
  },
};
</script>

<style>
.e-grid *{
  font-size :14px; ;
  text-align: justify;
}
.e-grid .e-rowcell.customcss{
    background-color:lightskyblue;
    height: 12px;
    
}
.e-grid .e-headercell.customcss {
    background-color: blueviolet;
    color: black;
    font-weight: bold ;
    
}
.table{
  padding-left:-10px ;
  padding-top: 100px; ;
  width: 1100px;
  height:auto;

}
@import url("https://cdn.syncfusion.com/ej2/material.css");
</style>
