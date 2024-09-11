# Lux Heartbeat Proxy

This runs a simple proxy to allow blocking your LuxPower inverters connection to China.
The proxy responds to the interver heartbeat packet to prevent the dongle from restarting every 5 minutes.

This is based on work by [@stalniy](https://github.com/stalniy)
[Original discussion](https://github.com/guybw/LuxPython_DEV/issues/295)

To be used in conjuection with Guy's LuxPython_DEV

It requires you have access to the web interface for your LuxPower Wifi Dongle

Change network setting one to point to the IP address of the hostmachine running your Home Assistant instance

![image](https://github.com/user-attachments/assets/ab889c45-bdb1-44c0-a1d0-b7ac73326db3)


# Install

* To go "Settings" -> "Add-ons"
* Click "Add-on Store" button
* Click kebab menu -> "Repositories"
* Add "https://github.com/raldred/lux_heartbeat_proxy"

* Refresh you'll find the addon available in the list

![image](https://github.com/user-attachments/assets/0888a66c-46d2-4dcc-8450-d095c88eec27)

* Install
* Start
* Enable "Watchdog" to bring it back up if it crashes.
