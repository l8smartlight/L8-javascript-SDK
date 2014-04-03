
var L8_serialPort;
var L8_SLCP;

var bAppConsoleLog = false;
	
var sensors_timer = null;


$( document ).ready(function() {

			// UI
			$( "#tabs_app" ).tabs({ active: 0 });
			
			// UI Callbacks
			// Main
			$("#btn_serial_connect").click(serial_connect_click);
			
			$("#btn_led_blue").click(superled_set_click);
			$("#btn_led_green").click(superled_set_click);
			$("#btn_led_red").click(superled_set_click);
			$("#btn_led_off").click(superled_set_click);
			$("#btn_matrix_white").click(matrix_set_click);
			$("#btn_matrix_clear").click(matrix_clear_click);
			$("#btn_matrix_fadeout").click(matrix_fadeout_click);
			
			$("#btn_app_dice").click(app_dice_click);
			$("#btn_app_aurora").click(app_aurora_click);
			$("#btn_app_galaxy").click(app_galaxy_click);
			$("#btn_app_tropical").click(app_tropical_click);
			$("#btn_app_stop").click(app_stop_click);
			
			$("#btn_query_battery").click(query_battery_click);
			
			// Console
			$("#btn_cmd_send").click(cmd_send_click);
			$("#btn_cmd_clear").click(cmd_clear_click);
			$("#chckbox_traces_serial").click(traces_serial_click);
			$("#chckbox_traces_slcp").click(traces_slcp_click);
			$("#chckbox_traces_app").click(traces_app_click);
			
		
			// Sensors
			$("#btn_sensors_start").click(sensors_start_click);
			$("#btn_sensors_stop").click(sensors_stop_click);

		
			L8_serialPort = new SerialPort(serial_connect_cb, serial_disconnect_cb, null, null);
			L8_SLCP = new SLCP({serialPort: L8_serialPort, OnCommand: OnSLCPommand});
	
			
			// Fill select with available ports
			fillPorts();
			
		  });
		  
		  
var window_close = function(){
	// This event does not fire on Chrome Apps  :S
	if( L8_serialPort.isConnected )
		L8_serialPort.disconnect();
}

var serial_connect_click = function() {
	if( L8_serialPort.isConnected )
	{
		$("#btn_serial_connect").val("Disconnecting...");
		$("#btn_serial_connect").attr("disabled", "disabled");
		L8_serialPort.disconnect();
	}
	else
	{
		$("#serial_status").html("");
		$("#btn_serial_connect").val("Connecting...");	
		$("#btn_serial_connect").attr("disabled", "disabled");
		L8_serialPort.connect($('#serial_ports :selected').text(), null);  // Port, bitrate
	}
}
var serial_connect_cb = function(result) {

	if( result )
	{
		// Open success
		$("#btn_serial_connect").removeAttr("disabled");
		$("#btn_serial_connect").val("Disconnect");
		
		// Start SLCP
		L8_SLCP.Start();
	}
	else
	{
		// Open error 
		$("#btn_serial_connect").removeAttr("disabled");
		$("#btn_serial_connect").val("Connect");
		$("#serial_status").html("Error connecting to L8 ("+ $('#serial_ports :selected').text() +")");
	}
}
var serial_disconnect_cb = function(result) {
	$("#btn_serial_connect").val("Connect");
	$("#btn_serial_connect").removeAttr("disabled");
}
		  

