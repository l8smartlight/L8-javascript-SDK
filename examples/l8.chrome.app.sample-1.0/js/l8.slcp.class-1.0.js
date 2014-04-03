/*!
 * L8 SLCP JavaScript Library v1.0
 * http://www.l8smartlight.com/
 *
 * Copyright 2014 SmartLight Inc.
 *
 * Date: 2014-04-01
 */
 
 
 
// Declared here so this is public

	var SLCP_COMMAND = {
		CMD_ERR : 0xFF,
		CMD_OK : 0x00,
        CMD_PING : 0x01,
        CMD_PONG : 0x02,
		CMD_RESET : 0x06,
        CMD_FLASH_WRITE : 0x41,
        CMD_FLASH_READ : 0x42,
		CMD_L8_LED_SET : 0x43,
        CMD_L8_MATRIX_SET : 0x44,
		CMD_L8_MATRIX_OFF : 0x45,
		CMD_L8_VOLTAGE_QUERY: 0x46,
		CMD_L8_VOLTAGE_RESPONSE: 0x47,
		CMD_L8_TEMP_QUERY : 0x48,
        CMD_L8_TEMP_RESPONSE : 0x49,
        CMD_L8_BOOTLOADER : 0x4A,
		CMD_L8_SUPERLED_SET : 0x4B,
		CMD_L8_ACC_QUERY : 0x4C,
		CMD_L8_ACC_RESPONSE : 0x4D,

		CMD_L8_UID_QUERY : 0x4E,
		CMD_L8_UID_RESPONSE : 0x4F,

		CMD_L8_AMBIENT_QUERY : 0x50,
		CMD_L8_AMBIENT_RESPONSE : 0x51,

		CMD_L8_PROX_QUERY : 0x52,
		CMD_L8_PROX_RESPONSE : 0x53,

		CMD_L8_TOTALMEM_QUERY : 0x54,
		CMD_L8_TOTALMEM_RESPONSE : 0x55,
		CMD_L8_FREEMEM_QUERY : 0x56,
		CMD_L8_FREEMEM_RESPONSE : 0x57,

		CMD_L8_MODE_SET : 0x58,
		CMD_L8_MODE_QUERY : 0x59,
		CMD_L8_MODE_RESPONSE : 0x5A,

		CMD_L8_VERSIONS_QUERY : 0x60,
		CMD_L8_VERSIONS_RESPONSE : 0x61,

		CMD_L8_BUTTON_QUERY : 0x62,
		CMD_L8_BUTTON_RESPONSE : 0x63,

		CMD_L8_MIC_QUERY : 0x64,
		CMD_L8_MIC_RESPONSE : 0x65,

		CMD_L8_VBUS_QUERY : 0x66,
		CMD_L8_VBUS_RESPONSE : 0x67,

		CMD_L8_MCUTEMP_QUERY : 0x68,
		CMD_L8_MCUTEMP_RESPONSE : 0x69,

		CMD_L8_STORE_L8Y : 0x6A,
		CMD_L8_STORE_L8Y_RESPONSE : 0x6B,
		CMD_L8_READ_L8Y : 0x6C,
		CMD_L8_READ_L8Y_RESPONSE : 0x6D,
		CMD_L8_SET_STORED_L8Y : 0x6E,
		CMD_L8_DELETE_L8Y : 0x6F,

		CMD_L8_STORE_FRAME : 0x70,
		CMD_L8_STORE_FRAME_RESPONSE : 0x71,
		CMD_L8_READ_FRAME : 0x72,
		CMD_L8_READ_FRAME_RESPONSE : 0x73,
		CMD_L8_DELETE_FRAME : 0x74,

		CMD_L8_BATCHG_QUERY : 0x75,
		CMD_L8_BATCHG_RESPONSE : 0x76,

		CMD_L8_STORE_ANIM : 0x77,
		CMD_L8_STORE_ANIM_RESPONSE : 0x78,
		CMD_L8_READ_ANIM : 0x79,
		CMD_L8_READ_ANIM_RESPONSE : 0x7A,
		CMD_L8_DELETE_ANIM : 0x7B,
		CMD_L8_PLAY_ANIM : 0x7C,
		CMD_L8_STOP_ANIM : 0x7D,

		CMD_L8_DELETE_USER_MEMORY : 0x7E,
		CMD_L8_DISP_CHAR : 0x7F,

		CMD_L8_SET_ORIENTATION : 0x80,

		CMD_L8_APP_RUN : 0x81,
		CMD_L8_APP_STOP : 0x82,

		CMD_L8_SET_TEXT : 0x83,

		CMD_L8_TRACE_MSG : 0x84,
		CMD_L8_INIT_STATUS_QUERY : 0x85,

		CMD_L8_SET_AUTOROTATE : 0x86,

		CMD_L8_TIME_SET : 0x87,
		CMD_L8_TIME_QUERY : 0x88,
		CMD_L8_TIME_RESPONSE : 0x89,

		CMD_L8_ORIENTATION_QUERY : 0x8A,
		CMD_L8_ORIENTATION_RESPONSE : 0x8B,

		CMD_L8_NUML8IES_QUERY : 0x8C,
		CMD_L8_NUML8IES_RESPONSE : 0x8D,
		CMD_L8_NUMANIMS_QUERY : 0x8E,
		CMD_L8_NUMANIMS_RESPONSE : 0x8F,
		CMD_L8_NUMFRAMES_QUERY : 0x90,
		CMD_L8_NUMFRAMES_RESPONSE : 0x91,

		CMD_L8_NOTIFAPP_STORE : 0x92,
		CMD_L8_NOTIFAPP_QUERY : 0x93,
		CMD_L8_NOTIFAPP_RESPONSE : 0x94,
		CMD_L8_NOTIFAPPS_NUM_QUERY : 0x95,
		CMD_L8_NOTIFAPPS_NUM_RESPONSE : 0x96,
		CMD_L8_NOTIFAPP_ENABLE : 0x97,
		CMD_L8_NOTIFAPP_DELETE : 0x98,
		CMD_L8_SET_NOTIFICATION : 0x99,
		CMD_L8_SET_LOW_BRIGHTNESS : 0x9A,

		CMD_L8_FRAMEGRAB_QUERY :0x9B,
		CMD_L8_FRAMEGRAB_RESPONSE :0x9C,
		
		CMD_L8_POWEROFF:0x9D,
		CMD_L8_STATUSLEDS_ENABLE:0x9E,
		
		CMD_L8_NOISE_THRESHOLDS_SET:0x9F,
		CMD_L8_PROX_THRESHOLDS_SET:0xA0,
		CMD_L8_AMB_THRESHOLDS_SET:0xA1,

		CMD_L8_SENSORS_THRESHOLDS_QUERY:0xA2,
		CMD_L8_SENSORS_THRESHOLDS_RESPONSE:0xA3,
		
		CMD_L8_NOTIFAPPS_ENABLE_ALL:0xA4,
		CMD_L8_NOTIFAPPS_SILENCE : 0xA5,
		CMD_L8_NOTIFAPPS_SILENCE_QUERY : 0xA6,
		CMD_L8_NOTIFAPPS_SILENCE_RESPONSE : 0xA7
	};
	
	
	var L8_TRACE_ERROR = {

		GLOBAL_ERROR : 0xFF,		//"Global error"

		FLASH_WRITE_ERROR : 0x01,		//"Error writing flash"
		FLASH_READ_ERROR : 0x02,		//"Error reading flash"


		TEMP_SENSOR_ERROR : 0x03,		//"Temperature sensor error"
		MCU_TEMP_SENSOR_ERROR : 0x04,		//"Internal MCU temp sensor error"

		BATTERY_ERROR : 0x05,		//"Battery error"
		CHARGING_ERROR : 0x06,		//"Battery charging error"


		BT_INIT_ERROR : 0x07,		//"Error initializing Bluetooth hardware"

		ACC_SENSOR_ERROR : 0x08,		//"Error initializing Accelerometer sensor"
		AMB_SENSOR_ERROR : 0x09,		//"Error initializing Ambient/Prox. sensor"

		NOISE_SENSOR_ERROR : 0x0A,		//"Error reading noise sensor"
		UUID_READ_ERROR : 0x0B		//"Error while retrieving device ID"

	};

	var L8_TRACE_INFO = {

		BT_INIT_OK : 0x01,                //"Bluetooth hardware init success"

		ACC_SENSOR_INIT_OK : 0x02,                //"Accelerometer sensor init success"
		AMB_SENSOR_INIT_OK : 0x03,                //"Ambient/Prox, sensor init success"


		BATTERY_80PERCENT : 0x10,                //"Battery below 80%"
		BATTERY_50PERCENT : 0x11,                //"Battery below 50%"
		BATTERY_30PERCENT : 0x12,                //"Battery below 30%"
		BATTERY_20PERCENT : 0x13,                //"Battery below 20%"
		BATTERY_10PERCENT : 0x14,                //"Battery below 10%"
		BATTERY_05PERCENT : 0x15,                //"Battery below 5%"

		BATTERY_CHARGING : 0x16,                //"Battery is now charging"
		BATTERY_CHARGED : 0x17                 //"Battery is fully charged"
	};
	
	var L8_TRACE_ERROR_TEXTS = {
		0x01 : "Error writing flash",
		0x02 : "Error reading flash",
		0x03 : "Temperature sensor error",
		0x04 : "Internal MCU temp sensor error",
		0x05 : "Battery error",
		0x06 : "Battery charging error",
		0x07 : "Error initializing Bluetooth hardware",
		0x08 : "Error initializing Accelerometer sensor",
		0x09 : "Error initializing Ambient/Prox. sensor",
		0x0A : "Error reading noise sensor",
		0x0B : "Error while retrieving device ID",
		
		0xFF : "Generic Error"
	};
	
	var L8_TRACE_INFO_TEXTS = {
		0x01 : "Bluetooth hardware init success",
		0x02 : "Accelerometer sensor init success",
		0x03 : "Ambient/Prox, sensor init success",

		0x10 : "Battery below 80%",
		0x11 : "Battery below 50%",
		0x12 : "Battery below 30%",
		0x13 : "Battery below 20%",
		0x14 : "Battery below 10%",
		0x15 : "Battery below 5%",
		0x16 : "Battery is now charging",
		0x17 : "Battery is fully charged"
	};
		
	
