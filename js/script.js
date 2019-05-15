$(document).ready(function() {

    var apiBase = 'http://statenweb.mockable.io/conversions/';

$('.btn1').on('click',function(e){

    e.preventDefault();
    var input = $('#input1').val();

    if(!input){
        alert('Enter a Number');
    }

    if(isNaN(input)){
        var type = typeof input;
        alert('NOT a number! What you entered is '+ type);
        return;
    }


axios.get(apiBase).then(function(response){

    var inchesInCm = response.data.inchesInCm;

    var result = input/inchesInCm;

    result = result.toFixed(2);

    result = result + ' Centimeters ';

    $('#result1').html(result);

});


});

$('.btn2').on('click',function(e){

    e.preventDefault();
    var input = $('#input2').val();

    if(!input){
        alert('Enter a Number');
    }

    if(isNaN(input)){
        var type = typeof input;
        alert('NOT a number! What you entered is '+ type);
        return;
    }


axios.get(apiBase).then(function(response){

    var centimetersInInch = response.data.centimetersInInch;

    var result = input/centimetersInInch;

    result = result.toFixed(6);

    result = result + ' Inches ';

    $('#result2').html(result);

});

});


});

