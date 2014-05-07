/**
 * Created by Marian Rusnak on 7.5.2014.
 */

$(function() {
    var container = $('#rows');
    var rowHtml = container.html();

    $('button#add').click(function() {
        container.append(rowHtml);
    });

    $('button#compute').click(function() {
        var rows = container.children().filter(function(index) {
            return $(this).find('input[name^=name]').val() != "";
        });

        var count = rows.length;
        if (count <= 0) return;

        rows.each(function() {
            var row = $(this);
            var price = row.find('input[name^=price]').val();
            var toPay = price / count;
            row.find('input[name^=toPay]').val(toPay);
        });
    });

    container.on('click', '.btn-remove', function() {
        $(this).parents('.row').remove();
    });
});
