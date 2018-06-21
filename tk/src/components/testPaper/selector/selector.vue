<template>
    <div>
        
        <div class="xuanze">
         <div>
            <h3>选择题</h3>
            <P>本题共有13个小题，每小题6分。在每小题给出的四个选项中，只有一项符合题目要求的。</P>
         </div>
           <div class="zhishi clearfix">
               <img src="../images/zhishi.png" width="35%" class="fr">
           </div>
    
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
    }
</script>

<style scoped>
 .xuanze{
    padding-top: 50%;
    padding-left: 10%;
 }
 .xuanze h3{
    font-weight: normal;
    font-size: 1rem;
    color: #333;
    border-left: 2px solid #4b0;
    text-indent: 1rem;
 }
 .xuanze p{
     padding-left: 5%;
     padding-top: 2%;
     font-size: 0.5rem;
     color: #333;
     width: 91%;
 }
 
</style>