//http://www.programmingrelief.com/4760982/Create-Google-Chart-Data-Table-Array-From-Two-Arrays	  
//http://stackoverflow.com/questions/12415689/how-to-dynamically-add-rows-columns-to-a-google-column-chart
 

 // Load the Visualization API and the ColumnChart package.
      google.load('visualization', '1.0', {'packages':['corechart']});
	  
//PIB ANUAL 	
      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChartPibanual);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.  
	  
	  
	  
	 function drawChartPibanual() {
		var url= "http://pipes.yahoo.com/pipes/pipe.run?_id=e1039f100bc6e80bbcbf112828f21725&_render=json&_callback=?";
		var ano = new Array();
		var tasa = new Array();
		  
	    $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            success: function(data) {
				$(data.value.items).each(
					function(){
						ano.push($(this)[0].ano);
						tasa.push(parseFloat($(this)[0].tasa));
						data = new google.visualization.DataTable();;
						data.addColumn('string', 'Año');
						data.addColumn('number', 'Tasa anual (en %)');
						for(i = 0; i < ano.length; i++)
							data.addRow([ano[i], tasa[i]]);
			
						var options = {
						  title: 'PIB Anual ',
						  width: '100%',
						  height: 430,
						  colors: ['#af71af'],
						  hAxis: {titleTextStyle: {color: 'red'}}
						};

						var chart = new google.visualization.LineChart(document.getElementById('chart_divpibA'));
						chart.draw(data, options);
					}
				);
			},
				error: function() { console.log('Uh Oh!'); }		
		});
    }

	
//PIB TRIMESTRAL 	
	google.setOnLoadCallback(drawChartPibtrimestral);

 
 
	 function drawChartPibtrimestral() {
		var url= "http://pipes.yahoo.com/pipes/pipe.run?_id=bae7f9a45898065090ab25522de34ad5&_render=json&numberinput1cas=3&_callback=?";
		var trimestre = new Array();
		var tasat = new Array();
		  
	    $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            success: function(data) {
				$(data.value.items).each(
					function(){
						trimestre.push($(this)[0].trimestre);
						tasat.push(parseFloat($(this)[0].tasat));
						data = new google.visualization.DataTable();;
						data.addColumn('string', 'Trimestre');
						data.addColumn('number', 'Tasa trimestral (en %)');
						for(i = 0; i < trimestre.length; i++)
							data.addRow([trimestre[i], tasat[i]]);
			
						var options = {
						  title: 'PIB Trimestral ',
						  width: '100%',
						  height: 430,
						  colors: ['#af71af'],
						  hAxis: {titleTextStyle: {color: 'red'}}
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('chart_divpibT'));
						chart.draw(data, options);
					}
				);
			},
				error: function() { console.log('Uh Oh!'); }		
		});
    }  
	  
	  
	  
	 //DESEMPLEO Anual 
	 //DESEMPLEO Trimestal
	 
	 
	/* 
	 //DESEMPLEO EPA ultimo trimestre
	//  http://www.ine.es/inebaseDYN/epa30308/epa_inicio.htm

	
$(document).ready(function(){

	var url = 'http://pipes.yahoo.com/pipes/pipe.run?_id=e5fdab983067f0b28768075c666df04d&_render=json&_callback=?';
	
	$.ajax({
            type: "POST",
            url: url,
            data: "{}",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            success: function(data) {
						
					$(data).each(function(){
						//console.log($(this)[0]);
						
						var trimestre = $(this)[0].col_2;
						var valor = $(this)[0].valor;
						var variacion = $(this)[0].variacion;
						
						
						
						var html = '<table><tr><th>' + trimestre + '</td><th></td><th>Valor</th><th>Variación</th></tr>>';
						html += '</table>';
						
														// <tr>
															// <td>Ocupados</td>
															// <td>1</td>
															// <td>16.758,2</td>
															// <td>-1,17%</td>
														// </tr>
														// <tr>
															// <td>Parados</td>
															// <td>1</td>
															// <td>5.896,3</td>
															// <td>-1,16%</td>
														// </tr>
														// <tr>
															// <td>Tasa de actividad</td>
															// <td>2</td>
															// <td>59,43%</td>
															// <td>-0,37%</td>
														// </tr>			
														// <tr>
															// <td>Tasa de paro</td>
															// <td>2</td>
															// <td>26,03%</td>
															// <td>0,00%</td>
														// </tr>
													

						$('#tabla-epa').append(html);
					});	
				}
        });
	
});	  
	  
	*/  
	  
//DEUDA ANUAL

 google.setOnLoadCallback(drawChart);

 
    function drawChart() {
		var url= "http://pipes.yahoo.com/pipes/pipe.run?_id=b2a4f0311590a3071621233bcc65b1f2&_render=json&_callback=?";
		var ano = new Array();
		var porcentaje = new Array();
		  
	    $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            success: function(data) {
				$(data.value.items).each(
					function(){
						ano.push($(this)[0].ano);
						porcentaje.push(parseFloat($(this)[0].porcentaje));
						data = new google.visualization.DataTable();;
						data.addColumn('string', 'Año');
						data.addColumn('number', 'Deuda (en %)');
						for(i = 0; i < ano.length; i++)
							data.addRow([ano[i], porcentaje[i]]);
			
						var options = {
						  title: 'Deuda',
						  width: '100%',
						  height: 430,
						  colors: ['#ceb48d'],
						  hAxis: {titleTextStyle: {color: 'red'}}
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('chart_divDeudaA'));
						chart.draw(data, options);
					}
				);
			},
				error: function() { console.log('Uh Oh!'); }		
		});
    }