function SLCP( options ) {

	var HEADER_MSB = 0xAA;
	var HEADER_LSB = 0x55;
	var MAX_SLCP_PAYLOAD = 255;
	
	var send_time = 20;		// 20ms the send thread will extract 1 comand each time, so maximun rate is 1 command every send_time
	
	//this.write = WriteFunction;
	//this.read = ReadFunction;
	this.serialPort = options.serialPort;
	this.OnCommand = options.OnCommand;

	this.isRunning = false;
	this.SendCommandsQueue = [];  	  // .push() to insert and  .shift() to extract
	this.ReceiveCommandsQueue = [];   // .push() to insert and  .shift() to extract

	
	this.SLCPSendT = null;
	this.SLCPListener = null;
	
	this.bConsoleLog = true;	// Enable/disable console logging
	
	
	//var SLCPCommand = {     
	//	id: 0,
	//	info : 0
	//};

	//var RGBLed = {
    //   r:0,
    //   g:0,
    //   b:0,
    //}	
	
	
	
	this.SendPing = function(){
		var cmd = new ArrayBuffer(1)
		var cmdView = new Uint8Array(cmd);
		
		cmdView[0] = SLCP_COMMAND.CMD_PING;
		
		this.SendEnqueueCommand(cmd);
	}
	
	
	
	this.Start = function() {
		if (this.isRunning == true)
			return;

		this.isRunning = true;
		
		// Subscribe to serialPort receive event
		this.serialPort.onReceive_user_cb = this.OnReceive;
		
		var self = this;
		
		SLCPSendT = setInterval(function(){ self.SendThread(self) }, send_time);
		//SLCPListener setInterval(this.ListenerThread, listener_time);
	}
	
	this.Stop = function() {
	
		this.isRunning = false;

		clearInterval(SLCPSendT);
		//clearInterval(SLCPListener);
	}
		
	
	this.SendThread = function(pThis) {
		if( pThis.SendCommandsQueue === undefined || pThis.SendCommandsQueue.length == 0 )
			return;
			
		var cmd;
		
		// Send all commands in queue
		//while( this.SendCommandsQueue.length > 0 )	
		//{
			cmd = pThis.SendCommandsQueue.shift();		// small send_time and pop 1 command at a time
														// or pop all commands with a longer send_time
			pThis.Send(cmd);
		//}
	}
	
	this.Send = function(data){
		var frame = new ArrayBuffer(data.byteLength + 2 + 1 + 1); // data + header + length + checksum
		var frameView=new Uint8Array(frame);
        var checksum;
		
		frameView[0] = HEADER_MSB;
		frameView[1] = HEADER_LSB;
		frameView[2] = data.byteLength;
		
		if( typeof data[0] == "undefined" )
		{
			var dataView = (new Uint8Array(data));
			for(var i=0; i<dataView.length; i++)
				frameView[3+i] = dataView[i];
				
			checksum = this.crc8calc(dataView);
		}
		else
		{
			for(var i=0; i<data.byteLength; i++)
				frameView[3+i] = data[i];
				
			checksum = this.crc8calc(data);
		}
		
		frameView[3+data.byteLength] = checksum;
		
		
		if( this.serialPort ) this.serialPort.send(frame);
	}
	
	
	this.SendEnqueueCommand = function(cmd) {
		if( !this.serialPort.isConnected )
			this.consoleLog("warn", "Device is not connected");
		
		this.SendCommandsQueue.push(cmd);
	}
	
	
	var SLCP_process_state = 0;
	var SLCP_process_length = 0;
	var SLCP_process_cnt = 0;
	var SLCP_process_rcvd_crc8 = 0;
	 
	this.OnReceive = function(data){
		// data can be a complete command, multiple command or just part of a command
		
		// Enqueue data
		this.ReceiveCommandsQueue.push(data);
		
		var current_data = new ArrayBuffer(0);
		
		// Extract all data from queue and unify it
		while( this.ReceiveCommandsQueue.length > 0 )
		{
			// Extrac piece of data and append
			var tmp;
			tmp = this.ReceiveCommandsQueue.shift();
			current_data = this._appendBuffer(current_data, tmp);
		}
		
		//  Process extracted data to find complete commands
		var current_data_view = new Uint8Array(current_data); // Aux bufView for current_Data
		var tmp_buffer;
		
		for( var i=0; i<current_data_view.length; i++)
		{
			var c = current_data_view[i];
			
			switch( SLCP_process_state )
			{
				case 0:
					if (c == HEADER_MSB)
						SLCP_process_state++;
					break;
				case 1:
					if (c == HEADER_LSB)
						SLCP_process_state++;
					else
						SLCP_process_state = 0;
					break;
				 case 2:
					SLCP_process_length = c;
					tmp_buffer = new ArrayBuffer(SLCP_process_length);
					SLCP_process_state++;
					SLCP_process_cnt = 0;
					if (SLCP_process_length > MAX_SLCP_PAYLOAD)
						SLCP_process_state = 0;
					break;
				case 3:
					tmp_buffer[SLCP_process_cnt] = c;
					SLCP_process_cnt++;
					if (SLCP_process_cnt == SLCP_process_length)
						SLCP_process_state++;
					break;
				case 4:
					SLCP_process_rcvd_crc8 = c;
					var calc_crc8 = this.crc8calc(tmp_buffer);					
					SLCP_process_state = 0;
					
					if (SLCP_process_rcvd_crc8 != calc_crc8)
						break;
					
					// If command found, process it
					this.ProcessCommand(tmp_buffer);
					
					break;
			}
			
		}
	}
	
	
	this.SendRawCommand = function(str_command) {		
		var cmd = hexstr2ab(str_command);
		
		this.SendEnqueueCommand(cmd);
	}
	
	// rgbi : { x: 0-7, y: 0-7, color: { b: 0-15, g: 0-15, r: 0-15} }
	this.SetRGBLed = function(rgbi) {
		var cmd = new ArrayBuffer(6);
		cmd[0] = SLCP_COMMAND.CMD_L8_LED_SET;
		cmd[1] = rgbi.x;
		cmd[2] = rgbi.y;
		cmd[3] = rgbi.color.b;
		cmd[4] = rgbi.color.g;
		cmd[5] = rgbi.color.r;
		
		this.SendEnqueueCommand(cmd);
	}
	
	// color: { b: 0-15, g: 0-15, r: 0-15 } 
	this.SetSuperLed = function(color){
		var cmd = new ArrayBuffer(4)
		var cmdView = new Uint8Array(cmd);
	
		cmd[0] = SLCP_COMMAND.CMD_L8_SUPERLED_SET;
		cmd[1] = color.b;
		cmd[2] = color.g;
		cmd[3] = color.r;
		
		this.SendEnqueueCommand(cmd);
	}
	
	 this.SetStoredLighty = function(idx){
		var cmd = new ArrayBuffer(2);
		cmd[0] = SLCP_COMMAND.CMD_L8_SET_STORED_L8Y;
		cmd[1] = idx;

		this.SendEnqueueCommand(cmd);
	}
	
	this.DeleteStoredLighty = function(idx){
		var cmd = new ArrayBuffer(2);
		cmd[0] = SLCP_COMMAND.CMD_L8_DELETE_L8Y;
		cmd[1] = idx;

		this.SendEnqueueCommand(cmd);
	}
	
	this.ReadStoredLighty = function(idx) {
		var cmd = new ArrayBuffer(2);
		cmd[0] = SLCP_COMMAND.CMD_L8_READ_L8Y;
		cmd[1] = idx;

		this.SendEnqueueCommand(cmd);
	}
	
		
	this.QueryL8Voltage = function(){
		var cmd = new ArrayBuffer(1)
		var cmdView = new Uint8Array(cmd);
	
		cmd[0] = SLCP_COMMAND.CMD_L8_VOLTAGE_QUERY;

		this.SendEnqueueCommand(cmd);
	}
	
	// matrix = color[8][8]
	this.SetRGBMatrix = function(matrix){
		var index = 1;
		var cmd = new ArrayBuffer(1 + 8 * 8 * 2);
		cmd[0] = SLCP_COMMAND.CMD_L8_MATRIX_SET;
		for (var i = 0; i < 8; i++)
			for (var j = 0; j < 8; j++)
			{
				cmd[index++] = matrix[i][j].b & 0x0f;
				cmd[index++] = ((matrix[i][j].g << 4) & 0xf0) | (matrix[i][j].r & 0x0f);
			}
		this.SendEnqueueCommand(cmd);
	}
	
	this.ClearRGBMatrix = function(fadeOut){
		var cmd = new ArrayBuffer(2);
		cmd[0] = SLCP_COMMAND.CMD_L8_MATRIX_OFF;
		if (fadeOut) cmd[1] = 0x01;
		else cmd[1] = 0x00;
		this.SendEnqueueCommand(cmd);
	}
	
	
	this.StoreL8ty = function(matrix){
		var index = 1;
		var cmd = new ArrayBuffer(1 + 8 * 8 * 2);
		cmd[0] = SLCP_COMMAND.CMD_L8_STORE_L8Y;
		for (var i = 0; i < 8; i++)
			for (var j = 0; j < 8; j++)
			{
				cmd[index++] = matrix[i][j].b & 0x0f;
				cmd[index++] = ((matrix[i][j].g << 4) & 0xf0) | (matrix[i][j].r & 0x0f);
			}
		this.SendEnqueueCommand(cmd);
	}
		
	this.StoreFrame = function(matrix){
		var index = 1;
		var cmd = new ArrayBuffer(1 + 8 * 8 * 2);
		cmd[0] = SLCP_COMMAND.CMD_L8_STORE_FRAME;
		for (var i = 0; i < 8; i++)
			for (var j = 0; j < 8; j++)
			{
				cmd[index++] = matrix[i][j].b & 0x0f;
				cmd[index++] = (matrix[i][j].g << 4 & 0xf0) | (matrix[i][j].r & 0x0f);
			}
		this.SendEnqueueCommand(cmd);
	}
	
	
	this.SetText = function(text, loop, speed, color){
		var cmd =  new ArrayBuffer(1 + 1 + 1 + 3 + text.length);
		cmd[0] = SLCP_COMMAND.CMD_L8_SET_TEXT;
		cmd[1] = 0; if (loop) cmd[1] = 1;
		cmd[2] = speed;
		cmd[3] = (color.r & 0x0f);
		cmd[4] = (color.g & 0x0f);
		cmd[5] = (color.b & 0x0f);

		for (var i = 0; i < text.Length; i++)
			cmd[i + 6] = text[i];

		this.SendEnqueueCommand(cmd);
	}
	
	this.SendPing = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_PING;
		this.SendEnqueueCommand(cmd);
	}
	
	this.SendReset = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_RESET;
		this.SendEnqueueCommand(cmd);
	}
	
	this.QueryL8Voltage = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_VOLTAGE_QUERY;
		this.SendEnqueueCommand(cmd);
	}
	
	this.QueryL8ChargeStatus = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_BATCHG_QUERY;
		this.SendEnqueueCommand(cmd);
	}
	
	this.QueryL8VBUSVoltage = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_VBUS_QUERY;
		this.SendEnqueueCommand(cmd);
	}

	this.QueryL8Temp = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_TEMP_QUERY;
		this.SendEnqueueCommand(cmd);
	}
		
	this.QueryL8MCUTemp = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_MCUTEMP_QUERY;
		this.SendEnqueueCommand(cmd);
	}

	this.QueryL8AmbientLight = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_AMBIENT_QUERY;
		this.SendEnqueueCommand(cmd);
	}
	this.QueryL8Proximity = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_PROX_QUERY;
		this.SendEnqueueCommand(cmd);
	}
	this.QueryL8Acc = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_ACC_QUERY;
		this.SendEnqueueCommand(cmd);
	}
	
	this.QueryL8Noise = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_MIC_QUERY;
		this.SendEnqueueCommand(cmd);
	}
	this.QueryL8MCUID = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_UID_QUERY;
		this.SendEnqueueCommand(cmd);
	}
	this.QueryL8Versions = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_VERSIONS_QUERY;
		this.SendEnqueueCommand(cmd);
	}
	this.EnterDFU = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_BOOTLOADER;
		this.SendEnqueueCommand(cmd);
	}

	this.QueryL8InitStatus = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_INIT_STATUS_QUERY;
		this.SendEnqueueCommand(cmd);
	}

	this.EraseUserMemory = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_DELETE_USER_MEMORY;
		this.SendEnqueueCommand(cmd);
	}
		
		
	this.AppStop = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_APP_STOP;
		this.SendEnqueueCommand(cmd);
	}


	// light_mode: 1-Multicolor, 2-Tropical, 3-Galaxy, 4-Aurora
	this.AppRun_LightMode = function(light_mode, delay, superled_inv){
		var cmd = new ArrayBuffer(5);

		cmd[0] = SLCP_COMMAND.CMD_L8_APP_RUN;
		cmd[1] = 2; // App #2 = Light Modes
		cmd[2] = light_mode; 	// 1,2,3,4
		cmd[3] = delay; 		// in ms
		if( superled_inv == true )
			cmd[4] = 1;  // 0-1
		else
			cmd[4] = 0;  // 0-1
		
		this.SendEnqueueCommand(cmd);
	}
	
	// color = { b: 0-15, g: 0-15, r:0-15 }
	this.AppRun_Dice = function(color){
		var cmd = new ArrayBuffer(5);

		cmd[0] = SLCP_COMMAND.CMD_L8_APP_RUN;
		cmd[1] = 0; // App #0 = Dice
		cmd[2] = color.b;	// 0-15
		cmd[3] = color.g; 	// 0-15
		cmd[4] = color.r;  	// 0-15
		
		this.SendEnqueueCommand(cmd);
	}
		
	
	this.GetNumNotifApps = function(){
		var cmd = new ArrayBuffer[1];
		cmd[0] = SLCP_COMMAND.CMD_L8_NOTIFAPPS_NUM_QUERY;
		this.SendEnqueueCommand(cmd);
	}
	
	// int idx,  bool extended
	this.GetNotifApp = function(idx, extended){
		var cmd = new ArrayBuffer(3);
		cmd[0] = SLCP_COMMAND.CMD_L8_NOTIFAPP_QUERY;
		cmd[1] = idx;
		if (extended) cmd[2] = 0x01;
		else cmd[2] = 0x00;
		this.SendEnqueueCommand(cmd);
	}
	
	// bool enable
	this.EnableAllNotifications = function(enable){
		var cmd = new ArrayBuffer(2);
		cmd[0] = SLCP_COMMAND.CMD_L8_NOTIFAPPS_ENABLE_ALL;
		if (enable) cmd[1] = 0x01;
		else cmd[1] = 0x00;
		this.SendEnqueueCommand(cmd);
	}

	 this.QueryNotificationsSilence = function(){
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_NOTIFAPPS_SILENCE_QUERY;
		this.SendEnqueueCommand(cmd);
	}
	
	// bool silence
	this.SetNotificationsSilence = function(silence){
		var cmd = new ArrayBuffer(2);
		cmd[0] = SLCP_COMMAND.CMD_L8_NOTIFAPPS_SILENCE;
		if (silence) cmd[1] = 0x01;
		else cmd[1] = 0x00;
		this.SendEnqueueCommand(cmd);
	}


	// int idx, bool enable
	this.EnableNotifApp = function(idx, enable){
		var cmd = new ArrayBuffer(3);
		cmd[0] = SLCP_COMMAND.CMD_L8_NOTIFAPP_ENABLE;
		cmd[1] = idx;
		if (enable) cmd[2] = 0x01;
		else cmd[2] = 0x00;
		
		this.SendEnqueueCommand(cmd);
	}

	// int brightness: 0,1,2      0-Normal, 1-Mid, 2-Low
	this.SetBrightness = function(brightness){
		var cmd = new ArrayBuffer(2);
		cmd[0] = SLCP_COMMAND.CMD_L8_SET_LOW_BRIGHTNESS;
		cmd[1] = brightness;

		this.SendEnqueueCommand(cmd);
	}
	
	this.GetCurrentMatrix = function()
	{
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_FRAMEGRAB_QUERY;

		this.SendEnqueueCommand(cmd);
	}


	this.PowerOff = function()
	{
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_POWEROFF;

		this.SendEnqueueCommand(cmd);
	}
	
	// bool enable
	this.EnableStatusLeds = function(enable)
	{
		var cmd = new ArrayBuffer(2);
		cmd[0] = SLCP_COMMAND.CMD_L8_STATUSLEDS_ENABLE;
		if (enable) cmd[1] = 0x01;
		else cmd[1] = 0x00;
		this.SendEnqueueCommand(cmd);
	}

	this.QuerySensorTh = function()
	{
		var cmd = new ArrayBuffer(1);
		cmd[0] = SLCP_COMMAND.CMD_L8_SENSORS_THRESHOLDS_QUERY;
	   
		this.SendEnqueueCommand(cmd);
	}

	// sensor:  1-noise, 2-prox, 3-ambient
	this.SetSensorTh = function(sensor, min,  max)
	{
		var cmd = new ArrayBuffer(5);
		if( sensor == 1)
			cmd[0] = SLCP_COMMAND.CMD_L8_NOISE_THRESHOLDS_SET;
		else if(sensor == 2)
			cmd[0] = SLCP_COMMAND.CMD_L8_PROX_THRESHOLDS_SET;
		else
			cmd[0] = SLCP_COMMAND.CMD_L8_AMB_THRESHOLDS_SET;

		cmd[1] = (min >> 8 & 0xFF);
		cmd[2] = (min & 0xFF);
		cmd[3] = (max >> 8 & 0xFF);
		cmd[4] = (max & 0xFF);

		this.SendEnqueueCommand(cmd);
	}
	
	
	
		
	
	this.ProcessCommand = function(cmd){
	
		// If there's no user callback: do nothing
		if (this.OnCommand == null) return;

		var slcp_cmd = new Object();
	
		slcp_cmd.id = cmd[0];
		slcp_cmd.info = new Object;
		
		switch (slcp_cmd.id)
		{
			case SLCP_COMMAND.CMD_L8_VOLTAGE_RESPONSE:
				//info = new ArrayBuffer(3);
				//Array.Copy(cmd, 1, info, 0, 3);
				//rlpcmd.info = info;
				slcp_cmd.info.voltage = (cmd[1] << 8) | cmd[2];  //  mV
				slcp_cmd.info.percent = cmd[3]
				break;
				
			case SLCP_COMMAND.CMD_L8_VBUS_RESPONSE:
				slcp_cmd.info.voltage = (cmd[1] << 8) | cmd[2];  //  mV
				break;
				
			case SLCP_COMMAND.CMD_L8_BATCHG_RESPONSE:
				slcp_cmd.info.charge_code = cmd[1];
				switch(cmd[1])
				{
					case 0x06: slcp_cmd.info.charge_status = "Stand-by"; break;
					case 0x0A: slcp_cmd.info.charge_status = "Charging"; break;
					case 0x0C: slcp_cmd.info.charge_status = "Charge complete"; break;
					case 0x0E: slcp_cmd.info.charge_status = "Fault"; break;
				}
				break;
				
			case SLCP_COMMAND.CMD_L8_TEMP_RESPONSE:
				slcp_cmd.info.temp_c = (cmd[1] << 8) | cmd[2];	// in ºC tenths
				slcp_cmd.info.temp_c /= 10.0;											//  ºC 
				slcp_cmd.info.temp_f = ((9.0 / 5.0) * slcp_cmd.info.temp_c) + 32.0;		//  ºF 
				slcp_cmd.info.temp_f = Math.round(slcp_cmd.info.temp_f * 100) / 100;
				break;
				
			case SLCP_COMMAND.CMD_L8_MCUTEMP_RESPONSE:
				slcp_cmd.info.temp_c = (cmd[1] << 8) | cmd[2];							//  ºC 
				slcp_cmd.info.temp_f = ((9.0 / 5.0) * slcp_cmd.info.temp_c) + 32.0;		//  ºF 
				slcp_cmd.info.temp_f = Math.round(slcp_cmd.info.temp_f * 100) / 100;
				break;
				
			case SLCP_COMMAND.CMD_L8_ACC_RESPONSE:
				slcp_cmd.info.x = cmd[1];  // raw values
				slcp_cmd.info.y = cmd[2];
				slcp_cmd.info.z = cmd[3];
				
				// convert raw to g (gravity accelaration)
				if( slcp_cmd.info.x > 32 ) slcp_cmd.info.x -= 64;
				slcp_cmd.info.x = (slcp_cmd.info.x * 1.5) / 32.0; //  g
				if( slcp_cmd.info.y > 32 ) slcp_cmd.info.y -= 64;
				slcp_cmd.info.y = (slcp_cmd.info.y * 1.5) / 32.0; //  g
				if( slcp_cmd.info.z > 32 ) slcp_cmd.info.z -= 64;
				slcp_cmd.info.z = (slcp_cmd.info.z * 1.5) / 32.0; //  g
				
				
				slcp_cmd.info.x = Math.round(slcp_cmd.info.x * 1000) / 1000;	// Round to 3 decimals
				slcp_cmd.info.y = Math.round(slcp_cmd.info.y * 1000) / 1000;
				slcp_cmd.info.z = Math.round(slcp_cmd.info.z * 1000) / 1000;
				
				slcp_cmd.tilt_status = new Object();

				slcp_cmd.tilt_status.lying = cmd[4];		// 2=up   1=upside-down
				slcp_cmd.tilt_status.orientation = cmd[5];	// 1=up   2=down   5=right   6=left    
				slcp_cmd.tilt_status.tap = cmd[6];			// 0,1
				slcp_cmd.tilt_status.shake = cmd[7];		// 1=shaking   0=not shaking
				break;
				
			case SLCP_COMMAND.CMD_L8_ORIENTATION_RESPONSE:
				slcp_cmd.info.orientation = cmd[1];			// 1=up   2=down   5=right   6=left   
				break;
				
			case SLCP_COMMAND.CMD_L8_UID_RESPONSE:
				slcp_cmd.info.uid = ab2hexstr( cmd );
				slcp_cmd.info.uid = slcp_cmd.info.uid.substring(3); // 12 bytes
				break;
				
			case SLCP_COMMAND.CMD_L8_AMBIENT_RESPONSE:
			case SLCP_COMMAND.CMD_L8_PROX_RESPONSE:
				slcp_cmd.info.raw = (cmd[1] << 8) | cmd[2];  // 0-65535
				slcp_cmd.info.percent = cmd[3];
				slcp_cmd.info.notification = (cmd[4] == 0x01 ? true : false);  // false: requested,  true: L8 event
				break;
				
			case SLCP_COMMAND.CMD_L8_MIC_RESPONSE:
				slcp_cmd.info.mic = (cmd[1] << 8) | cmd[2];  //  0-65535
				break;
				
			case SLCP_COMMAND.CMD_L8_VERSIONS_RESPONSE:
				slcp_cmd.info.sw = cmd[1] + "." + cmd[2] + "." + cmd[3];	// Light OS version,      ej:  1.8.44
				slcp_cmd.info.hw = cmd[4] + "." + cmd[5];					// Hardware version,      ej:  1.15
				slcp_cmd.info.bl = cmd[6] + "." + cmd[7];					// Bootloader versionm,   ej:  1.7
				slcp_cmd.info.fm = cmd[8] + "." + cmd[9];					// Flash Memory version,  ej:  5.2
				break;
				
			case SLCP_COMMAND.CMD_L8_BUTTON_RESPONSE:
				slcp_cmd.info.button = cmd[1];			// 1: pressed      0: released (not pressed)
				break;
				
			case SLCP_COMMAND.CMD_L8_STORE_L8Y_RESPONSE:
			case SLCP_COMMAND.CMD_L8_STORE_FRAME_RESPONSE:
			case SLCP_COMMAND.CMD_L8_STORE_ANIM_RESPONSE:
				slcp_cmd.info.idx = cmd[1];				// idx of the stored l8ty
				break;

			case SLCP_COMMAND.CMD_L8_READ_L8Y_RESPONSE:		
			case SLCP_COMMAND.CMD_L8_READ_FRAME_RESPONSE:
			case SLCP_COMMAND.CMD_L8_FRAMEGRAB_RESPONSE:
				var matrix = new Array(8);
				var idx=1;
				for (var i = 0; i < 8; i++)
				{
					matrix[i] = new Array(8);
					for (var j = 0; j < 8; j++)			
					{
						matrix[i][j] = new Object();
						matrix[i][j].r = cmd[idx] & 0x0F;
						matrix[i][j].g = (cmd[idx+1]>>4) & 0x0F;
						matrix[i][j].b = cmd[idx+1] & 0x0F;
						idx += 2;
					}
				}
				if( slcp_cmd.id == SLCP_COMMAND.CMD_L8_READ_L8Y_RESPONSE )
					slcp_cmd.info.l8y = matrix;
				else
					slcp_cmd.info.frame = matrix;
				break;
			
			case SLCP_COMMAND.CMD_L8_READ_ANIM_RESPONSE:   
				var idx=2;
				slcp_cmd.info.num_frames = cmd[1];
				slcp_cmd.info.frames = new Object;
				for( var i=0; i<slcp_cmd.info.num_frames; i++)
				{
					slcp_cmd.info.frames[i] = new Object;
					slcp_cmd.info.frames[i].idx = cmd[idx++];				// frame idx
					slcp_cmd.info.frames[i].delay = (cmd[idx++]/10.0);		// now in seconds
				}
				break;
				
			case SLCP_COMMAND.CMD_L8_NUML8IES_RESPONSE:
				slcp_cmd.info.num_l8ies = cmd[1];
				break;
				
			case SLCP_COMMAND.CMD_L8_NUMANIMS_RESPONSE:
				slcp_cmd.info.num_anims = cmd[1];
				break;
				
			case SLCP_COMMAND.CMD_L8_NUMFRAMES_RESPONSE:
				slcp_cmd.info.num_frames = cmd[1];
				break;
			
			case SLCP_COMMAND.CMD_L8_NOTIFAPP_RESPONSE:      
				slcp_cmd.info.app_bundle_length = cmd[1];
				var abBundle = new ArrayBuffer(slcp_cmd.info.app_bundle_length);
				//abBundle = cmd.slice(2,(2+slcp_cmd.info.app_bundle_length));
				for( var i=0; i<slcp_cmd.info.app_bundle_length; i++)
					abBundle[i] = cmd[2+i];
					
				slcp_cmd.info.app_bundle = ab2str( abBundle );
				if( cmd.byteLength > ( 1+1+slcp_cmd.info.app_bundle_length+1 ) )  // Extended info
				{
					var matrix = new Array(8);
					var idx=2+slcp_cmd.info.app_bundle_length;
					for (var i = 0; i < 8; i++)
					{
						matrix[i] = new Array(8);
						for (var j = 0; j < 8; j++)			
						{
							matrix[i][j] = new Object();
							matrix[i][j].b = cmd[idx] & 0x0F;
							matrix[i][j].g = (cmd[idx+1]>>4) & 0x0F;
							matrix[i][j].r = cmd[idx+1] & 0x0F;
							idx += 2;
						}
					}
				
					slcp_cmd.info.app_icon = matrix
					slcp_cmd.info.app_superLed = new Object();
					slcp_cmd.info.app_superLed.b = cmd[2+slcp_cmd.info.app_bundle_length+128];
					slcp_cmd.info.app_superLed.g = cmd[2+slcp_cmd.info.app_bundle_length+128+1];
					slcp_cmd.info.app_superLed.r = cmd[2+slcp_cmd.info.app_bundle_length+128+2];
					
					slcp_cmd.info.app_enable = (cmd[2+slcp_cmd.info.app_bundle_length+128+3] == 1 ? true : false );
				}
				else
				{
					slcp_cmd.info.app_enable = (cmd[2+slcp_cmd.info.app_bundle_length] == 1 ? true : false );
				}				
				
				break;
				
			case SLCP_COMMAND.CMD_L8_NOTIFAPPS_NUM_RESPONSE:
				slcp_cmd.info.num_notifApps = cmd[1];			
				break;
				
			case SLCP_COMMAND.CMD_L8_SENSORS_THRESHOLDS_RESPONSE:   
				slcp_cmd.info.noise_th = new Object();
				slcp_cmd.info.noise_th.min = (cmd[1] << 8) | cmd[2];
				slcp_cmd.info.noise_th.max = (cmd[3] << 8) | cmd[4];
				slcp_cmd.info.proximity_th = new Object();
				slcp_cmd.info.proximity_th.min = (cmd[5] << 8) | cmd[6];
				slcp_cmd.info.proximity_th.max = (cmd[7] << 8) | cmd[8];
				slcp_cmd.info.ambient_th = new Object();
				slcp_cmd.info.ambient_th.min = (cmd[9] << 8) | cmd[10];
				slcp_cmd.info.ambient_th.max = (cmd[11] << 8) | cmd[12];
				break;
				
			case SLCP_COMMAND.CMD_L8_NOTIFAPPS_SILENCE_RESPONSE:
				slcp_cmd.info.silenced = ( cmd[1] == 1 ? true : false );
				break;
				
				
			default:
				
				break;
		}
		
		this.consoleLog("log", "Command Received: Raw: (" + cmd.byteLength + " bytes) " + ab2hexstr(cmd) + " / jSON: " + JSON.stringify(slcp_cmd));
		
		// Notify new command to App
		this.OnCommand(slcp_cmd);
	}
	
	
	
	
	this.consoleLog = function (type, text){
		if( this.bConsoleLog)
		{
			if( type=="log") console.log("[SLCP] " + text);
			else if( type=="warn") console.warn("[SLCP] " + text);
			else if( type=="error") console.error("[SLCP] " + text);
		}
	}
	
	
	
	
	this._appendBuffer = function(buffer1, buffer2) {
		  var tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
		  tmp.set(new Uint8Array(buffer1), 0);
		  tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
		  return tmp.buffer;
		};
	
