$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();
    $('#lung_button').hide();
    $('#skin_button').hide();
    $('#colon_button').hide();


    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);

            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });
    // $("#imageUpload").change(function () {
    //     $('.image-section_colon').show();
    //     $('#btn-predict').show();
    //     $('#result').text('');
    //     $('#result').hide();
    //     readURL(this);
    // });
    // Predict colon
    $('#btn-predict_colon').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader_colon').show();
        $('#skin_button').hide();
        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict_colon',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader_colon').hide();
                $('#result_colon').fadeIn(600);
                $('#result_colon').text(' Result:  ' + data);
                $('#skin_button').hide();
                console.log('Success!');
            },
        });
    });

    // Predict skin
    $('#btn-predict_skin').click(function () {
        $('#colon_button').hide();
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('#colon_button').hide();
        $('.loader_skin').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict_skin',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader_skin').hide();
                $('#colon_button').hide();
                $('#result_skin').fadeIn(600);
                $('#result_skin').text(' Result:  ' + data);
                console.log('Success!');
            },
        });
    });
    // Predict lung
    $('#btn-predict_lung').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('#colon_button').hide();
        $('.loader_skin').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict_lung',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader_skin').hide();
                $('#colon_button').hide();
                $('#result_lung').fadeIn(600);
                $('#result_lung').text(' Result:  ' + data);
                console.log('Success!');
            },
        });
    });
});
