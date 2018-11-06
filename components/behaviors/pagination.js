 export const paginationBev =Behavior({
   data:{
        dataArray:[],
        total:null
   },

   methods:{
    setMoreData(dataArray){
        const tempArray =this.data.dataArray.concat(dataArray);
        this.setData({
            dataArray:tempArray,
         
           })
    },
    getCurrentStart(){
        return this.data.dataArray.length;
    },
    setTotal(total){
        this.data.total=total;
    },
    hasMore(){

        if(this.data.dataArray.length>=this.data.total){
             return false;
        }else{
             return true;
        }

    },

    //清空一次数组
    initialize(){
        this.data.dataArray=[];
        this.total=null;
    }
   }

 }) 