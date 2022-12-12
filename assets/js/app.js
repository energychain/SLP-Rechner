const fnctUC1 = function(e) {
	e.preventDefault();
	$('#resultUC1').html("<span class='text-muted'>Kleiner Augenblick. Berechnung läuft...</span>");
	$('#modalUC1').modal('show')
	const von = new Date($('#von').val()).getTime();
	const bis = new Date($('#bis').val()).getTime();
	const consumption = $('#ja').val() * 1;

	$.getJSON("https://api.corrently.io/v2.0/loadprofile/retrieve?from="+von+"&to="+bis+"&consumption="+consumption,function(data) {
		let html = '';
		html += '<h3 style="margin-top:25px">Segment: Privat</h3>';
		html += '<div class="row bg-light">';
			html += '<div class="col-2">';
				html += 'H0'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Haushalte</strong><br/>';
				html += '&nbsp;'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.h0)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<h3 style="margin-top:25px">Segment: Gewerbe</h3>';
		html += '<div class="row bg-light" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G0'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Gewerbe allgemein</strong><br/>';
				html += 'Gewogener Mittelwert der Profile G1-G6'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g0)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G1'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Gewerbe werktags 8–18 Uhr</strong><br/>';
				html += 'Büros, Arztpraxen, Werkstätten, Verwaltungseinrichtungen'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g1)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row bg-light" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G2'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Gewerbe mit starkem bis überwiegendem Verbrauch in den Abendstunden</strong><br/>';
				html += 'Sportvereine, Fitnessstudios, Abendgaststätten, Tanzschulen'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g2)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G3'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Gewerbe durchlaufend</strong><br/>';
				html += 'Kühlhäuser, Pumpen, Kläranlagen, Garagen'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g3)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row bg-light" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G4'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Laden/Friseur</strong><br/>';
				html += 'Shop, Kleingewerbe, Supermarkt (klein), Schuhgeschäft '
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g4)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G5'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Bäckerei mit Backstube</strong><br/>';
				html += '&nbsp;'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g5)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row bg-light" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G6'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Wochenendbetrieb</strong><br/>';
				html += 'Kino, Flugschule, Vereinsheim'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g6)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<h3 style="margin-top:25px">Segment: Landwirtschaft</h3>';
		html += '<div class="row bg-light" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'L0'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Landwirtschaftsbetriebe allgemein</strong><br/>';
				html += 'Gewogener Mittelwert der Profile L1 und L2'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.l0)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'L1'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>	Landwirtschaftsbetriebe mit Milchwirtschaft/Nebenerwerbs-Tierzucht</strong><br/>';
				html += '&nbsp;'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.l1)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row bg-light" style="margin-top:15px">';
		html += '<div class="col-2">';
			html += 'L2'
		html += '</div>';
		html += '<div class="col-7">';
			html += '<strong>Übrige Landwirtschaftsbetriebe</strong><br/>';
			html += '&nbsp;'
		html += '</div>';
		html += '<div class="col-auto text-end">';
			html += '<h4 class="text-end">'+Math.round(data.output.sum.l2)+'&nbsp;kWh</h4>';
		html += '</div>';
	html += '</div>';
		$('#resultUC1').html(html);
	});
	return false;
}

const fnctUC2 = function(e) {
	e.preventDefault();
	$('#resultUC1').html("<span class='text-muted'>Kleiner Augenblick. Berechnung läuft...</span>");
	$('#modalUC1').modal('show')
	const von = new Date($('#vonJA').val()).getTime();
	const bis = new Date($('#bisJA').val()).getTime();
	const consumption = $('#pa').val() * 1;

	$.getJSON("https://api.corrently.io/v2.0/loadprofile/estimate?from="+von+"&to="+bis+"&consumption="+consumption,function(data) {
		let html = '';
		html += '<h3 style="margin-top:25px">Segment: Privat</h3>';
		html += '<div class="row bg-light">';
			html += '<div class="col-2">';
				html += 'H0'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Haushalte</strong><br/>';
				html += '&nbsp;'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.h0)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<h3 style="margin-top:25px">Segment: Gewerbe</h3>';
		html += '<div class="row bg-light" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G0'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Gewerbe allgemein</strong><br/>';
				html += 'Gewogener Mittelwert der Profile G1-G6'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g0)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G1'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Gewerbe werktags 8–18 Uhr</strong><br/>';
				html += 'Büros, Arztpraxen, Werkstätten, Verwaltungseinrichtungen'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g1)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row bg-light" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G2'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Gewerbe mit starkem bis überwiegendem Verbrauch in den Abendstunden</strong><br/>';
				html += 'Sportvereine, Fitnessstudios, Abendgaststätten, Tanzschulen'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g2)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G3'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Gewerbe durchlaufend</strong><br/>';
				html += 'Kühlhäuser, Pumpen, Kläranlagen, Garagen'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g3)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row bg-light" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G4'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Laden/Friseur</strong><br/>';
				html += 'Shop, Kleingewerbe, Supermarkt (klein), Schuhgeschäft '
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g4)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G5'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Bäckerei mit Backstube</strong><br/>';
				html += '&nbsp;'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g5)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row bg-light" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'G6'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Wochenendbetrieb</strong><br/>';
				html += 'Kino, Flugschule, Vereinsheim'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.g6)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<h3 style="margin-top:25px">Segment: Landwirtschaft</h3>';
		html += '<div class="row bg-light" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'L0'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>Landwirtschaftsbetriebe allgemein</strong><br/>';
				html += 'Gewogener Mittelwert der Profile L1 und L2'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.l0)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row" style="margin-top:15px">';
			html += '<div class="col-2">';
				html += 'L1'
			html += '</div>';
			html += '<div class="col-7">';
				html += '<strong>	Landwirtschaftsbetriebe mit Milchwirtschaft/Nebenerwerbs-Tierzucht</strong><br/>';
				html += '&nbsp;'
			html += '</div>';
			html += '<div class="col-auto text-end">';
				html += '<h4 class="text-end">'+Math.round(data.output.sum.l1)+'&nbsp;kWh</h4>';
			html += '</div>';
		html += '</div>';
		html += '<div class="row bg-light" style="margin-top:15px">';
		html += '<div class="col-2">';
			html += 'L2'
		html += '</div>';
		html += '<div class="col-7">';
			html += '<strong>Übrige Landwirtschaftsbetriebe</strong><br/>';
			html += '&nbsp;'
		html += '</div>';
		html += '<div class="col-auto text-end">';
			html += '<h4 class="text-end">'+Math.round(data.output.sum.l2)+'&nbsp;kWh</h4>';
		html += '</div>';
	html += '</div>';
		$('#resultUC1').html(html);
	});
	return false;
}

$(document).ready(function() {
	$('#uc1_Periodenverbrauch').on('submit',fnctUC1);
	$('#uc2_Jahresverbrauch').on('submit',fnctUC2);

	$('#von').val(new Date(new Date().getTime()-(30*86400000)).toISOString().substring(0,10));
	$('#bis').val(new Date().toISOString().substring(0,10));
	$('#btnTglUC1').on('click',function() {
		if($('#tglUC1').html()=="zeigen") {
			$('#tglUC1').html('ausblenden');
		} else {
			$('#tglUC1').html('zeigen');
		}
	});
	const recalc = function() {
		$('#pa').val(Math.abs($('#zaVon').val()-$('#zaBis').val()));
	}

	$('#zaVon').on('change',function() {
		if($('#zaVon').val()>$('#zaBis').val()) {
			$('#zaBis').val((1 * $('#zaVon').val())+1);
		}
		recalc();
	});
	
	$('#zaBis').on('change',recalc);
});