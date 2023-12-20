$(document).ready(function(){
    loadUsers();

    $("#add-user-form").submit(function(event){
        event.preventDefault(); // Evitar la recarga de la página
        $.ajax({
            type: "POST",
            url: "http://localhost:4444/rest/save/"+$('#CEDULA').val(), // Ruta para insertar un estudiante
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                "nom_EST": $('#NOMBRE').val(),
                "ape_EST": $('#APELLIDO').val(),
                "dir_EST": $('#DIR').val(),
                "tel_EST": $('#TELEFONO').val()
            }),
            success: function(response) {
                loadUsers(); // Actualizar la tabla después de agregar un estudiante
            }
        });
    });

    $("#edit-user-form").submit(function(event){
        event.preventDefault(); // Evitar la recarga de la página
        $.ajax({
            type: "PUT",
            url: "http://localhost:4444/rest/edit/"+$('#eCEDULA').val(), // Ruta para editar un estudiante
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                "nom_EST": $('#eNOMBRE').val(),
                "ape_EST": $('#eAPELLIDO').val(),
                "dir_EST": $('#eDIR').val(),
                "tel_EST": $('#eTELEFONO').val()
            }),
            success: function(response) {
                loadUsers(); // Actualizar la tabla después de editar un estudiante
            }
        });
    });

    $("#tblUsers").on('click', '.btnEdit', function(){
        var currentRow = $(this).closest("tr");

        $('#eCEDULA').val(currentRow.find("td:eq(0)").text());
        $('#eNOMBRE').val(currentRow.find("td:eq(1)").text());
        $('#eAPELLIDO').val(currentRow.find("td:eq(2)").text());
        $('#eDIR').val(currentRow.find("td:eq(3)").text());
        $('#eTELEFONO').val(currentRow.find("td:eq(4)").text());
    });

    $("#tblUsers").on('click', '.btnDelete', function(){
        var currentRow = $(this).closest("tr");
        var cedula = currentRow.find("td:eq(0)").text();
        $.ajax({
            url: "http://localhost:4444/rest/delete/" + cedula, // Ruta para eliminar un estudiante
            type: "DELETE",
            success: function(){
                loadUsers(); // Actualizar la tabla después de eliminar un estudiante
            }
        });
    });
});

function loadUsers(){
    $.ajax({
        url: "http://localhost:4444/rest/all", // Ruta para obtener todos los estudiantes
        type: "GET",
        dataType: "json",
        success: function(data){
            var btnEdit = '<button type="button" class="btn btn-primary btnEdit"'+
                          'data-bs-toggle="modal" data-bs-target="#editUserModal">Editar</button>';
            var btnDelete = '<button type="button" class="btn btn-danger btnDelete">'+
                            'Eliminar</button>';
            var htmlTable = "";
            for(let i = 0; i < data.length; i++){
                htmlTable += "<tr><td>"+ data[i].ced_EST +"</td><td>"+
                                data[i].nom_EST +"</td><td>" +
                                data[i].ape_EST +"</td><td>" +
                                data[i].dir_EST +"</td><td>" +
                                data[i].tel_EST +"</td><td>" +
                                btnEdit + " " +
                                btnDelete + "</td></tr>";
            }
            $("#tblUsers tbody").html(htmlTable); // Actualizar el contenido de la tabla
        }
    });
}
