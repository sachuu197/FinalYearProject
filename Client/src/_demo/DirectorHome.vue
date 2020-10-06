<template>
  <div id="app">
  <div class="container">
      <div class="row">
      <div class="col-2"></div>
         
    <div class="col-12"> 
                 
               <div class="card-deck">
                <div class="card  m-4 p-10 bg-danger border-primary mb-3"> 
                   
                    <div class="card-body">
                    <h2 class="card-title">Lagging</h2>
                    <h3>35</h3>
                     <div class="float-right">  <b-button href="/director" class="float-right" variant="light">Go To Project</b-button></div>
               
                    </div>
                </div>
                <div class="card  m-4 p-10 bg-warning border-primary mb-3">
                   
                    <div class="card-body">
                    <h2 class="card-title">On-Time</h2>
                    <h3>15</h3>
                     <div class="float-right">  <b-button href="/director" class="float-right" variant="light">Go To Project</b-button></div>
                   
                    </div>
                </div>
                
                <div class="card  m-4 p-10 bg-success border-primary mb-3">
                  
                    <div class="card-body">
                    <h2 class="card-title">Leading</h2>
                    <h3>12</h3>
                     <div class="float-right">  <b-button href="/director" class="float-right" variant="light">Go To Project</b-button></div>
                    </div>
                </div>
            </div>
  
    </div>
  <br>
  <br>
         <div class="col-6">
           <td>
               <tr><h1>Industrial</h1></tr>  
               <tr><pie-chart :data="[['Computer Engineering', 34], ['Mechanical Engineering', 35], ['IT Engineering', 25],['Civil Engineering', 27],['Electronics Engineering', 32]]"></pie-chart></tr>
           </td> 
    
       </div>
      <div class="col-6">
  
        <td>
             <tr><h1>In-House</h1></tr>  
             <tr><pie-chart :data="[['Computer Engineering', 16], ['Mechanical Engineering', 15], ['IT Engineering', 12],['Civil Engineering', 17],['Electronics Engineering', 13]]"></pie-chart></tr>
        </td> 
    
      </div>
            <div>
    <table class="table">
  <thead>
    <tr scope="row" rowspan="2">
      <th scope="col">Sr.No</th>
      <th scope="col">College</th>
      <th scope="col2" colspan="2">Lagging</th>
      <th scope="col2" colspan="2">OnTime</th>
      <th scope="col2" colspan="2">Leading</th>
      <th scope="col">Total</th>
    </tr>
    <tr>
      <th></th>
      <th></th>
      <th scope="col">Industrial</th>
      <th scope="col">In-House</th>
      <th scope="col">Industrial</th>
      <th scope="col">In-House</th>
      <th scope="col">Industrial</th>
      <th scope="col">In-House</th>
      <th></th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Computer Engineering </td>
      <td>4</td>
      <td>5</td>
      <td>4</td>
      <td>5</td>
      <td>4</td>
      <td>5</td>
      <td>27</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Civil Engineering</td>
       <td>4</td>
      <td>5</td>
      <td>4</td>
      <td>5</td>
      <td>4</td>
      <td>5</td>
      <td>27</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Electronics Engineering</td>
      <td>4</td>
      <td>5</td>
      <td>4</td>
      <td>5</td>
      <td>4</td>
      <td>5</td>
      <td>27</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>IT Engineering</td>
      <td>4</td>
      <td>5</td>
      <td>4</td>
      <td>5</td>
      <td>4</td>
      <td>5</td>
      <td>27</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mechanical Engineering</td>
      <td>4</td>
      <td>5</td>
      <td>4</td>
      <td>5</td>
      <td>4</td>
      <td>5</td>
      <td>27</td>
    </tr>

  </tbody>
</table>
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