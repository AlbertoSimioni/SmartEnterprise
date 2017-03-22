# -*- coding:utf-8 -*-
from __future__ import absolute_import
from __future__ import unicode_literals
from __future__ import print_function


from os import environ

from twisted.internet.defer import inlineCallbacks

from autobahn.twisted.util import sleep
from autobahn.twisted.wamp import ApplicationSession, ApplicationRunner

import json
import uuid
import time
import gevent

from websocket import create_connection
import six

from array import *

from locust import HttpLocust, TaskSet, task
from locust.events import request_success

runner = ApplicationRunner(
	        environ.get("AUTOBAHN_DEMO_ROUTER", u"ws://127.0.0.1:8080/ws"),
	        u"crossbardemo",
	    )

class EchoTaskSet(TaskSet):

    def on_start(self):
        self.user_id = six.text_type(uuid.uuid4())
        global runner
        #self.runnerSub = ApplicationRunner(
	    #    environ.get("AUTOBAHN_DEMO_ROUTER", u"ws://127.0.0.1:8080/ws"),
	    #    u"crossbardemo",
	    #)
        runner.run(Subscriber)

   # @task
    #def sent(self):
     #   runner.run(Publisher)
        #body = json.dumps({'message': 'hello, world','counter':self.counter, 'user_id': self.user_id})
        #self.ws.send(body)


counter = 0
start_times = []


class Publisher(ApplicationSession):
    """
    An application component that publishes an event every second.
    """
    @inlineCallbacks
    def onJoin(self, details):
    	start_at = time.time() #in sencondi
        global counter
        global start_times
        start_times.append(start_at)
        self.publish(u'com.myapp.topic1', counter)
        request_success.fire(
            request_type='WebSocket Sent',
            name='test/ws/echo',
            response_time=int((time.time() - start_at) * 1000),
            response_length=len(10),
        )
        counter = counter + 1



class Subscriber(ApplicationSession):
    """
    An application component that subscribes and receives events, and
    stop after having received 5 events.
    """

    @inlineCallbacks
    def onJoin(self, details):
        #print("session attached")
        self.received = 0
        sub = yield self.subscribe(self.on_event, u'com.myapp.topic1')
        #print("Subscribed to com.myapp.topic1 with {}".format(sub.id))

    def on_event(self, i):
        print("Got event: {}".format(i))
        self.received += 1
        global start_times
        # self.config.extra for configuration, etc. (see [A])
        end_at = time.time()
        response_time = int((end_at - start_times[i]) * 1000)
        request_success.fire(
            request_type='WebSocket Recv',
            name='test/ws/echo',
            response_time=response_time,
            response_length=len(res),
        )


class EchoLocust(HttpLocust):
    host = "ws://127.0.0.1:5000/"
    task_set = EchoTaskSet
    min_wait = 1000
    max_wait = 3000



