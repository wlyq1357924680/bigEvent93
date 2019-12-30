var article={
    show:function(data,callback){
        $.get(baseUrl+'/admin/search',data,function(res){
            callback(res)
        })
    },
    add:function(fd,callback){
        $.ajax({
            type:'POST',
            url:baseUrl+'/admin/article_publish',
            data:fd,
            success:function(res){
                callback(res)
            },
            
            processData:false,
            contentType:false
        })
    }
}