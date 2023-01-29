var iframe = $('<iframe>', {
    id:  'pay-rent',
    }).appendTo('body');


    iframe.load(function(){
     var obj = $('#pageHeaderLogo',iframe.contents());
     console.log(obj);
     obj.attr('src', './../img/preview.png');
 });

iframe.attr({
src:"./../img/preview.png"
});