// Callback called when a new command arrives from L8
var OnSLCPommand = function(command){
	
	appConsoleLog("log", "OnSLCPommand: id: " + command.id);
	
	if( $( "#tabs_app" ).tabs('option', 'active') == 2 )  // Update console only if console tab is active
		$("#txtarea_cmd_console").val( $("#txtarea_cmd_console").val() + "\n"+ " < " + JSON.stringify(command) );
	
	// Filter commands to update UI
	switch( command.id )
	{
		case SLCP_COMMAND.CMD_L8_VOLTAGE_RESPONSE:
			$("#span_battery").html(command.info.percent + "%");
			break;
			
		case SLCP_COMMAND.CMD_L8_BATCHG_RESPONSE:
			$("#span_charge").html(command.info.charge_status);
			break;
			
			
		//**************   Sensors
		case SLCP_COMMAND.CMD_L8_TEMP_RESPONSE:
			$("#span_sensors_temp_c").html(command.info.temp_c + " ºC");
			$("#span_sensors_temp_f").html(command.info.temp_f + " ºF");
			break;
		case SLCP_COMMAND.CMD_L8_MCUTEMP_RESPONSE:
			$("#span_sensors_tempmcu_c").html(command.info.temp_c + " ºC");
			$("#span_sensors_tempmcu_f").html(command.info.temp_f + " ºF");
			break;
		
		case SLCP_COMMAND.CMD_L8_ACC_RESPONSE:
			$("#span_sensors_acc_x").html( " x: " + command.info.x + " g" );
			$("#span_sensors_acc_y").html( " y: " + command.info.y + " g" );
			$("#span_sensors_acc_z").html( " z: " + command.info.z + " g" );
			break;
		
		case SLCP_COMMAND.CMD_L8_AMBIENT_RESPONSE:
			$("#span_sensors_ambient").html( command.info.percent + " %" );
			break;
			
		case SLCP_COMMAND.CMD_L8_PROX_RESPONSE:
			$("#span_sensors_prox").html( command.info.percent + " %" );
			break;
			
		case SLCP_COMMAND.CMD_L8_MIC_RESPONSE:
			$("#span_sensors_noise").html( command.info.mic);
			break;
				
		default:
			break;
	}
	
}


var fillPorts = function() {
	if( !L8_serialPort.systemPorts )
	{
		setTimeout(fillPorts, 100);
		return;
	}
	for (var i=0; i<L8_serialPort.systemPorts.length; i++)
		{
			 $('#serial_ports')
				 .append($("<option></option>")
				 .attr("value",L8_serialPort.systemPorts[i].path)
				 .text(L8_serialPort.systemPorts[i].path)); 
		}
}

var superled_set_click = function(eventObject){

	if( !L8_serialPort.isConnected ) {	
			modalDialog("#dialog_not_connected");
			return;
		}
	
	var color;
	
	
	switch(eventObject.target.id)
	{
		case "btn_led_blue":
			color = {b:15,g:0,r:0};
			break;
		case "btn_led_red":
			color = {b:0,g:0,r:15};
			break;
		case "btn_led_green":
			color = {b:0,g:15,r:0};
			break;
		case "btn_led_off":
		default:
			color = {b:0,g:0,r:0};
			break;
	}
	
	L8_SLCP.SetSuperLed(color);

}

var matrix_set_click = function(eventObject){
	
	if( !L8_serialPort.isConnected ) {	
		modalDialog("#dialog_not_connected");
		return;
	}
		
	var matrix = new Array(8);
	
    for (var i = 0; i < 8; i++)
	{
		matrix[i] = new Array(8);
		for (var j = 0; j < 8; j++)
		{
			matrix[i][j] = new Object();
			matrix[i][j].r = 15;
			matrix[i][j].g = 15;
			matrix[i][j].b = 15;
		}
	}

	L8_SLCP.SetRGBMatrix(matrix);

}

var matrix_clear_click = function(eventObject){

	if( !L8_serialPort.isConnected ) {	
		modalDialog("#dialog_not_connected");
		return;
	}

	L8_SLCP.ClearRGBMatrix(false);
}


var matrix_fadeout_click = function(eventObject){

	if( !L8_serialPort.isConnected ) {	
		modalDialog("#dialog_not_connected");
		return;
	}
	
	
	L8_SLCP.ClearRGBMatrix(true);
}

