
var user = {
    login: function (username,pwd,callback) {
        $.ajax({
            type: 'POST',
            url: baseUrl + '/admin/login',
            data: { user_name: username, password: pwd },
            success: function (res) {
                // console.log(res)
                callback(res)
              
            }
        })
    },

    logout: function (callback) {

        $.post(baseUrl + '/admin/logout', function (res) {
            // console.log(res)
            callback(res)
           
        })

    },
    getUserInfo: function (callback) {
        $.get(baseUrl + '/admin/getuser', function (res) {
            callback(res)

        })
    }


}




