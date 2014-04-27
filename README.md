![L8smartlight](http://corcheaymedia.com/l8/wp-content/plugins/wp-l8-styles/images/logo.png)
# L8 smartlight JavaScript SDK V1.0

This JavaScript SDK is intended to be used inside a Chrome App as it needs hardware access to a serial port to communicate to the L8.

To access the hardware we've also created a wrapper over the Chrome Serial Port API.


## Chrome Serial Port Wrapper (serialport.class-1.0.js)

This class exports the basic methods needed to use a serial port:

- **connect**: To open the serial port `.connect(port, speed)`
- **disconnect**: To open the serial port `.disconnect()`
- **send**: To send data throught the serial port `.send(data)`

When new data is received from the L8, the `.onReceive(info)` callback will be called and it will also call the SLCP class **onReceive** method.

I don't really like this mechanism as this way, the serial port class is not completely independent from the SLCP class. But this is the only way we found to handle data reception as everything works through events here.

## SLCP Class (slcp.class-1.0.js)

This is main SDK class, which exports the methods needed to communicate to the L8 and to parse the data received from it.


## Usage

To use the JavaScript SDK, have a look a the sample Chrome app:
L8-javascript-SDK / examples / l8.chrome.app.sample-1.0 /

Under the **js** directory you'll find the main app script: **l8.app.js**

### Initialize the SDK

First of all we need to initialize the SDK:

```javascript
L8_serialPort = new SerialPort(serial_connect_cb, serial_disconnect_cb, null, null);

L8_SLCP = new SLCP({serialPort: L8_serialPort, OnCommand: OnSLCPommand});
```

First, instantiate a new serial port, where:
- **serial_connect_cb** is the callback that will be called when the connection is stablished after calling `L8_serialPort.connect()`. In this callback you can update your UI depending on the connection result.
- **serial_disconnect_cb**. is the callback that will be called when the serial port is closed after calling `L8_serialPort.disconnect()`. In this callback you can update your UI indicating connection is "Disconnected"


Now, instantiate the SLCP class, where:
- **serialPort: L8_serialPort** is the just created serial port that this class will use to communicate with the L8.
- **OnCommand: OnSLCPommand** this is the callback that will be called when a new SLCP command arrives from the L8.


### Get system ports

After this, you can, for example, get the system serial ports to select the one created by the L8 driver.
In the example this is done in the function:
`fillPorts()` in l8.app.js line 159


It uses the variable: L8_serialPort.systemPorts which is automatially filled when you create the Serial Port.


### Connect and disconnect

To open and close the serial port, you can simply have a button which calls:
```javascript
L8_serialPort.connect($('#serial_ports :selected').text(), null);  // Port, bitrate
```

and

```javascript
L8_serialPort.disconnect();
```

See the example file: l8.app.js line 64


When the connection is stablished your **serial_connect_cb** callback will fire, and if there were no errors (result will be true) you can start the SLCP class:

```javascript
L8_SLCP.Start();
```

This is needed to **receive commands from the L8** as this starts the reception thread.



### Sending commands to the L8

Once the serial port is open, and SLCP class is started, you are now ready to communicate with the L8.




### Receiving commands from the L8