var query_battery_click = function(eventObject){

	if( !L8_serialPort.isConnected ){	
		modalDialog("#dialog_not_connected");
		return;
	}
	
	L8_SLCP.QueryL8Voltage();
	L8_SLCP.QueryL8ChargeStatus();
}



var app_dice_click = function(){
	
	if( !L8_serialPort.isConnected ){	
		modalDialog("#dialog_not_connected");
		return;
	}
	
	L8_SLCP.AppStop();
	L8_SLCP.AppRun_Dice({b:15,g:0,r:0});
}
var app_aurora_click = function(){

	if( !L8_serialPort.isConnected ) {	
		modalDialog("#dialog_not_connected");
		return;
	}
	
	L8_SLCP.AppStop();
	L8_SLCP.AppRun_LightMode(4,30,true);
}


var app_galaxy_click = function(){

	if( !L8_serialPort.isConnected ) {	
		modalDialog("#dialog_not_connected");
		return;
	}
	
	L8_SLCP.AppStop();
	L8_SLCP.AppRun_LightMode(3,30,true);
}


var app_tropical_click = function(){

	if( !L8_serialPort.isConnected ) {	
		modalDialog("#dialog_not_connected");
		return;
	}
	
	L8_SLCP.AppStop();
	L8_SLCP.AppRun_LightMode(2,30,true);
}


var app_stop_click = function(){

	if( !L8_serialPort.isConnected ) {	
		modalDialog("#dialog_not_connected");
		return;
	}
	
	L8_SLCP.AppStop();
}


var sensors_start_click = function(){

	if( !L8_serialPort.isConnected ){	
		modalDialog("#dialog_not_connected");
		return;
	}
	
	if( sensors_timer != null ) return;
	
	sensors_timer = setInterval(query_sensors, $("#sel_sensors_delay").val());
}

var sensors_stop_click = function(){
	clearInterval(sensors_timer);
	sensors_timer = null;
}

var query_sensors = function(){
	L8_SLCP.QueryL8Temp();
	L8_SLCP.QueryL8MCUTemp();
	L8_SLCP.QueryL8AmbientLight();
	L8_SLCP.QueryL8Proximity();
	L8_SLCP.QueryL8Acc();
	L8_SLCP.QueryL8Noise();
}



	
var cmd_send_click = function(){

	if( !L8_serialPort.isConnected ) {	
		modalDialog("#dialog_not_connected");
		return;
	}

	var text_cmd =  jQuery("#txt_command").val();
	text_cmd.replace(":", "");
	text_cmd.replace("-", "");
	text_cmd.replace(" ", "");
	text_cmd.replace("\"", "");

	if( (text_cmd.length % 2) != 0 ) return;
	
	L8_SLCP.SendRawCommand( text_cmd );
	
	$("#txtarea_cmd_console").val( $("#txtarea_cmd_console").val() + "\n"+ " > " + text_cmd );
}


var cmd_clear_click = function(){
	jQuery("#txt_command").val("")
}




var traces_serial_click = function(){
	if($("#chckbox_traces_serial").is(':checked'))
		L8_serialPort.bConsoleLog = true;
	else	
		L8_serialPort.bConsoleLog = false;
}
var traces_slcp_click = function(){
	if($("#chckbox_traces_slcp").is(':checked'))
		L8_SLCP.bConsoleLog = true;
	else	
		L8_SLCP.bConsoleLog = false;
}
var traces_app_click = function(){
	if($("#chckbox_traces_app").is(':checked'))
		bAppConsoleLog = true;
	else	
		bAppConsoleLog = false;
}

var modalDialog = function(dlg){
	$( dlg ).dialog({modal: true, resizable: false, buttons: {
			Ok: function() {
			  $( this ).dialog( "close" );
			}}});
		return;
}



var appConsoleLog = function (type, text){
	if( bAppConsoleLog)
	{
		if( type=="log") console.log("[App] " + text);
		else if( type=="warn") console.warn("[App] " + text);
		else if( type=="error") console.error("[App] " + text);
	}
}