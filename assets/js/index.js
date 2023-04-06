// Alerting the user after successfully adding the user data to database from the add user form
$("#add_user").submit(function (event) {
  alert("Data inserted successfully!");
});

// Changing the default behaviour update form
$("#update_user").submit(function (event) {
  event.preventDefault();

  /* Getting all the data
  In place of this we can pass the #update_user also
  serializeArray is going to return the serialize array of the data
  After filling the details and clicking on the submit button in the form
  All the data will be saved in the form of array in the var 
  */
  var unindexed_array = $(this).serializeArray();

  // Creating the data object to store the key-value pairs
  var data = {};

  // Changing the data to key-value pairs
  $.map(unindexed_array, function (n, i) {
    data[n["name"]] = n["value"];
  });

  // Now, creating the put request to store the updated data in the database
  var request = {
    url: `https://user-management-u9he.onrender.com/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  // Using Ajax
  $.ajax(request).done(function (response) {
    alert("Data Updated Successfully!");
  });
});

// Creating a delete request to delete the user from database
if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `https://user-management-u9he.onrender.com/api/users/${id}`,
      method: "DELETE",
    };

    // Confirming the delete request from the user
    if (confirm("Do you really want to delete this record?")) {
      // Use ajax request to delete the data from the database
      $.ajax(request).done(function (response) {
        alert("Data Updated Successfully!");

        // Reloading the webpage
        location.reload();
      });
    }
  });
}
