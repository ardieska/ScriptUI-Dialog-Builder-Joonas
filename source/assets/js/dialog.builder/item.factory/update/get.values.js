
item.update.get_values = function( prop ) {
	
	var data = {};
	var editPanel = $('#panel-edit-style-wrap');
	var _this = editPanel.find('[data-edit^="'+ prop +'"]');
	
	switch ( prop ) {
		
		case "varName":
			data.varName = _this.val();
			break;
		
		case "helpTip":
			data.helpTip = _this.val();
			break;
		
		case "iconButtonStroke":
			data.iconButtonStroke = _this.prop('checked');
			break;
		
		case "text":
			data.text = _this.val();
			break;
			
		case "listItems":
			data.listItems = _this.val();
			break;
			
		case "justify":
			data.justify = editPanel.find('[data-edit^="justify"].active').data('value');
			break;
			
		case "margins":
			// All sides share the same value.
			// - single number value
			if ( editPanel.find('.n-3-4.hidden').length > 0 ) {
				data.margins = parseInt( editPanel.find('.margin-inputs .top').val(), 10);
			}
			// top, right, bottom, left
			// - array
			else {
				var marginValues = [];
				editPanel.find('[data-edit="margins"]').each(function() {
					marginValues.push( parseInt($(this).val(), 10) );
				});
				data.margins = marginValues;
			}
			break;
			
		case "preferredSize":
			var width = parseInt( editPanel.find('input.width').val(), 10);
			var height = parseInt( editPanel.find('input.height').val(), 10);
			data.preferredSize = [ width, height ];
			break;
			
		case "orientation":
			data.orientation = _this.find('option:selected').val();
			break;
		
		case "spacing":
			data.spacing = parseInt(_this.val(), 10);
			break;
			
		case "alignChildren":
			var acHor = editPanel.find('#align-children-horizontal[data-edit="alignChildren"] option:selected').val();
			var acVer = editPanel.find('#align-children-vertical[data-edit="alignChildren"] option:selected').val();
			data.alignChildren = [ acHor, acVer ];
			break;
			
		case "image":
			data.image = [ editPanel.find('.base64-bin').attr("src") ];
			break;
			
		case "alignment":
			
			if ( _this.prop('disabled') === false  ) {
				data.alignment = _this.find('option:selected').val();
			}
			else {
				data.alignment = null;
			}
			break;
	}
	// console.table( data );
	return data;
	
};
