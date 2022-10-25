const form = document.querySelectorAll('#form');
const btn_submit = document.querySelector('[type="submit"]');

btn_submit.addEventListener('click', function (e) {
    e.preventDefault();
    $.ajax({
        url: form.action,
        type: 'post',
        data: new FormData(form[0]),
        cache: false,
        processData: false,
        contentType: false,
        success: function () {

            // modalEl.modal('hide');
            // swal({
            //     title: 'Good job!',
            //     text: 'You clicked the button!',
            //     type: 'success',
            //     buttonsStyling: false,
            //     confirmButtonClass: 'btn btn-success',
            // });
        },
        error: function (xhr, textStatus, errorThrown) {

            // az.showSwal('error-html', null, xhr.responseText);

            // Swal.fire('Any fool can use a computer')
            // console.log(xhr.responseJSON.error);
            // alert(xhr.errors);
            // Swal.fire({title: '¡Error!', icon: 'error', html: xhr.responseJSON.error, buttonsStyling: false, customClass: {confirmButton: 'btn btn-primary' } });
        },
        complete: function () {
            // submitButton.removeAttribute('data-kt-indicator');
            // submitButton.disabled = false;
        },
    });
});
