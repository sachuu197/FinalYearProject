<template>
  <div id="app">
  <div class="container">
      <div class="row">
       <div class="col-6">
          
           <td>
               <tr><h1>BAR GRAPH</h1></tr>
                
               <tr><column-chart xtitle="Time" ytitle="No Of Task" :data="[['Week1', 16], ['Week2', 18], ['Week3', 13],['Week4', 11],['Week5', 15]]"></column-chart></tr>
           </td> 
    
       </div>
      <div class="col-6" style="">
  
        <td>
             <tr><h1>PIE CHART</h1></tr>  
             <tr><pie-chart :data="[['Initial', 30], ['Design', 25], ['Devlopment', 48],['Testing', 15],['Deployment', 4]]"></pie-chart></tr>
        </td> 
    <br>
  <br>
      </div>
    
    <div class="col-12">
       <div id='box1'>
             <h3 >Project ID: #2020-12345</h3>
                      
                         
                    <td style="text-align:left">
                          <tr><td><h4>Problem Statement :   </h4></td><td><h4> Project Monitoring System </h4></td></tr>
                           <tr><td><h4>Collage :</h4></td><td><h4> VIIT </h4></td></tr>
                           <tr><td><h4>Branch : </h4></td><td><h4>Computer Engineering </h4></td></tr>
                           <tr><td><h4>Date:</h4></td><td><h4>18/08/2020 </h4></td></tr>                   
                           <tr><td><h4>Faulty Guide:</h4></td><td><h4> Vikas Kolhekar</h4></td> </tr>
                           <tr><td><h4>  Industry Guide: </h4></td><td><h4>Nilesh Patel </h4></td></tr>                        
                           <tr><td><h4>Group Members: </h4></td><td>
                                <ul> 
                                  <li><tr><td><h4>Sahil Bhaware </h4></td></tr></li>
                                  <li><tr><td><h4>Sachin Ghuge </h4></td></tr></li>
                                 <li> <tr><td><h4>Aniket Chougule </h4></td></tr></li>
                                 </ul>
                                 </td>
                           </tr>
                                
                     
                           <tr><td><h4>Domians: </h4></td><td>
                                 <ul>
                                 <li><tr><td><h4>Website </h4></td></tr></li>
                                 <li><tr><td><h4>Machine learning </h4></td></tr></li> 
                                 </ul>  
                                 </td>  
                                 </tr>
                            <tr><td><h4>Project Duration: </h4></td><td>
                                <ul> 
                                  <li><tr><td><h4>Initial :  </h4></td><h4>2 Weeks</h4></tr></li>
                                  <li><tr><td><h4>Design :</h4></td><h4>3 Weeks</h4></tr></li>
                                  <li><tr><td><h4>Devlopment :</h4></td><h4>4 Weeks</h4></tr></li>
                                  <li><tr><td><h4>Testing :</h4></td><h4>3 Weeks</h4></tr></li>
                                  <li><tr><td><h4>Devlopment :</h4></td><h4>1 Week</h4></tr></li>
                                   <li><tr><td><h4>Total :</h4></td><h4>13 Weeks</h4></tr></li>
                                 </ul>
                                 </td>
                           </tr>      
            </td>
       </div>
    </div>
  </div>            
</div>
  </div>

</template>

<script>


export default {
  name: 'App',
  data() {
      return{
          chartData:{

          }
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 20px;
  padding-bottom: 40px ;
  background-color: #f7f7f7;
}
 #box1{
        width:80%;
        padding:10px;
        margin:auto;
        margin-top:20px;
        border: 2px solid black;
        text-align:center;
        height: 750px;
       
        
    }
   
    .box2{
        display:flex;
         padding:10px;
         margin:5px;
         border:1px dotted #ccc;
         text-align: left;
    }
    .box3{
         display:inline-flex;
         width:48%;
         padding:10px;
         margin:5px;
         border:1px dotted #ccc;
    }
    .box2 h4{
        font-weight:bold;
        align-content: left;
    }
</style>
