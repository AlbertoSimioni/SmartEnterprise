import sys
import zmq

#port = "3000"
port = "30010"


# Socket to talk to server
context = zmq.Context()
socket = context.socket(zmq.SUB)

print "Collecting updates from server..."
#socket.connect ("tcp://localhost:%s" % port)
socket.connect ("tcp://147.162.226.101:%s" % port)

topicfilter = ""
socket.setsockopt(zmq.SUBSCRIBE, topicfilter)

# Process 5 updates

while True:
    string = socket.recv_string()
    #topic, messagedata = string.split()
    print string
