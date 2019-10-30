$('.field button').on('click', function() {
    let devSkill = $('input').val();
    let $newSkill = $(`<li><button>X</button>${devSkill}</li>`);
    $('ul.container').append($newSkill);
    $('input').val('');
})

$('ul').on('click', 'li button', function() {
    $(this).closest('li').remove();
} )