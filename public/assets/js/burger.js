// After DOM is fully loaded
$(function() {
    // New burger
    $('.create-form').on('submit', function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $('#newBurger')
          .val()
          .trim(),
        devoured: 0
      };
  
      // POST Request
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
      }).then(function() {
        console.log('New Burger added');
        // Reload page
        location.reload();
      });
    });
  
    // Devour burger
    $('.devourBurger').on('click', function(event) {
      event.preventDefault();
  
      var id = $(this).data('id');
      var devouredState = {
        devoured: 1
      };
  
      // Put request
      $.ajax('/api/burgers/' + id, {
        type: 'PUT',
        data: devouredState
      }).then(function() {
        console.log('Burger has been devoured');
        location.reload();
      });
    });
  
    $('.deleteBurger').on('click', function(evet) {
      event.preventDefault();
  
      var id = $(this).data('id');
  
      // Delete request
      $.ajax({
        type: 'DELETE',
        url: '/api/burgers/' + id
      }).then(location.reload());
    });
  });