// ===================  CRC ============================
	
		// data is a binary ArrayBuffer
		this.crc8calc = function(data){
			// computes crc value
			var i;
			var j;
			var k;
			var bit;
			var datalen;
			var len;
			var actchar;
			var flag;
			var counter;
			var c;
			var crc = new Array (8+1);
			var mask = new Array (8);
			var hexnum = new Array ("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
			var data;
			var order;
			var polynom = new Array (8);
			var init = new Array (8);
			var xor = new Array (8);

			var result;

			// convert crc order
			order=8;

			// convert crc polynom
			polynom = this.crc_convertentry("07", order);
			if (polynom[0]<0)
				return -1;

			// generate bit mask
			counter = order;
			for (i=7; i>=0; i--) {
				if (counter>=8) mask[i] = 255;
				else mask[i]=(1<<counter)-1;
				counter-=8;
				if (counter<0) counter=0;
			}

			crc = init;
			crc[8] = 0;

			for (i=0; i<order; i++) {
				bit = crc[7-((order-1)>>3)] & (1<<((order-1)&7));
				for (k=0; k<8; k++) {
					crc[k] = ((crc [k] << 1) | (crc [k+1] >> 7)) & mask [k];
					if (bit) crc[k]^= polynom[k];
					}
				}
			//  data = unescape(document.crcform.data.value);
			//data = document.crcform.data.value;
			
			// 
			datalen = data.byteLength;
			len=0;                     // number of data bytes
			crc[8]=0;

			// main loop, algorithm is fast bit by bit type
			for (i=0; i<datalen; i++) {
				//c = data.charCodeAt(i);

				if (i>datalen-1)
					return -2;

				/*ch = parseInt(data.charAt(i++), 16);
				if (isNaN(ch) == true)
					return -3;
				
				c = parseInt(data.charAt(i), 16);
				if (isNaN(c) == true)
					return -4;
				
				c = (c&15) | ((ch&15)<<4);
				*/
				
				c = data[i];
				
				// rotate one data byte including crcmask
				for (j=0; j<8; j++) {
					bit=0;
					if (crc[7-((order-1)>>3)] & (1<<((order-1)&7))) bit=1;
					if (c&0x80) bit^=1;
					c<<=1;
					for (k=0; k<8; k++) {    // rotate all (max.8) crc bytes
						crc[k] = ((crc [k] << 1) | (crc [k+1] >> 7)) & mask [k];
						if (bit) crc[k]^= polynom[k];
						}
				}
				len++;
			}

			// perform xor value
			for (i=0; i<8; i++) crc [i] ^= xor [i];

			// write result
			result = "";

			flag=0;
			for (i=0; i<8; i++) {
				actchar = crc[i]>>4;
				if (flag || actchar) {
					result+= hexnum[actchar];
					flag=1;
				}

				actchar = crc[i] & 15;
				if (flag || actchar || i==7) {
					result+= hexnum[actchar];
					flag=1;
				}
			}

			return parseInt(result, 16);
			//return result;
		};

		this.crc_convertentry = function(input, order){
			// convert from ascii to hexadecimal value (stored as byte sequence)
			var len;
			var actchar;
			var polynom = new Array (0,0,0,0,0,0,0,0);
			var brk = new Array (-1,0,0,0,0,0,0,0);

			// convert crc value into byte sequence
			len = input.length;
			for (i=0; i < len; i++) {
				actchar = parseInt(input.charAt(i), 16);
				if (isNaN(actchar) == true) return (brk);
				actchar&=15;

				for (j=0; j<7; j++) polynom[j] = ((polynom [j] << 4) | (polynom [j+1] >> 4)) & 255;
				polynom[7] = ((polynom[7] <<4) | actchar) & 255;
			}

			// compute and check crc order

			count = 64;
			for (i=0; i<8; i++) {
				for (j=0x80; j; j>>=1) {
				  if (polynom[i] & j) break;
				  count--;
				}
				if (polynom[i] & j) break;
			}
			if (count > order) return (brk);
			return(polynom);
		};


}




	var ab2hexstr = function(buf) {
		//return String.fromCharCode.apply(null, new Uint8Array(buf));
		var ret = "";
		if( typeof buf[0] == "undefined" )
		{
			var tmp = (new Uint8Array(buf));
			for( var i=0; i<tmp.length; i++ )
			{
				if( tmp[i]<16) ret += "0" + tmp[i].toString(16)+"-";
				else ret += tmp[i].toString(16)+"-";
			}
		}
		else
		{
			var tmp = buf;
			for( var i=0; i<tmp.byteLength; i++ )
			{
				if( tmp[i]<16) ret += "0" + tmp[i].toString(16)+"-";
				else ret += tmp[i].toString(16)+"-";
			}
		}
		return ret.substring(0, ret.length-1).toUpperCase();
	}
	
	var ab2str = function(buf){
		var ret = "";
		if( typeof buf[0] == "undefined" )
		{
			var tmp = (new Uint8Array(buf));
			for( var i=0; i<tmp.length; i++ )
			{
				ret += String.fromCharCode(tmp[i]);
			}
		}
		else
		{
			for( var i=0; i<buf.byteLength; i++ )
			{
				ret += String.fromCharCode(buf[i]);
			}
		}
		return ret;
	}
	
	var hexstr2ab = function(str) {
		// Remove not hex chars
		str=str.replace(/[^A-Fa-f0-9]/g, "");
		
		var buf=new ArrayBuffer(str.length/2);
		var bufView=new Uint8Array(buf);
		for (var i=0; i<str.length; i+=2){
		bufView[i/2]=parseInt(str[i] + str[i+1], 16);
		}
		return buf;
	}