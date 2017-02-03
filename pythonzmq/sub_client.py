from __future__ import print_function

__author__ = 'Guido Goldstein'

import sys
import zmq


import threading
import time
from zmq.utils.monitor import recv_monitor_message




#port = "3000"
port = "30010"





# Socket to talk to server
context = zmq.Context()
socket = context.socket(zmq.SUB)


################ MONITORING CODE PART
print("libzmq-%s" % zmq.zmq_version())
if zmq.zmq_version_info() < (4, 0):
    raise RuntimeError("monitoring in libzmq version < 4.0 is not supported")

EVENT_MAP = {}
print("Event names:")
for name in dir(zmq):
    if name.startswith('EVENT_'):
        value = getattr(zmq, name)
        print("%21s : %4i" % (name, value))
        EVENT_MAP[value] = name


def event_monitor(monitor):
    while monitor.poll():
        evt = recv_monitor_message(monitor)
        evt.update({'description': EVENT_MAP[evt['event']]})
        print("Event: {}".format(evt))
        if evt['event'] == zmq.EVENT_MONITOR_STOPPED:
            break
    monitor.close()
    print()
    print("event monitor thread done!")




monitor = socket.get_monitor_socket()

t = threading.Thread(target=event_monitor, args=(monitor,))
t.start()

################# END OF MONITORING CODE


print("Collecting updates from server...")
#socket.connect ("tcp://localhost:%s" % port)
socket.connect ("tcp://147.162.226.101:%s" % port)



topicfilter = ""
socket.setsockopt(zmq.SUBSCRIBE, topicfilter)

# Process 5 updates



while True:
    string = socket.recv_string()
    #topic, messagedata = string.split()
    print(string)
