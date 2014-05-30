// /* jshint unused:false */
// /* global ajax */
//
// (function(){
//   'use strict';
//
//   $(document).ready(init);
//
//   function init()
//   {
//     $('.off').hide();
//     $('.new').first().hide();
//     $('#projects').on('click', '.edit', changeDisplay);
//     $('#projects').on('click', '.save', saveContent);
//     //$('.add-content').click(addCard);
//     // $('#course-contents').on('click', '.delete', deleteCard);
//   }
//
//   function changeDisplay()
//   {
//     var frontText = $(this).parent().children('.front').text();
//     var backText = $(this).parent().children('.back').text();
//
//     $(this).parent().children('div.front').replaceWith(`<textarea name='front' style='width:200px; height: 100px;'>${frontText}</textarea>`);
//     $(this).parent().children('div.back').replaceWith(`<textarea name='back' style='width:200px; height: 100px;'>${backText}</textarea>`);
//     $('.off').show();
//     $('.on').hide();
//   }
//
//   function saveContent()
//   {
//     var index = $(this).parent().index();
//     var front = $($(this).parent().children()[0]).val();
//     var back = $($(this).parent().children()[1]).val();
//     var courseId = $('h1').data('id');
//     var card = $(this).parent();
//
//     ajax(`/creators/courses/${courseId}/content/edit`, 'put', {index:index, front:front, back:back}, h =>{
//       card.empty().replaceWith(h);
//       $('.on').show();
//       $('.off').hide();
//     });
//   }
