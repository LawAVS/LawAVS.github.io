$(document).ready(function() {
    var envelope = $('#envelope');
    var note = $('#note');
    var additionalNotes = $('.additional-note');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var redirect_button = $(".redirect-button button");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        note.addClass("open").removeClass("close");

        // Mostrar las notas adicionales después de un intervalo de tiempo
        setTimeout(function() {
            showAdditionalNotes();
        }, 1000); // Espera 1 segundo antes de mostrar las notas adicionales
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        note.addClass("close").removeClass("open");

        // Ocultar todas las notas adicionales
        additionalNotes.addClass('close').removeClass('open');

        // Ocultar el botón de redirección
        redirect_button.addClass("invisible");
    }

    // Función para mostrar las notas adicionales una después de otra
    function showAdditionalNotes() {
        additionalNotes.each(function(index) {
            var $this = $(this);
            setTimeout(function() {
                $this.removeClass('close').addClass('open');

                // Si es la última nota adicional, mostrar el botón de redirección
                if (index === additionalNotes.length - 1) {
                    redirect_button.removeClass("invisible");
                }
            }, (index + 1) * 1000); // Espera 1 segundo entre cada nota adicional
        });
    }
    
    // Ocultar el botón de redirección al cargar la página
    redirect_button.addClass("invisible");
});
