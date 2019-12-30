
var caterage={
    show:function(callback){
        $.get(baseUrl+'/admin/category_search',function(res){
           callback(res)
        })
    },
    delete:function(id,callback){
        $.post(baseUrl+'/admin/category_delete',{id:id},function(res){
            callback(res)
        })
    },
    add:function(name,slug,callback){
        $.post(baseUrl+'/admin/category_add',{name:name,slug:slug},function(res){
            callback(res)
        })
    },
    updata:function(data,callback){
        $.post(baseUrl+'/admin/category_edit',data,function(res){
            callback(res)
        })
    }
}




