$(document).ready(function(){
    initType();

    function initType()
    {
        $("#name_search").keyup(function(){
            var search = $(this).val();
            
            $.ajax({
                type: "POST",
                url: "change_customer.php",
                data: {
                    name: search
                },
                success: function(data){
                    $('tbody').html(data);
                }
            });
        });
    }
});