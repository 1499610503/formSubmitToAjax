$(function() {
    $('form').on('submit', function(event) {
        var that = this;
        event.preventDefault()
        console.log(this)
        var url = this.action || ''
        var type = this.method || 'post'
        var formdata = new FormData(this)
        // console.log(formdata)
        // for(var [key,value] of formdata.entries()){
        //     console.log(key,value)
        // }
        console.log({
            url,
            type,
        })
        $.ajax({
            url: url,
            type: type,
            data: formdata,
            processData: false,
            dataType: 'json',
            success: function(res) {
                if (that.success) {
                    that.success(res)
                    return
                }
                console.log('提交成功', res)
                alert('提交成功')
            },
            error: function(err) {
                if (that.error) {
                    that.error(err)
                    return
                }
                console.log('提交失败', err)
                alert('提交失败')
            }
        });
    })
})
