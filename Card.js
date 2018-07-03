// KLASA KANBAN CARD
function Card(parentId,id, name) {
	var self = this;
	this.parentId = parentId;
	this.id = id;
	this.name = name || 'No name given';
	this.element = createCard();
	function createCard() {
		var $card = $('<li class="card"></li>');
		var $cardDeleteBtn = $('<button class="btn-delete">x</button>');
		var $cardChangeBtn = $('<button class="btn-change">change name</button>');
		var $cardDescription = $('<p class="card-description"></p>');
		
		$cardDeleteBtn.click(function(){
			self.removeCard();
		});
		$cardChangeBtn.click(function() {
			self.changeCard("ZMIANA");
		});
		$card.append($cardDeleteBtn);
		$card.append($cardChangeBtn);
		$cardDescription.text(self.name);
		$card.append($cardDescription)
		return $card;
	}
}
Card.prototype = {
	removeCard: function() {
		var self = this;
		$.ajax({
			url: baseUrl + '/card/' + self.id,
			method: 'DELETE',
			success: function() {
				self.element.remove();
			}
		});
	},
	changeCard: function(newName) {
		var self = this;
		$.ajax({
			url: baseUrl + '/card/' + self.id,
			method: 'PUT',
			data: {
				name: newName,
				bootcamp_kanban_column_id: self.parentId
			},
			success: function() {
				console.log('card ok');
			}
		});
	}
}