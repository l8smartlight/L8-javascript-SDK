/*!
 * Chrome Serial Port Wrapper v1.0
 * http://www.l8smartlight.com/
 *
 *
 * Date: 2014-04-01
 */


function SerialPort(connect_cb, disconnect_cb, onRecive_cb, send_cb) {

	this.systemPorts = null;
	
	this.bConsoleLog = false;		// Enable/disable console logging
	
    this.port = "";
    this.speed = 115200;
	this.isConnected = false;
	this.connectionId = -1;
	//this.readInterval = null; // Read Timer 
	//this.readTime = 500; // 500ms
	//this.readBytes = 128; // Max bytes to receive
	
	// User callbacks
	this.send_user_cb = send_cb;
	this.onReceive_user_cb = onRecive_cb;
	this.connect_user_cb = connect_cb;
	this.disconnect_user_cb = disconnect_cb;
	
	
	this.getSystemPorts = function() {
		return this.systemPorts;
	}
	
	
	// function getDevices()
    this.getDevices = function() {
		var self = this;
        chrome.serial.getDevices(function(ports) {
										self.systemPorts = ports;
									}
			);
    }

	
	this.getDevices();
	
	// function open()
	this.connect = function(port, speed) {
		if( this.isConnected )
			return;
		
		this.port = port;
		if(speed) this.speed = speed;
		
		var self = this;
		
		chrome.serial.onReceive.addListener(this.onReceive);
		chrome.serial.onReceiveError.addListener(this.onReceiveError);
		
        chrome.serial.connect(this.port, {bitrate: this.speed}, function(connectionInfo) {
																if( typeof connectionInfo == "undefined")  // Connection error
																{
																	// Notify Connect Error to app
																	if( self.connect_user_cb ) self.connect_user_cb(false);
																	return;
																}
																self.isConnected = true;
																self.connectionId = connectionInfo.connectionId;
																
																// Notify Connect OK to app
																if( self.connect_user_cb ) self.connect_user_cb(true);
															});
	}
	
	
	// function close()
	this.disconnect = function() {
		if( !this.isConnected )
			return;
		
		var self = this;
		
        chrome.serial.disconnect(this.connectionId, function(closeInfo) {
														self.isConnected = false;
														self.connectionId = -1;
														
														// Call user callback
														if( self.disconnect_user_cb ) self.disconnect_user_cb(true);
													});
	}
	
	
	// function send(data)
	// data is a binary ArrayBuffer. Can be generated from text using   hexstr2ab(str)
	this.send = function(data){
		if( !this.isConnected || this.connectionId == -1 )
			return;
		
		// check data is a ArrayBuffer
		if( data.byteLength === undefined || data.byteLength == 0)
			return;
		
		var self = this;
		var bytes_to_send = data.length;
		
		this.consoleLog("log", "Sending Command: (" + data.byteLength + " bytes) " + ab2hexstr(data));
		chrome.serial.send(this.connectionId, data, function(sendInfo){
														
														//if( sendInfo.bytesWritten < bytes_to_send )
		
														if( self.send_user_cb ) self.send_user_cb(sendInfo.bytesWritten);
													});
	}
	
	
	
	
	this.onReceive = function(info){
		this.L8_serialPort.consoleLog("log", "Data received: (" + info.data.byteLength + " bytes) " + ab2hexstr(info.data));
		
		// Here, "this" is "Window", so use global L8_SLCP instead of this.callback onReceive_user_cb
		this.L8_SLCP.OnReceive(info.data); 
		//this.onReceive_user_cb(info.data);   // DOES NOT WORK, "this" is not the SerialPort object
	}
	
	this.onReceiveError = function(info){
		this.L8_serialPort.consoleLog("warn", "ERROR: Receiving data");
		
		// Rise error?
	}
	
	
	this.consoleLog = function (type, text){
		if( this.bConsoleLog)
		{
			if( type=="log") console.log("[SerialPort] " + text);
			else if( type=="warn") console.warn("[SerialPort] " + text);
			else if( type=="error") console.error("[SerialPort] " + text);
		}
	}
	

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