var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '3217',
  'X-Auth-Token': '6b828fa4cbcc798aaa98ef7a9f642a0a'
};
$.ajaxSetup({
	headers: myHeaders
});
$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});
function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}
function setupCards(col, cards) {
	cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.bootcamp_kanban_column_id, card.name);
    	col.createCard(cardObj);
  	});
}