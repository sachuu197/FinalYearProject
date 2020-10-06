<template>
  <div id="app">
  <div class="container">
      <div class="row">
       
      <div class="col-2"></div>
       
            <div class="col-8">
               <b-button href="/FTR" class="float-right" variant="primary" style="margin-right:-50px">Show FTR's</b-button>
                         <div class="box2">
                             <ul>
                               
                            
                                  <li><h6>Branch : Computer Engineering</h6></li>
                                  <li><h6>College : VIIT</h6></li>
                                  <li><h6> Total Project: 100 </h6>
                                    <ul>
                                    <li><h6>Industrial Project: 70</h6></li>
                                    <li><h6>Inhouse project:    25</h6></li>
                                    <li><h6>Interdepartmental:   5</h6></li>
                                    <li> </li>
                                    </ul>
                                  </li>
                                
                               </ul>
                        
              
                          </div>
                         
            </div>
    <div class="col-12"> 
                 
               <div class="card-deck">
                <div class="card  m-4 p-10 bg-danger border-primary mb-3"> 
                   
                    <div class="card-body">
                    <h2 class="card-title float-left">Lagging</h2>
                    <h3 class="float-none">35</h3>
                    <div class="float-right"> <b-button href="/HOD" class="float-right" variant="light">Go To Project</b-button></div>
                    </div>
                </div>
                <div class="card  m-4 p-10 bg-warning border-primary mb-3">
                   
                    <div class="card-body">
                    <h2 class="card-title float-left">On-Time</h2>
                    <hr>
                    <h3 class="float-left">24</h3>
                    <hr>
                     <div> <b-button href="/HOD" class="float-right" variant="light">Go To Project</b-button></div>
                   
                    </div>
                </div>
                
                <div class="card  m-4 p-10 bg-success border-primary mb-3">
                  
                    <div class="card-body">
                    <h2 class="card-title float-left">Leading</h2>
                    <h3>12</h3>
                     <div class="float-right"><b-button href="/HOD" class="float-right" variant="light">Go To Project</b-button></div>
                    </div>
                </div>
            </div>
  
    </div>
  <br>
  <br>
         <div class="col-6">
           <td>
               <tr><h1>Industrial</h1></tr>  
               <tr><pie-chart :data="[['Initial', 8], ['Design', 11], ['Devlopment', 15],['Testing', 7],['Deployment', 6]]"></pie-chart></tr>
           </td> 
    
       </div>
      <div class="col-6">
  
        <td>
             <tr><h1>In-House</h1></tr>  
             <tr><pie-chart :data="[['Initial', 7], ['Design', 9], ['Devlopment', 7],['Testing', 8],['Deployment', 4]]"></pie-chart></tr>
        </td> 
    
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

}
 #box1{
        width:80%;
        padding:10px;
        margin:auto;
        margin-top:20px;
        border:1px dotted black;
        text-align:center;
    }
    .box2{
       
         padding:8px;
        
         margin:20px;
        border:2px solid black;
         text-align: left;
         border-radius:5px;
        
    }
    .box3{
         display:inline-flex;
         width:48%;
         padding:10px;
         margin:5px;
         border:1px dotted #ccc;
    }
    .box2 h6{
        font-weight:bold;
        align-content: left;
    }
    .hed{
      font-size: 45px;
      text-align: right;
    }
    .box{
      width: 33%;
    }
   
   
</style>