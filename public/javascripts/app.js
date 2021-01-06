$(function(){

    $("#fetchdata").on('click', function(){
        $.get( "/fetchdata", function( data ) {
            var products = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(products, function(index, product ) {

                string += '<tr><td>'+(index+1)+'</td><td>'+product['_id']+'</td><td>'+product['orderate']+'</td><td>'+product['region']+'</td><td>'+product['name']+'</td><td>'+product['product']+'</td><td>'+product['quantity']+'</td><td>'+product['unitcost']+'</td><td>'+product['total']+'</td></tr>';
            });

            $("#trdata").html(string);
        });
    });
 
    $("#importdata").on('click', function(){
        $.get( "/import", function( data ) {
            $("#message").show().html(data['success']);
        });
    });

}); 