//DEUDA TRUMESTRAL

	google.setOnLoadCallback(drawChartDeudaT);
	
    function drawChartDeudaT() {
		var url= "http://pipes.yahoo.com/pipes/pipe.run?_id=c57d824f499b9c5e27eed0a9629ccb76&_render=json&numberinput1=4&_callback=?";
		var trimestre = new Array();
		var deuda = new Array();
		  
	    $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            success: function(data) {
				$(data.value.items).each(
					function(){
						trimestre.push($(this)[0].trimestre);
						deuda.push(parseFloat($(this)[0].deuda));
						
						//console.log(trimestre);
						data = new google.visualization.DataTable();;
						data.addColumn('string', 'Trimestre');
						data.addColumn('number', 'Deuda (en %)');
						for(i = 0; i < trimestre.length; i++)
							data.addRow([trimestre[i], deuda[i]]);
			
						var options = {
						  width: '80%',
						  height: 630,
						  colors: ['#ceb48d'],
						  backgroundColor: {strokeWidth: 5},							  
						  hAxis: {titleTextStyle: {color: 'red'}}
						};
						

						var chart = new google.visualization.ColumnChart(document.getElementById('chart_divDeudaT'));
						chart.draw(data, options);
					}
				);
			},
				error: function() { console.log('Uh Oh!'); }		
		});
    }
	









	
	
	
//DEFICIT ANUAL 
      google.setOnLoadCallback(drawChartDeficit);
	
    function drawChartDeficit() {
		var url= "http://pipes.yahoo.com/pipes/pipe.run?_id=a597abb595756424afe95fae832dbc7b&_render=json&_callback=?";
		var ano = new Array();
		var pib = new Array();
		  
	    $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            success: function(data) {
				$(data.value.items).each(
					function(){
						ano.push($(this)[0].ano);
						pib.push(parseFloat($(this)[0].pib));
						
						//console.log(ano);
						data = new google.visualization.DataTable();;
						data.addColumn('string', 'Año');
						data.addColumn('number', 'Deficit (en %)');
						for(i = 0; i < ano.length; i++)
							data.addRow([ano[i], pib[i]]);
			
						var options = {
						  width: '80%',
						  height: 630,
						  colors: ['#9eccb3'],
						  hAxis: {titleTextStyle: {color: 'red'}}
						};
						

						var chart = new google.visualization.ColumnChart(document.getElementById('chart_divDeficitA'));
						chart.draw(data, options);
					}
				);
			},
				error: function() { console.log('Uh Oh!'); }		
		});
    }
	
	
	
	
//DEFICIT TRIMESTRAL
	
	
	google.setOnLoadCallback(drawChartDeficitT);
	
    function drawChartDeficitT() {
		var url= "http://pipes.yahoo.com/pipes/pipe.run?_id=59c01403e76af7c6a1eb3f1f1b205dbd&_render=json&numberinput1=4&_callback=?";
		var trimestre = new Array();
		var deficit = new Array();
		  
	    $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            success: function(data) {
				$(data.value.items).each(
					function(){
						trimestre.push($(this)[0].trimestre);
						deficit.push(parseFloat($(this)[0].deficit));
						
						//console.log(trimestre);
						data = new google.visualization.DataTable();;
						data.addColumn('string', 'Trimestre');
						data.addColumn('number', 'Deficit (en %)');
						for(i = 0; i < trimestre.length; i++)
							data.addRow([trimestre[i], deficit[i]]);
			
						var options = {
						  width: '80%',
						  height: 630,
						  colors: ['#9eccb3'],
						  hAxis: {titleTextStyle: {color: 'red'}}
						};
						

						var chart = new google.visualization.ColumnChart(document.getElementById('chart_divDeficitT'));
						chart.draw(data, options);
					}
				);
			},
				error: function() { console.log('Uh Oh!'); }		
		});
    }
	
	
	
	
	
	
	
	
//PRIMA DE RIESGO DIARIA
	
      google.setOnLoadCallback(drawChartPrima);
	
    function drawChartPrima() {
		var url= "http://pipes.yahoo.com/pipes/pipe.run?_id=e6f627ccee4bc84777b232f7952e6129&_render=json&numberinput1=30&_callback=?";
		var fecha = new Array();
		var prima = new Array();
		  
	    $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            success: function(data) {
				$(data.value.items).each(
					function(){
						fecha.push($(this)[0].fecha);
						prima.push(parseFloat($(this)[0].prima));
						
						data = new google.visualization.DataTable();;
						data.addColumn('string', 'Día');
						data.addColumn('number', 'Prima de riesgo');
						for(i = 0; i < fecha.length; i++)
							data.addRow([fecha[i], prima[i]]);
			
						var options = {
						  title: 'Prima de Riesgo diaria',
						  width: '100%',
						  height: 430,
						  colors: ['#9b90c8'],
						  hAxis: {titleTextStyle: {color: 'red'}}
						};

						var chart = new google.visualization.ColumnChart(document.getElementById('chart_divPrima'));
						chart.draw(data, options);
					}
				);
			},
				error: function() { console.log('Uh Oh!'); }		
		});
    }
	  
	
	  
	  
	  
	  