var article={
    show:function(data,callback){
        $.get(baseUrl+'/admin/search',data,function(res){
            callback(res)
        })
    }
}